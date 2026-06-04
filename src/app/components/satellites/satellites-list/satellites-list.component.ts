import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { combineLatest, delay, filter, forkJoin, map, Subject, takeUntil } from 'rxjs';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { LayoutService } from '../../../services/layout.service';
import { DrawerModule } from 'primeng/drawer';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { MapService } from '../../maps/services/map-service';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DialogService } from 'primeng/dynamicdialog';
import { BadgeModule } from 'primeng/badge';
import { SatellitesService } from '../services/satellites.service';
import { SatConfigService } from '../services/satellites.config.service';
import { SatelliteViewModel } from '../interfaces/satellite-view.interface';
import { SatelliteIndexItem } from '../interfaces/satellite-item.interface';
import { SAT_META } from '../constants/sat-meta.constants';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MapSearchComponent } from '../../maps/components/map-search/map-search.component';
import { MapGeocodingComponent } from '../../maps/components/map-geocoding/map-geocoding.component';
import { MapGeoLocationComponent } from '../../maps/components/map-geo-location/map-geo-location.component';
import booleanPointInPolygon
    from '@turf/boolean-point-in-polygon';
import { point }
    from '@turf/helpers';
import {
    BEAM_TABLES
} from '../constants/beam-tables';
import { MapSearchService } from '../../maps/services/map-search.service';
import { SatelliteCalculationService } from '../services/satellites.calc-service';
@Component({
    selector: 'app-satellites-list',
    standalone: true,
    templateUrl: './satellites-list.component.html',
    styleUrls: ['./satellites-list.component.scss'],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        ToggleSwitchModule,
        FormsModule,
        TooltipModule,
        ButtonModule,
        ReactiveFormsModule,
        PanelModule,
        SkeletonModule,
        DrawerModule,
        SelectButtonModule,
        BadgeModule,
        RadioButtonModule,
        MapSearchComponent,
        MapGeocodingComponent,
        MapGeoLocationComponent,
    ],
    providers: [DialogService]
})
export class SatellitesListComponent implements OnInit {
    public showOnlyAvailable = true;
    public activePanelKey: string | null = null;
    public form: FormGroup;
    public inProgress: boolean = true;
    public dialog: any;
    public skeletons = Array(6);
    public isSmallScreen: boolean;
    public visible: boolean = false;
    public count = 0;
    public satellites: SatelliteViewModel[] = [];
    private _destroy$ = new Subject<void>();
    public filteredCities: any[] = [];
    public colorOptions: any[] = [];
    public selectedColors: string[] = [];
    public selectedBeamKey: string | null = null;
    public filteredSatellites: SatelliteViewModel[] = [];
    public selectedSatelliteKey: string | null = null;
    //// 'yamal-601'
    private readonly MULTI_COLOR_SATELLITES = [
        'amu-7','express-103','y401'
    ];
    public visibleSatellites = new Set<string>();

    public onSelectSatellite(
        satellite: SatelliteViewModel
    ): void {

        this.selectSatellite(
            satellite
        );

    }

    public trackBySatellite(
        index: number,
        item: SatelliteViewModel
    ): string {

        return item.key;

    }


    public getBeamKey(
        satellite: SatelliteViewModel,
        beam: any
    ): string {

        return `${satellite.key}-${beam.beam}`;

    }

    public onShowOnlyAvailableChange(): void {

        this.updateFilteredSatellites();

    }

    private updateFilteredSatellites(): void {

        this.filteredSatellites =
            this.showOnlyAvailable
                ? this.satellites.filter(
                    sat => sat.available
                )
                : [...this.satellites];

        this._cdr.markForCheck();

    }
    private _watchForLoadChanges() {
        this._mapService.load$
            .pipe(
                filter(Boolean),
                takeUntil(this._destroy$),
            )
            .subscribe((mapInstance: any) => {
                this.inProgress = false;

                this._cdr.markForCheck();

            });
    }


    public showBeam(
        satellite: SatelliteViewModel,
        beam: any,
        event: Event
    ): void {

        event.stopPropagation();

        const beamKey =
            this.getBeamKey(
                satellite,
                beam
            );

        if (
            this.selectedBeamKey === beamKey
        ) {

            this.selectedBeamKey = null;

            this._mapService.clearBeamFeatures();

            return;
        }

        this.selectedBeamKey = beamKey;

        this._mapService.setBeamFeatures([
            beam.allFeatures ?? [beam.feature]
        ]);

    }

    public getBeamNumbers(
        sat: SatelliteViewModel
    ): string {

        return sat.activeBeams
            ?.map(beam => beam.beam)
            .join(', ') ?? '';

    }

