// map.component.ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, NgZone, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipModule } from 'primeng/chip';
import {
    YMapComponent,
    YMapDefaultSchemeLayerDirective,
    YMapDefaultFeaturesLayerDirective,
} from 'angular-yandex-maps-v3';
import { RouterModule } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';
import { MapSidebarComponent } from './components/map-sidebar/map-sidebar.component';
import { MapZoomControlComponent } from './components/map-zoom-control/map-zoom-control.component';
import { MapFullscreenComponent } from './components/map-fullscreen/map-fullscreen.component';
import { MapSettingsControlComponent } from './components/map-settings-control/map-settings-control.component';
import { MapService } from './services/map-service';
import { auditTime, BehaviorSubject, combineLatest, debounceTime, delay, distinctUntilChanged, Subject, takeUntil, tap } from 'rxjs';
import { BBox } from 'geojson';
import { MapEventManager } from './services/map-event-manager';
import { YMapFeatureDirective } from './directives/y-map-feature.directive';
import { YMapFeatureDataSourceDirective } from './directives/y-map-feature-data-source.directive';
import { YMapLayerDirective } from './directives/y-map-layer.directive';
import { MapLegendControlComponent } from './components/map-legend-control/map-legend-control.component';
import { YMapClustererDirective } from './directives/y-map-clusterer.directive';
import { LayoutService } from '../../services/layout.service';
import { YMapMouseDirective } from './directives/y-map-mouse.directive';
import { MapSearchComponent } from './components/map-search/map-search.component';
import { YMapDefaultMarkerDirective } from './directives/y-map-default-marker.directive';
import { YMapMarkerDirective } from './directives/y-map-marker.directive';
import { YMapHintDirective } from './directives/y-map-hint.directive';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MapSearchService } from './services/map-search.service';
import { SatelliteViewModel } from '../satellites/interfaces/satellite-view.interface';
import { YMapSatelliteLayerDirective } from './directives/ymap-satelite-layer.directive';
import { YMapTileDataSourceDirective } from './directives/y-map-tile-data-source.directive';
@Component({
    selector: 'app-map',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        ChipModule,
        SkeletonModule,
        MapSidebarComponent,
        MapZoomControlComponent,
        MapSettingsControlComponent,
        MapSearchComponent,
        MapFullscreenComponent,
        YMapComponent,
        YMapDefaultSchemeLayerDirective,
        YMapDefaultFeaturesLayerDirective,
        YMapFeatureDirective,
        YMapLayerDirective,
        MapLegendControlComponent,
        YMapClustererDirective,
        YMapDefaultMarkerDirective,
        YMapMarkerDirective,
        YMapMouseDirective,
        YMapHintDirective,
        YMapSatelliteLayerDirective,
        YMapFeatureDataSourceDirective,
        YMapTileDataSourceDirective
    ],
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MapComponent {
    public center = signal<[number, number]>([37.617698, 55.755864]);
    public zoom = signal<number>(3);
    public theme = signal<'light' | 'dark'>('light');
    public basemap = signal<any>('scheme');
    public isDraggingAddress = false;
    public bounds = signal<[[number, number], [number, number]]>([[-83.8, -170.8], [83.8, 170.8]]);
    public zoomRange = signal({ min: 3, max: 19 });
    public isMapLoad = false;
    public coverageFeatures: any[] = [];
    private map?: any;
    public isVisible = false;
    public encodeURIComponent = encodeURIComponent;
    public isVisibleSidebarBottom = false;
    public isSmallScreen: boolean;
    public isLargeScreen: boolean;
    public searchMarker?: any;
    public fullscreenClass = 'layout-map-container';
    public satelliteGraphics: any[] = [];

    public osmSourceProps = {
        id: 'osm-source',
        raster: {
            type: 'ground',
            fetchTile: (
                x: number,
                y: number,
                z: number
            ) =>
                `https://tile.openstreetmap.org/${z}/${x}/${y}.png`
        },
        zoomRange: {
            min: 3,
            max: 19
        },
        clampMapZoom: true
    };

    public osmLayerProps = {
        source: 'osm-source',
        type: 'ground',
        zIndex: 0
    };

    public satelliteMarker?: {
        id: string;
        orbDeg: any,
        coordinates: [number, number];
        title: string;
    };

    public setBasemap(v: any) { this.basemap.set(v); }

    public schemeProps: any = {
        source: 'scheme',
        visible: true,
        layers: {
            ground: { zIndex: 1500 }, // дороги/вода
            labels: { zIndex: 2000 }, // подписи
            icons: { zIndex: 2050 }, // если нужны иконки
            buildings: { zIndex: 1600 }, // если не скрываешь их заливку
        },              // слой схемы рисуем
        customization: {
            style: [
                // убираем фон (земля, админ.подложки, транспортный фон и т.п.)
                {
                    tags: { any: ['land', 'landcover', 'terrain', 'landscape', 'admin', 'transit'] },
                    elements: 'geometry', stylers: [{ opacity: 0 }]
                },

                // убираем заливки зданий (контуры/подписи останутся)
                {
                    tags: { any: ['building'] },
                    elements: 'geometry', stylers: [{ opacity: 0 }]
                },

                // (опционально) подкраска дорог и воды под «гибрид»
                // { tags: { any: ['road'] },  elements: 'geometry', stylers: [{ color: '#f2a33a' }] },
                { tags: { any: ['water'] }, elements: 'geometry', stylers: [{ opacity: 0 }] },
            ]
        }
    };

    private _eventManager: MapEventManager = new MapEventManager(inject(NgZone));
    private _bounds = this._eventManager.getLazyEmitter<{
        object: any;
        event: { location: { bounds: any } };
    }>('onUpdate');
    private zoom$ = new BehaviorSubject<number>(this.zoom());
    private bounds$ = new BehaviorSubject<BBox | null>(null);
    private _destroy$ = new Subject<boolean>();
    public beamFeatures: any[] = [];
    public dragLocation$ =
        new BehaviorSubject<
            [number, number] | null
        >(null);

    constructor(
        public cdr: ChangeDetectorRef,
        private ngZone: NgZone,
        public mapService: MapService,
        private _searchService: MapSearchService,
        public layoutService: LayoutService,
        private breakpointObserver: BreakpointObserver,
    ) {

        this.theme.set(this.layoutService.config().darkTheme ? 'dark' : 'light');

        this.breakpointObserver
            .observe(['(min-width: 992px)', '(max-width: 767px)'])
            .pipe(delay(100))
            .subscribe((state: BreakpointState) => {
                this.isLargeScreen = state.breakpoints['(min-width: 992px)'];
                this.isSmallScreen = state.breakpoints['(max-width: 767px)'];
                this.cdr.detectChanges();
            });
    }

    private greatCircleLatLngs(
        lat1: number,
        lon1: number,
        lat2: number,
        lon2: number,
        steps = 96
    ): [number, number][] {

        const toRad = (d: number) => d * Math.PI / 180;
        const toDeg = (r: number) => r * 180 / Math.PI;

        const φ1 = toRad(lat1);
        const λ1 = toRad(lon1);

        const φ2 = toRad(lat2);
        const λ2 = toRad(lon2);

        const v1 = [
            Math.cos(φ1) * Math.cos(λ1),
            Math.cos(φ1) * Math.sin(λ1),
            Math.sin(φ1)
        ];

        const v2 = [
            Math.cos(φ2) * Math.cos(λ2),
            Math.cos(φ2) * Math.sin(λ2),
            Math.sin(φ2)
        ];

        let dot =
            v1[0] * v2[0] +
            v1[1] * v2[1] +
            v1[2] * v2[2];

        dot = Math.min(1, Math.max(-1, dot));

        const omega = Math.acos(dot);

        if (!Number.isFinite(omega) || omega < 1e-10) {

            return [
                [lat1, lon1],
                [lat2, lon2]
            ];

        }

        const sinOmega = Math.sin(omega);

        const result: [number, number][] = [];

        for (let i = 0; i <= steps; i++) {

            const t = i / steps;

            const a =
                Math.sin((1 - t) * omega) /
                sinOmega;

            const b =
                Math.sin(t * omega) /
                sinOmega;

            const x =
                a * v1[0] +
                b * v2[0];

            const y =
                a * v1[1] +
                b * v2[1];

            const z =
                a * v1[2] +
                b * v2[2];

            const phi =
                Math.atan2(
                    z,
                    Math.sqrt(
                        x * x +
                        y * y
                    )
                );

            const lambda =
                Math.atan2(y, x);

            result.push([
                toDeg(phi),
                toDeg(lambda)
            ]);

        }

        return result;
    }


    ngOnDestroy(): void {
        this._destroy$.next(true);
        this._destroy$.complete();

        this._eventManager.setTarget(null);

        this.coverageFeatures = [];
        this.satelliteGraphics = [];
        this.beamFeatures = [];

        this.searchMarker = undefined;
        this.satelliteMarker = undefined;

        this.mapService.load$.next(null);

        this.map?.destroy?.();
        this.map = undefined;
        this.cdr.markForCheck();

    }

    public onMapReady(ev: { entity: any; ymaps3: typeof ymaps3 }) {
        this.map = ev.entity;
        this.isMapLoad = true;
        this.mapService.load$.next(this.map);
        this._eventManager.setTarget(this.map);
        this._watchBaseLayer();
        this._watchFoDarkThemeChanges();
        this._watchCoverage();
        this._watchSatelliteGraphics();
        this._watchSelectedSatellite();
        this._watchFoLocationChanges();
        this._watchBeamCoverage();
        this.cdr.markForCheck();
    }


    private _watchBeamCoverage(): void {

        this.mapService.beamFeatures$
            .pipe(
                takeUntil(this._destroy$)
            )
            .subscribe(features => {

                this.beamFeatures = features.map(
                    (f, index) => ({
                        id: `beam-${index}`,
                        geometry: this.normalizeGeometry(
                            structuredClone(
                                f.geometry
                            )
                        ),
                        properties: f.properties,
                        style: {
                            stroke: [{
                                color: '#00BFFF',
                                width: 4,
                                opacity: 1
                            }],
                            fill: '#00BFFF33'
                        }
                    })
                );

                this.cdr.markForCheck();

            });

    }

    private _watchBaseLayer(): void {

        this.mapService.baseLayer$
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
                takeUntil(this._destroy$)
            )
            .subscribe(layer => {
                this.setBasemap(layer)
            });
    }

    private _watchSatelliteGraphics(): void {

        this.mapService.satelliteGraphics$
            .pipe(
                takeUntil(this._destroy$)
            )
            .subscribe(features => {
                this.satelliteGraphics = features;
                this.cdr.markForCheck();
            });

    }

    private _watchSelectedSatellite(): void {

        combineLatest([
            this.mapService.selectedSatellite$,
            this._searchService.selectedLocation$,
            this._searchService.dragLocation$
        ])
            .pipe(

                auditTime(16),

                takeUntil(
                    this._destroy$
                )

            )
            .subscribe(([satellite, location, dragCoordinates]) => {

                if (!location) {

                    this.satelliteMarker = undefined;

                    this.mapService.setSatelliteGraphics([]);

                    this.cdr.markForCheck();

                    return;

                }

                if (!satellite) {
                    return;
                }

                const coordinates =
                    Array.isArray(dragCoordinates)
                        ? dragCoordinates
                        : location.coordinates;

                this.satelliteMarker = {
                    id: 'satellite-marker',
                    coordinates: [
                        satellite.meta.orbDeg,
                        0
                    ],
                    orbDeg: satellite.meta.orbDeg,
                    title: satellite.meta.title
                };

                this.updateSatelliteLine(
                    satellite,
                    coordinates
                );

                this.cdr.markForCheck();

            });

    }

    private updateSatelliteLine(
        satellite: SatelliteViewModel,
        coordinates: [number, number]
    ): void {

        const points =
            this.greatCircleLatLngs(
                0,
                satellite.meta.orbDeg,
                coordinates[1],
                coordinates[0],
                128
            );

        this.mapService.setSatelliteGraphics([
            {
                id: 'satellite-line',
                geometry: {
                    type: 'LineString',
                    coordinates: points.map(
                        ([lat, lon]) => [lon, lat]
                    )
                },
                properties: {},
                style: {
                    stroke: [{
                        color: '#3B82F6',
                        width: 2,
                        opacity: 0.9,
                        dash: [8, 6]
                    }]
                }
            }
        ]);

    }

    private _watchCoverage(): void {

        this.mapService.coverageFeatures$
            .pipe(
                takeUntil(this._destroy$)
            )
            .subscribe(features => {

                this.coverageFeatures = features.map((f, index) => {

                    const color =
                        f.properties?.['stroke'] ||
                        f.properties?.['fill'] ||
                        '#007aff';

                    return {
                        id: `coverage-${index}`,

                        geometry: this.normalizeGeometry(
                            structuredClone(f.geometry)
                        ),

                        properties: f.properties,

                        style: {
                            stroke: [{
                                color: '#3B82F6',
                                width:
                                    f.properties?.['stroke-width'] ?? 2,
                                opacity:
                                    f.properties?.['stroke-opacity'] ?? 0.8
                            }],
                            fill: this.withAlpha(
                                '#3B82F6',
                                f.properties?.['fill-opacity'] ?? 0.3
                            )
                        }
                    };

                });
                this.cdr.markForCheck();

            });

    }

    private normalizeGeometry(
        geometry: any
    ): any {

        if (!geometry) {
            return geometry;
        }

        const normalizePoint = (
            point: number[]
        ): number[] => {

            const lon = point[0];
            const lat = point[1];

            return [
                lon >= 180
                    ? 179.999999
                    : lon <= -180
                        ? -179.999999
                        : lon,
                lat
            ];
        };

        if (geometry.type === 'Polygon') {

            geometry.coordinates =
                geometry.coordinates.map(
                    (ring: number[][]) =>
                        ring.map(normalizePoint)
                );

        }

        if (geometry.type === 'MultiPolygon') {

            geometry.coordinates =
                geometry.coordinates.map(
                    (polygon: number[][][]) =>
                        polygon.map(
                            (ring: number[][]) =>
                                ring.map(normalizePoint)
                        )
                );

        }

        return geometry;
    }


    public onSearchMarkerDragMove = (
        coordinates: any
    ): void => {

        this.isDraggingAddress = true;

        this._searchService
            .dragLocation$
            .next(coordinates);

        this.cdr.markForCheck();

    };

    public onSearchMarkerDragEnd = (
        coordinates: any
    ): void => {

        this._searchService
            .reverseGeocode(coordinates)
            .subscribe({

                next: () => {

                    this._searchService
                        .dragLocation$
                        .next(null);

                    this.isDraggingAddress = false;

                    this.cdr.markForCheck();

                },

                error: () => {

                    this.isDraggingAddress = false;

                    this.cdr.markForCheck();

                }

            });

    };

    public onHint(object?: any) {
        return object?.properties?.hint;
    }

    private _watchFoLocationChanges(): void {
        this._searchService.selectedLocation$
            .pipe(
                takeUntil(this._destroy$)
            )
            .subscribe(location => {
                if (!location) {

                    this.searchMarker = null;

                    this.cdr.markForCheck();

                    return;

                }

                this.onLocationSelected({
                    coordinates: location.coordinates,
                    label: location.label
                });

                this.cdr.markForCheck();


            });
    }

    private _watchFoDarkThemeChanges(): void {
        this.layoutService.configUpdate$
            .pipe(
                tap(() => this.theme.set(this.layoutService.config().darkTheme ? 'dark' : 'light'))
            )
            .subscribe();
    }

    public onLocationSelected(item: any) {
        this.searchMarker = {
            id: 'search-marker',
            coordinates: item.coordinates,
            title: item.label || 'Найдено',
            color: '#E63D2E'
        };
    }

    public onLocationCleared() {
        this.searchMarker = null;
    }

    public fitBounds(bounds) {
        this.map.update({ location: { bounds, ...{ easing: 'ease-in-out', duration: 600, } } });
    }

    public withAlpha = (hex: string, a: number) =>
        hex + Math.round(Math.max(0, Math.min(1, a)) * 255).toString(16).padStart(2, '0').toUpperCase();

    public onVisibleChangeSidebar(event: boolean) {
        this.isVisible = event;
    }

    public onChangeSettings(_: any): void {
        this.isVisible = !this.isVisible;
    }

    public onChangeSidebarBottom(event: boolean) {
        this.isVisibleSidebarBottom = event;
    }


    trackById = (_: number, f: any) => f.id;
    trackByMarkerId(index: number, marker: any): string {
        return marker.id;
    }
}
