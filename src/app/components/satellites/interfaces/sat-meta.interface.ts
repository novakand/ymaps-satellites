export interface SatMeta {
  key: string;
  title: string;
  orbDeg: number;
  band?:string;
  showSkew: boolean;
  satelliteLng?: number;
  configFile?: string | null;
  configUrl?: string | null;
  configUploadedAt?: string;
}