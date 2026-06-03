export interface BeamInfo {
    code: string;
    loc: string;
    pol: string;
}

export const Y601_BEAMS: Record<number, BeamInfo> = {
    1: { code: '001B', loc: '000M', pol: 'RHCP (B)' },
    2: { code: '002B', loc: '000M', pol: 'RHCP (B)' },
    3: { code: '003B', loc: '000M', pol: 'RHCP (B)' },
    4: { code: '004B', loc: '000M', pol: 'LHCP (A)' },
    5: { code: '005B', loc: '000M', pol: 'LHCP (A)' },
    6: { code: '006B', loc: '000M', pol: 'LHCP (A)' },
    7: { code: '007B', loc: '000M', pol: 'RHCP (B)' },
    8: { code: '008B', loc: '000M', pol: 'RHCP (B)' },
    9: { code: '009B', loc: '000M', pol: 'RHCP (B)' },
    10: { code: '010B', loc: '000M', pol: 'RHCP (B)' },
    11: { code: '011B', loc: '000M', pol: 'LHCP (A)' },
    12: { code: '012B', loc: '000M', pol: 'LHCP (A)' },
    13: { code: '013B', loc: '000M', pol: 'LHCP (A)' },
    14: { code: '014B', loc: '000M', pol: 'LHCP (A)' },
    15: { code: '015B', loc: '000M', pol: 'LHCP (A)' },
    16: { code: '016B', loc: '000M', pol: 'LHCP (A)' },
    17: { code: '017B', loc: '000M', pol: 'LHCP (A)' },
    18: { code: '018B', loc: '000M', pol: 'RHCP (B)' },
    19: { code: '019B', loc: '000M', pol: 'RHCP (B)' },
    20: { code: '020B', loc: '000M', pol: 'RHCP (B)' },
    21: { code: '021B', loc: '000M', pol: 'RHCP (B)' },
    22: { code: '022B', loc: '000M', pol: 'RHCP (B)' },
    23: { code: '023B', loc: '000M', pol: 'RHCP (B)' },
    24: { code: '024B', loc: '000M', pol: 'RHCP (B)' },
    25: { code: '025B', loc: '000M', pol: 'RHCP (B)' },
    26: { code: '026B', loc: '000M', pol: 'RHCP (B)' },
    27: { code: '027B', loc: '000M', pol: 'RHCP (B)' },
    28: { code: '028B', loc: '000M', pol: 'RHCP (B)' },
    29: { code: '029B', loc: '000M', pol: 'RHCP (B)' },
    30: { code: '030B', loc: '000M', pol: 'RHCP (B)' },
    31: { code: '031B', loc: '000M', pol: 'RHCP (B)' },
    32: { code: '032B', loc: '000M', pol: 'LHCP (A)' }
};

export const AMU1_BEAMS: Record<number, BeamInfo> = {
    1: { code: '091A', loc: '000M', pol: 'RHCP (B)' },
    2: { code: '092A', loc: '000M', pol: 'LHCP (A)' },
    3: { code: '093A', loc: '000M', pol: 'RHCP (B)' },
    4: { code: '094A', loc: '000M', pol: 'LHCP (A)' },
    5: { code: '095A', loc: '000M', pol: 'RHCP (B)' },
    6: { code: '096A', loc: '000M', pol: 'LHCP (A)' },
    7: { code: '097A', loc: '000M', pol: 'RHCP (B)' },
    8: { code: '098A', loc: '000M', pol: 'LHCP (A)' },
    9: { code: '099A', loc: '000M', pol: 'RHCP (B)' },
    10: { code: '010A', loc: '000M', pol: 'LHCP (A)' },
    11: { code: '011A', loc: '000M', pol: 'RHCP (B)' },
    12: { code: '012A', loc: '000M', pol: 'LHCP (A)' },
    13: { code: '013A', loc: '000M', pol: 'RHCP (B)' },
    14: { code: '014A', loc: '000M', pol: 'LHCP (A)' },
    15: { code: '015A', loc: '000M', pol: 'RHCP (B)' },
    16: { code: '016A', loc: '000M', pol: 'LHCP (A)' },
    17: { code: '017A', loc: '000M', pol: 'RHCP (B)' },
    18: { code: '018A', loc: '000M', pol: 'LHCP (A)' }
};

export const AM5_BEAMS: Record<number, BeamInfo> = {
    1: { code: '—', loc: '—', pol: 'L' },
    2: { code: '—', loc: '—', pol: 'R' },
    3: { code: '—', loc: '—', pol: 'L' },
    4: { code: '—', loc: '—', pol: 'R' },
    5: { code: '—', loc: '—', pol: 'R' },
    6: { code: '—', loc: '—', pol: 'L' },
    7: { code: '—', loc: '—', pol: 'R' },
    8: { code: '—', loc: '—', pol: 'L' },
    9: { code: '—', loc: '—', pol: 'L' },
    10: { code: '—', loc: '—', pol: 'R' }
};

export const BEAM_TABLES: Record<
    string,
    Record<number, BeamInfo>
> = {
    'yamal-601': Y601_BEAMS,
    'amu-1': AMU1_BEAMS,
    'am5': AM5_BEAMS
};