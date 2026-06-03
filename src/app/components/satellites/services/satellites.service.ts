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

    private readonly BASE =
        'assets/data/satellites';

    private readonly INDEX_URL =
        `${this.BASE}/index.json`;

    private readonly satellites$ =
        this.http
            .get<SatelliteIndexItem[]>(
                this.INDEX_URL
            )
    // .pipe(
    //     shareReplay({
    //         bufferSize: 1,
    //         refCount: true
    //     })
    // );

    findAll(): Observable<SatelliteIndexItem[]> {
        return this.satellites$;
    }


    getBeamCoverage(
    layer: SatelliteIndexItem
): Observable<GeoJSON.FeatureCollection> {

    return this.http.get<GeoJSON.FeatureCollection>(
        `${this.BASE}/${layer.file}`
    );

}

    getCoverage(
        file: string
    ): Observable<GeoJSON.FeatureCollection> {

        return this.http.get<GeoJSON.FeatureCollection>(
            `${this.BASE}/${file}`
        );

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