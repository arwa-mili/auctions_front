import { Box, styled } from "@mui/material";

type Segment = { value: number; color: string };
type SegmentedCircleProps = {
  size?: number;
  segments: Segment[]; // e.g. [{ value: 40, color: "#1976d2" }, ...]
  rotateDeg?: number; // start angle
  ring?: number; // inner hole % (0 = filled circle, 60 = donut)
  gapDeg?: number; // gap angle between segments
};

const Circle = styled(Box)<{ bg: string; size: number; ring: number }>(
  ({ bg, size, ring }) => ({
    width: size,
    height: size,
    borderRadius: "50%",
    background: bg,
    // donut hole
    mask:
      ring > 0
        ? `radial-gradient(transparent ${ring}%, #000 ${ring}%)`
        : "none",
    WebkitMask:
      ring > 0
        ? `radial-gradient(transparent ${ring}%, #000 ${ring}%)`
        : "none",
  })
);

function toConicGradient({
  segments,
  rotateDeg = 0,
  gapDeg = 0,
}: {
  segments: Segment[];
  rotateDeg?: number;
  gapDeg?: number;
}) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  let start = rotateDeg;
  const stops: string[] = [];

  segments.forEach((seg, i) => {
    const sweep = (seg.value / total) * 360 - (gapDeg > 0 ? gapDeg : 0);
    const end = start + Math.max(sweep, 0);

    // color arc
    stops.push(`${seg.color} ${start}deg ${end}deg`);

    // optional transparent gap after each segment (except last)
    if (gapDeg > 0 && i < segments.length - 1) {
      stops.push(`transparent ${end}deg ${end + gapDeg}deg`);
    }
    start = end + (gapDeg > 0 ? gapDeg : 0);
  });

  return `conic-gradient(${stops.join(", ")})`;
}

const SegmentedCircle = ({
  size = 120,
  segments,
  rotateDeg = -90, // start at top
  ring = 60, // donut look (inner radius %)
  gapDeg = 2, // small gap between segments
}: SegmentedCircleProps) => {
  const bg = toConicGradient({ segments, rotateDeg, gapDeg });
  return <Circle bg={bg} size={size} ring={ring} />;
};

export { SegmentedCircle };
