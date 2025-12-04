import { Box, styled, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "sticky",
  backgroundColor: theme.palette.background.paper,
  boxShadow:
    "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
  padding: theme.spacing(1, 2),
  top: 0,
  zIndex: 2,
  height: theme.spacing(8),
}));

export const LeftContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  flex: 1,
}));

export const RightContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "30px",
  color: theme.palette.grey[700],
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "30px",
  color: theme.palette.grey[700],
}));
