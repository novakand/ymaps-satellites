import { Injectable } from "@angular/core";
import { Feature } from "geojson";
import { BehaviorSubject } from "rxjs";
import { SatelliteViewModel } from "../../satellites/interfaces/satellite-view.interface";
export interface CoverageData {

    features: Feature[];

    multiColor?: boolean;

}
@Injectable({ providedIn: 'root' })
export class MapService {

    public load$ = new BehaviorSubject<any>(null);

    private readonly _beamFeatures$ =
        new BehaviorSubject<Feature[]>([]);

    public readonly beamFeatures$ =
        this._beamFeatures$.asObservable();

    public setBeamFeatures(
        features: Feature[]
    ): void {

        this._beamFeatures$.next(features);

    }

    public clearBeamFeatures(): void {

        this._beamFeatures$.next([]);

    }


    public baseLayer$ =
        new BehaviorSubject<any>(
            'scheme'
        );

    private readonly _selectedSatellite$ =
        new BehaviorSubject<SatelliteViewModel | null>(null);

    public readonly selectedSatellite$ =
        this._selectedSatellite$.asObservable();

    public setSelectedSatellite(
        satellite: SatelliteViewModel | null
    ): void {

        this._selectedSatellite$.next(
            satellite
        );

    }

    private readonly _satelliteGraphics$ =
        new BehaviorSubject<any[]>([]);

    public readonly satelliteGraphics$ =
        this._satelliteGraphics$.asObservable();

    public setSatelliteGraphics(
        features: any[]
    ): void {

        this._satelliteGraphics$.next(
            features
        );

    }

    public clearSatelliteGraphics(): void {

        this._satelliteGraphics$.next([]);

    }


    private readonly _coverageFeatures$ =
    new BehaviorSubject<CoverageData>({
        features: [],
        multiColor: false
    });

public readonly coverageFeatures$ =
    this._coverageFeatures$.asObservable();

public setCoverageFeatures(
    features: Feature[],
    multiColor = false
): void {

    this._coverageFeatures$.next({
        features,
        multiColor
    });

}

public clearCoverageFeatures(): void {

    this._coverageFeatures$.next({
        features: [],
        multiColor: false
    });

}
}
