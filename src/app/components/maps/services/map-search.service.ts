import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { SelectedLocation } from '../interfaces/location.interface';

@Injectable({
    providedIn: 'root'
})
export class MapSearchService {


    public dragLocation$ =
        new BehaviorSubject<
            [number, number] | null
        >(null);

    public selectedLocation$ =
        new BehaviorSubject<SelectedLocation | null>(
            null
        );

    private readonly API_KEY = '86b21bb6-3702-4519-bd25-93f8cfa92b78';

    constructor(private http: HttpClient) { }

    suggest(
        text: string,
        bounds?: [[number, number], [number, number]],
        types: string = 'geo,biz',
        limit: number = 10
    ): Observable<any[]> {

        const params: any = {
            apikey: '23b76e0e-63d3-48f0-a3b5-e607d7c078e9',
            text,
            types,
            results: limit
        };

        if (bounds) {
            const [sw, ne] = bounds;
            params.bbox = `${sw[0]},${sw[1]}~${ne[0]},${ne[1]}`;
        }

        return this.http
            .get<any>('https://suggest-maps.yandex.ru/v1/suggest', { params })
            .pipe(
                map(res =>
                    (res.results || []).map((item: any) => {

                        const title = item.title?.text || '';
                        const subtitle = item.subtitle?.text || '';

                        return {
                            label: subtitle
                                ? `${title}, ${subtitle}`
                                : title,
                            rawLabel: title,
                            subtitle,
                            uri: item.uri
                        };
                    })
                )
            );
    }

    geocode(query: string): Observable<[number, number] | null> {

        if (!query?.trim()) {
            return of(null);
        }

        const params = {
            apikey: this.API_KEY,
            format: 'json',
            geocode: query,
            results: 1
        };

        return this.http
            .get<any>(
                'https://geocode-maps.yandex.ru/1.x/',
                { params }
            )
            .pipe(

                map(res => {

                    const feature =
                        res?.response?.GeoObjectCollection
                            ?.featureMember?.[0]?.GeoObject;

                    if (!feature?.Point?.pos) {
                        return null;
                    }

                    const [lon, lat] =
                        feature.Point.pos
                            .split(' ')
                            .map(Number);

                    const label =
                        feature.metaDataProperty
                            ?.GeocoderMetaData
                            ?.text ?? query;

                    this.selectedLocation$.next({
                        coordinates: [lon, lat],
                        label
                    });

                    return [lon, lat] as [number, number];

                }),

                catchError(() => of(null))
            );
    }

    reverseGeocode(
        coordinates: [number, number]
    ): Observable<[number, number] | null> {

        const params = {
            apikey: this.API_KEY,
            format: 'json',
            geocode: coordinates.join(','),
            results: 1
        };

        return this.http
            .get<any>(
                'https://geocode-maps.yandex.ru/1.x/',
                { params }
            )
            .pipe(

                tap(res => {

                    const feature =
                        res?.response?.GeoObjectCollection
                            ?.featureMember?.[0]?.GeoObject;

                    const label =
                        feature?.metaDataProperty
                            ?.GeocoderMetaData
                            ?.text ?? '';

                    this.selectedLocation$.next({
                        coordinates,
                        label
                    });

                }),

                map(() => coordinates),

                catchError(() => of(null))
            );
    }

}