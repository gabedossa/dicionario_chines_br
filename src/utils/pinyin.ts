const T1 = 'āēīōūǖ';
const T2 = 'áéíóúǘ';
const T3 = 'ǎěǐǒǔǚ';
const T4 = 'àèìòùǜ';

export function toneOf(p: string): number {
  for (const ch of p) {
    if (T1.includes(ch)) return 1;
    if (T2.includes(ch)) return 2;
    if (T3.includes(ch)) return 3;
    if (T4.includes(ch)) return 4;
  }
  return 0;
}

export function pyColored(p: string): string {
  return p
    .split(/(\s+)/)
    .map((seg) => {
      if (/^\s+$/.test(seg)) return seg;
      return `<span class="t${toneOf(seg)}">${seg}</span>`;
    })
    .join('');
}

export function strip(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
}
