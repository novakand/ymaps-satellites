import { SatMeta } from "../interfaces/sat-meta.interface";

export const SAT_META: Record<string, SatMeta> = {
  'yamal-601': {
    key: 'yamal-601',
    title: 'Ямал-601 (Ka)',
    orbDeg: 49.0,
    showSkew: false,
    configFile: 'default_2bf30f42.bin',
    configUrl: 'default_2bf30f42.bin',
    configUploadedAt: '—'
  },

  'amu-1': {
    key: 'amu-1',
    title: 'Экспресс-AMU1 (Ka)',
    orbDeg: 36.0,
    showSkew: false,
    configFile: null,
    configUrl: null,
    configUploadedAt: '—'
  },

  'am5': {
    key: 'am5',
    title: 'Экспресс-AM5 (Ka)',
    orbDeg: 140.0,
    showSkew: true
  },

  'amu-7': {
    key: 'amu-7',
    title: 'Экспресс-AMU7 (Ku)',
    orbDeg: 145.0,
    showSkew: false
  },

  'express-103': {
    key: 'express-103',
    title: 'Экспресс-103 (Ku)',
    orbDeg: 96.5,
    showSkew: true
  },

  'y401': {
    key: 'y401',
    title: 'Ямал-401 (Ku)',
    orbDeg: 90.0,
    showSkew: true
  },

  'y402': {
    key: 'y402',
    title: 'Ямал-402 (Ku)',
    orbDeg: 55.0,
    showSkew: true
  },

  'y300k': {
    key: 'y300k',
    title: 'Ямал-300K (Ku)',
    orbDeg: -177.0,
    showSkew: true
  }
};