    private updateSatelliteBeams(
        satellite: SatelliteViewModel,
        coordinates: [number, number]
    ): void {

        const pt =
            point(coordinates);

        forkJoin(

            satellite.layers.map(
                layer =>

                    this.satellitesService
                        .getBeamCoverage(layer)
                        .pipe(

                            map(fc => {

                                let bestFeature: any = null;
                                let bestLevel = -Infinity;

                                for (const feature of fc.features) {

                                    if (
                                        !booleanPointInPolygon(
                                            pt,
                                            feature as any
                                        )
                                    ) {
                                        continue;
                                    }

                                    const level =
                                        this.parseLevelFromFeatureName(
                                            satellite.key,
                                            feature.properties?.['name']
                                        );

                                    if (
                                        Number.isFinite(level) &&
                                        level > bestLevel
                                    ) {

                                        bestLevel = level;
                                        bestFeature = feature;

                                    }

                                }

                                return {
                                    layer,
                                    feature: bestFeature,
                                    allFeatures: fc.features
                                };

                            })

                        )
            )

        )
            .subscribe(results => {

                const beams =
                    results
                        .filter(
                            x => !!x.feature
                        )
                        .map(x => {


                            const props =
                                x.feature?.properties ?? {};

                            const level =
                                this.parseLevelFromFeatureName(
                                    satellite.key,
                                    props['name']
                                );

                            const zone =
                                this.getZoneText(
                                    satellite.key,
                                    level
                                );

                            const beamNo =
                                Number(x.layer.beam);

                            const beamTable =
                                BEAM_TABLES[
                                satellite.key
                                ];

                            const info =
                                beamTable?.[
                                beamNo
                                ];


                            const displayLevel =
                                this.getDisplayLevel(
                                    satellite.key,
                                    level
                                );

                            return {

                                beam: beamNo,

                                zone,

                                level,

                                levelLabel:
                                    displayLevel,


                                code:
                                    info?.code ?? '—',

                                locationCode:
                                    info?.loc ?? '—',

                                polarization:
                                    info?.pol ?? '—',

                                feature:
                                    x.feature,
                                allFeatures: x.allFeatures


                            };

                        });


                const uniqueBeams =
                    Array.from(

                        new Map(
                            beams.map(
                                beam => [
                                    beam.beam,
                                    beam
                                ]
                            )
                        ).values()

                    );

                satellite.activeBeams = uniqueBeams;

                satellite.available = uniqueBeams.length > 0;
                this.updateFilteredSatellites();
                this._cdr.markForCheck();



            });

    }


