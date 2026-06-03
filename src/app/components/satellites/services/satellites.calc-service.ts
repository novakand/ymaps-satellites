import { Injectable } from "@angular/core";
import geomagnetism from 'geomagnetism';

@Injectable({
    providedIn: 'root'
})
export class SatelliteCalculationService {

    private readonly RE = 6378.137;
    private readonly RS = 42164.0;

    calculateLookAngles(
        siteLat: number,
        siteLon: number,
        satLon: number
    ) {

        const toRad = (d: number) =>
            d * Math.PI / 180;

        const toDeg = (r: number) =>
            r * 180 / Math.PI;

        const lat =
            toRad(siteLat);

        const lon =
            toRad(siteLon);

        const sat =
            toRad(satLon);

        const site = [

            this.RE *
            Math.cos(lat) *
            Math.cos(lon),

            this.RE *
            Math.cos(lat) *
            Math.sin(lon),

            this.RE *
            Math.sin(lat)

        ];

        const satellite = [

            this.RS *
            Math.cos(sat),

            this.RS *
            Math.sin(sat),

            0

        ];

        const rx =
            satellite[0] - site[0];

        const ry =
            satellite[1] - site[1];

        const rz =
            satellite[2] - site[2];

        const east =
            -Math.sin(lon) * rx +
            Math.cos(lon) * ry;

        const north =
            -Math.sin(lat) *
            Math.cos(lon) * rx

            - Math.sin(lat) *
            Math.sin(lon) * ry

            + Math.cos(lat) * rz;

        const up =
            Math.cos(lat) *
            Math.cos(lon) * rx

            + Math.cos(lat) *
            Math.sin(lon) * ry

            + Math.sin(lat) * rz;

        let azimuthTrue =
            toDeg(
                Math.atan2(
                    east,
                    north
                )
            );

        if (azimuthTrue < 0) {
            azimuthTrue += 360;
        }

        const elevation =
            toDeg(
                Math.atan2(
                    up,
                    Math.sqrt(
                        east * east +
                        north * north
                    )
                )
            );

        const skew =
            toDeg(
                Math.atan(
                    Math.sin(
                        sat - lon
                    ) /
                    Math.tan(lat)
                )
            );


        const magneticPoint =
            geomagnetism
                .model()
                .point([
                    siteLat,
                    siteLon
                ]);

        const declination =
            magneticPoint.decl;

        const azimuthMagnetic =
            (
                azimuthTrue -
                declination +
                360
            ) % 360;


        return {

            azimuthTrue:
                Number(
                    azimuthTrue.toFixed(1)
                ),

            azimuthMagnetic:
                Number(
                    azimuthMagnetic.toFixed(1)
                ),

            magneticDeclination:
                Number(
                    declination.toFixed(1)
                ),

            elevation:
                Number(
                    elevation.toFixed(1)
                ),

            skew:
                Number(
                    skew.toFixed(1)
                )

        };

    }

}