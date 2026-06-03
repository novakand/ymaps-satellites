import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, shareReplay } from "rxjs";
import { SatelliteIndexItem } from "../interfaces/satellite-item.interface";

@Injectable({
    providedIn: 'root'
})
export class SatellitesService {

    constructor(
        private readonly http: HttpClient
    ) { }


    private readonly coverageCache =
        new Map<
            string,
            Observable<GeoJSON.FeatureCollection>
        >();

    private readonly BASE =
        'assets/data/satellites';

    private readonly INDEX_URL =
        `${this.BASE}/index.json`;

    private readonly satellites$ =
        this.http
            .get<SatelliteIndexItem[]>(
                this.INDEX_URL
            )
            .pipe(
                shareReplay({
                    bufferSize: 1,
                    refCount: false
                })
            );

    findAll(): Observable<SatelliteIndexItem[]> {
        return this.satellites$;
    }


    public getBeamCoverage(
        layer: SatelliteIndexItem
    ): Observable<GeoJSON.FeatureCollection> {

        return this.getCoverage(
            layer.file
        );

    }

    public getCoverage(
        file: string
    ): Observable<GeoJSON.FeatureCollection> {

        const cached =
            this.coverageCache.get(file);

        if (cached) {
            return cached;
        }

        const request =
            this.http
                .get<GeoJSON.FeatureCollection>(
                    `${this.BASE}/${file}`
                )
                .pipe(
                    shareReplay({
                        bufferSize: 1,
                        refCount: false
                    })
                );

        this.coverageCache.set(
            file,
            request
        );

        return request;

    }

    getById(
        id: string
    ): Observable<SatelliteIndexItem | undefined> {

        return this.satellites$.pipe(
            map(list =>
                list.find(
                    s => s.id === id
                )
            )
        );
    }



}