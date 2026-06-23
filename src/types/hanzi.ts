export interface HanziEntry {
  r: number;
  c: string;
  p: string;
  d: string;
  h: string;
  s: number;
  pt?: string;
  w?: [string, string, string][];
  sx?: [string, string, string];
  _t?: number;
  _s?: string;
}

export interface AppState {
  q: string;
  hsk: string;
  tone: string;
  ptOnly: boolean;
  toneColor: boolean;
}
