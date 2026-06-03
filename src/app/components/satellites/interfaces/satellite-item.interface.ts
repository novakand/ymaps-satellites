export interface SatelliteIndexItem {
    id: string;

    name: string;

    file: string;

    count: number;

    sat: string;

    beam: string | null;

    bbox: [number, number, number, number];
}