    private updateAllSatellites(
        coordinates: [number, number]
    ): void {

        this.satellites.forEach(
            satellite =>
                this.updateSatelliteBeams(
                    satellite,
                    coordinates
                )
        );

    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    public toggleCoverage(
        satellite: SatelliteViewModel,
        event: Event
    ): void {

        event.stopPropagation();
        this.selectSatellite(
            satellite
        );

        if (
            this.visibleSatellites.has(
                satellite.key
            )
        ) {

            this.visibleSatellites.clear();

            this._mapService
                .clearCoverageFeatures();
            return;

        }

        this.visibleSatellites.clear();

        this.visibleSatellites.add(
            satellite.key
        );

        const requests =
            satellite.layers.map(
                layer =>
                    this.satellitesService
                        .getCoverage(
                            layer.file
                        )
            );

        forkJoin(requests)
            .pipe(

                map(collections =>
                    collections.flatMap(
                        fc => fc.features
                    )
                )

            )
            .subscribe(features => {

                this._mapService
                    .setCoverageFeatures(
                        features,
                        satellite.multiColorCoverage,
                        satellite.meta.band as any
                    );

                this._cdr.markForCheck();

            });

    }

    value: any;

    constructor(
        private _cdr: ChangeDetectorRef,
        private _fb: FormBuilder,
        private satellitesService: SatellitesService,
        private satConfigService: SatConfigService,
        private _mapService: MapService,
        private _searchService: MapSearchService,
        private router: Router,
        public dialogService: DialogService,
        private satelliteCalculator:
            SatelliteCalculationService,
        private breakpointObserver: BreakpointObserver,
        public layoutService: LayoutService,
    ) {

        this.breakpointObserver
            .observe(['(min-width: 992px)', '(max-width: 767px)'])
            .pipe(delay(100))
            .subscribe((state: BreakpointState) => {
                this.isSmallScreen = state.breakpoints['(max-width: 767px)'];

            });
        this._buildForm();
    }

    public ngOnInit(): void {

        this._watchForLoadChanges();

        this.satellitesService.findAll()
            .subscribe(layers => {

                const grouped = layers.reduce((acc, layer) => {

                    if (!acc[layer.sat]) {
                        acc[layer.sat] = [];
                    }

                    acc[layer.sat].push(layer);

                    return acc;

                }, {} as Record<string, SatelliteIndexItem[]>);

                this.satellites = Object.entries(grouped)
                    .flatMap(([key, layers]) => {

                        if (['y300k', 'y402'].includes(key)) {
                            return [];
                        }

                        const meta = SAT_META[key];
                        const band = meta?.band ?? '';

                        if (!meta) {
                            return [];
                        }

                        return [{
                            key,
                            meta,
                            layers,
                            band,
                            multiColorCoverage:
                                this.MULTI_COLOR_SATELLITES.includes(
                                    key
                                )
                        }];

                    })
                    .sort(
                        (a, b) =>
                            a.meta.orbDeg - b.meta.orbDeg
                    );

                this.count = this.satellites.length;
                this.updateFilteredSatellites();
                this._cdr.markForCheck();

            });


        this._watchSelectedSatellite();


        this._searchService.selectedLocation$
            .pipe(
                filter(Boolean)
            )
            .subscribe(location => {

                this.updateAllSatellites(
                    location!.coordinates
                );

            });

    }


    private _watchSelectedSatellite(): void {

        combineLatest([
            this._mapService.selectedSatellite$,
            this._searchService.selectedLocation$
        ])
            .pipe(
                filter(([sat, location]) =>
                    !!sat && !!location
                )
            )
            .subscribe(([satellite, location]) => {

                this.updateSatelliteBeams(
                    satellite!,
                    location!.coordinates
                );

                const look =
                    this.satelliteCalculator
                        .calculateLookAngles(

                            location!.coordinates[1],

                            location!.coordinates[0],

                            satellite!.meta.orbDeg

                        );

                satellite!.azimuthTrue =
                    look.azimuthTrue;

                satellite!.azimuthMagnetic =
                    look.azimuthMagnetic;

                satellite!.magneticDeclination =
                    look.magneticDeclination;

                satellite!.elevation =
                    look.elevation;

                satellite!.skew =
                    look.skew;

                this._cdr.markForCheck();

            });

    }



    private getDisplayLevel(
        satKey: string,
        level: number
    ): string {

        if (!Number.isFinite(level)) {
            return '—';
        }

        if (satKey === 'yamal-601') {
            return `${level - 44} dB`;
        }
        if (satKey === 'amu-7') {
            return `${level + 10} dB`;
        }

        if (satKey === 'am5') {
            return `${level + 10} dB`;
        }

        return `${level} dB`;
    }

    public selectSatellite(
        satellite: SatelliteViewModel
    ): void {

        const previousKey =
            this.selectedSatelliteKey;

        this.activePanelKey = satellite.key;

        this.selectedSatelliteKey = satellite.key;

        if (
            previousKey &&
            previousKey !== satellite.key
        ) {

            this.visibleSatellites.clear();
            this.selectedBeamKey = null;
            this._mapService.clearBeamFeatures();

            this._mapService.clearCoverageFeatures();

        }

        this._mapService.setSelectedSatellite(
            satellite
        );

    }


    public onCollapsedChange(
        collapsed: any,
        satellite: any
    ): void {

        if (!collapsed) {

            this.selectSatellite(
                satellite
            );

        } else if (
            this.activePanelKey === satellite.key
        ) {


        }

    }



    private parseLevelFromFeatureName(
        satKey: string,
        name?: string
    ): number {

        if (!name) {
            return NaN;
        }

        if (satKey === 'yamal-601') {

            const match =
                name
                    .replace(',', '.')
                    .match(
                        /([\d.]+)\s*дБВт/i
                    );

            return match
                ? Number(match[1])
                : NaN;

        }

        if (satKey === 'amu-1') {

            const match =
                name.match(
                    /([\d.]+)\s*dB/i
                );

            return match
                ? Number(match[1])
                : NaN;

        }

        const match =
            name
                .replace(',', '.')
                .match(/([\d.]+)/);

        return match
            ? Number(match[1])
            : NaN;

    }


    private getZoneText(
        satKey: string,
        level: number
    ): string {

        if (!Number.isFinite(level)) {
            return '—';
        }

        if (satKey === 'yamal-601') {

            return level >= 59
                ? 'Зона уверенного приёма'
                : 'Зона неуверенного приёма';

        }

        if (satKey === 'amu-1') {

            return level >= 13
                ? 'Зона уверенного приёма'
                : 'Зона неуверенного приёма';

        }

        return String(level);

    }


    public onChange({ value }: any): void {
        this.router.navigate(['city', value.id]);
    }

    public onOpen(): void {
        this.visible = !this.visible;
    }


    public toggleMapView(): void {

        const isSidebar =
            this.layoutService.isMapSidebar();

        const mode =
            this.layoutService.mapLayoutMode();

        // Панель -> Разделение
        if (
            mode === 'overlay' &&
            isSidebar
        ) {

            this.layoutService
                .setMapLayoutMode(
                    'stack'
                );

            return;

        }

        // Разделение -> Карта
        if (
            mode === 'stack'
        ) {

            this.layoutService
                .setMapLayoutMode(
                    'overlay'
                );

            this.layoutService
                .isMapSidebar
                .set(false);

            return;

        }

        // Карта -> Панель
        this.layoutService
            .isMapSidebar
            .set(true);

    }

    public toggleSideBar(): void {
        this.layoutService.toggleSideBar();

    }

    private _buildForm(): void {
        this.form = this._fb.group({
            isCities: new FormControl(true),

        });
    }

}
