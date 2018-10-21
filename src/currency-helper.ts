
export function parseToRaw(value, symbol) {
  let raw: string = value.replace(/,/g, '');
  raw = raw.replace(symbol, '');
  return raw;
}
