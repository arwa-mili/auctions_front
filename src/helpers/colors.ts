// colorValidators.ts
export type ColorFormat = "hex" | "hex8" | "rgb" | "hsl" | "hsv";

const HEX = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
const HEX8 = /^#([0-9a-fA-F]{4}|[0-9a-fA-F]{8})$/;

function inRange(n: number, min: number, max: number) {
  return Number.isFinite(n) && n >= min && n <= max;
}

function parseFunc(
  str: string,
  name: "rgb" | "rgba" | "hsl" | "hsla" | "hsv" | "hsva"
) {
  const rx = new RegExp(
    `^${name}\\(\\s*([^,]+)\\s*,\\s*([^,]+)\\s*,\\s*([^,\\)]+)(?:\\s*,\\s*([^,\\)]+))?\\s*\\)$`,
    "i"
  );
  const m = str.match(rx);
  if (!m) return null;
  return m.slice(1, 5).filter((v) => v !== undefined) as string[];
}

function parseNumber(x: string) {
  const n = Number(x.trim());
  return Number.isFinite(n) ? n : NaN;
}

function parsePercent(x: string) {
  const m = x.trim().match(/^(-?\d+(?:\.\d+)?)%$/);
  if (!m) return NaN;
  return Number(m[1]);
}

function parseAlpha(x?: string) {
  if (x == null) return 1;
  const n = Number(x.trim());
  return Number.isFinite(n) && n >= 0 && n <= 1 ? n : NaN;
}

// ---- Validators per format ----

export function isValidHex(v: string) {
  return HEX.test(v.trim());
}

export function isValidHex8(v: string) {
  return HEX8.test(v.trim());
}

export function isValidRgb(v: string) {
  const rgba = parseFunc(v, "rgba") ?? parseFunc(v, "rgb");
  if (!rgba) return false;
  const [rS, gS, bS, aS] = rgba;
  const r = parseNumber(rS),
    g = parseNumber(gS),
    b = parseNumber(bS);
  const a = parseAlpha(aS);
  return (
    inRange(r, 0, 255) &&
    inRange(g, 0, 255) &&
    inRange(b, 0, 255) &&
    !Number.isNaN(a)
  );
}

export function isValidHsl(v: string) {
  const hsla = parseFunc(v, "hsla") ?? parseFunc(v, "hsl");
  if (!hsla) return false;
  const [hS, sS, lS, aS] = hsla;

  const h = parseNumber(hS);
  const s = parsePercent(sS);
  const l = parsePercent(lS);
  const a = parseAlpha(aS);

  return (
    inRange(h, 0, 360) &&
    inRange(s, 0, 100) &&
    inRange(l, 0, 100) &&
    !Number.isNaN(a)
  );
}

export function isValidHsv(v: string) {
  const hsva = parseFunc(v, "hsva") ?? parseFunc(v, "hsv");
  if (!hsva) return false;
  const [hS, sS, vS, aS] = hsva;

  const h = parseNumber(hS);
  const s = parsePercent(sS);
  const va = parsePercent(vS);
  const a = parseAlpha(aS);

  return (
    inRange(h, 0, 360) &&
    inRange(s, 0, 100) &&
    inRange(va, 0, 100) &&
    !Number.isNaN(a)
  );
}

export function isColor(
  value: string,
  format: ColorFormat | "any" = "any"
): boolean {
  const v = value?.trim() ?? "";
  if (!v) return false;

  const checks: Record<ColorFormat, (x: string) => boolean> = {
    hex: isValidHex,
    hex8: isValidHex8,
    rgb: isValidRgb,
    hsl: isValidHsl,
    hsv: isValidHsv,
  };

  if (format === "any") {
    return Object.values(checks).some((fn) => fn(v));
  }
  return checks[format](v);
}
