import { styled } from "@mui/system";
import {
  Card as MUICard,
  Box as MUIBox,
  Container as MUIContainer,
  IconButton as MUIIconButton,
  Button as MUIButton,
  Typography as MUITypography,
  Link as MUILink,
} from "@mui/material";

export const Categories = styled(MUIContainer)({
  display: "flex",
  flexWrap: "wrap",
  // margin: "20px 0",
});

export const CategoryCard = styled(MUICard)({
  width: "300px",
  height: "300px",
  // maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  margin: "2px",
  borderRadius: "0",
});

export const CardTitle = styled(MUITypography)(({ theme }) => ({
  marginTop: "30%",
  color: theme.palette.primary.contrastText,
  fontSize: "30px",
  fontWeight: "700",
  zIndex: "1",
}));

export const OpenNewsInCategoryBtn = styled(MUIButton)({
  backgroundColor: "transparent",
  border: "1px solid #fff",
  fontSize: "14px",
  fontWeight: "700",
  textTransform: "uppercase",
  color: "#fff",
  zIndex: "1",
});
