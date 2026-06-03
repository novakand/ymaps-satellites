import { SatMeta } from "./sat-meta.interface";
import { SatelliteIndexItem } from "./satellite-item.interface";

export interface SatelliteBeamInfo {

    beam: number;

    zone: string;

    code: string;

    levelLabel: any

    locationCode: string;

    polarization: string;

}

export interface SatelliteViewModel {

    key: string;

    meta: SatMeta;


    layers: SatelliteIndexItem[];

    azimuthTrue?: number;

    available?: boolean;

    azimuthMagnetic?: number;

    elevation?: number;

    skew?: number;

    magneticDeclination?: number;

    activeBeams?: SatelliteBeamInfo[];

}