import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  width: "100%",
  position: "relative",
  overflow: "hidden",
  background: "linear-gradient(135deg, #7d89d4 0%, #c1c3ce 50%, #babb7c 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const BackgroundGraphics = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
  pointerEvents: "none",

  "&::before": {
    content: '""',
    position: "absolute",
    top: "-40%",
    right: "-10%",
    width: "800px",
    height: "800px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
    filter: "blur(40px)",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-30%",
    left: "-5%",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
    filter: "blur(40px)",
  },

  // Auction-style grid pattern
  backgroundImage: `
    linear-gradient(0deg, transparent 24%, rgba(168, 85, 247, 0.05) 25%, rgba(168, 85, 247, 0.05) 26%, transparent 27%, transparent 74%, rgba(168, 85, 247, 0.05) 75%, rgba(168, 85, 247, 0.05) 76%, transparent 77%, transparent),
    linear-gradient(90deg, transparent 24%, rgba(168, 85, 247, 0.05) 25%, rgba(168, 85, 247, 0.05) 26%, transparent 27%, transparent 74%, rgba(168, 85, 247, 0.05) 75%, rgba(168, 85, 247, 0.05) 76%, transparent 77%, transparent)
  `,
  backgroundSize: "50px 50px",
  backgroundPosition: "0 0",
  opacity: 0.3,
}));

export const ContentWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  width: "100%",
  maxWidth: "550px",
  height: "100vh",
  padding: theme.spacing(5),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  backdropFilter: "blur(10px)",
  background: "rgba(15, 23, 42, 0.4)",
  borderRadius: "20px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
  border: "1px solid rgba(168, 85, 247, 0.2)",

  [theme.breakpoints.down(768)]: {
    maxWidth: "100%",
    borderRadius: "0px",
    height: "100%",
    padding: theme.spacing(3),
  },

  [theme.breakpoints.down(600)]: {
    padding: theme.spacing(2),
  },
}));