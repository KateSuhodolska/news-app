import { styled } from "@mui/system";
import {
  Card as MUICard,
  CardMedia as MUICardMedia,
  Box as MUIBox,
  Button as MUIButton,
  Container as MUIContainer,
  Typography as MUITypography,
  Typography,
} from "@mui/material";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export const News = styled(MUIContainer)({
  marginTop: "20px",
});

export const LatestNews = styled(MUIBox)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "40px",
  position: "relative",
}));

export const LatestNewsTitle = styled(Typography)(({ theme }) => ({
  fontSize: "17px",
  fontWeight: "700",
  lineHeight: "40px",
  color: theme.palette.primary.contrastText,
  marginLeft: "10px",
}));

export const Arrow = styled(PlayArrowIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  transform: "rotate(90deg)",
  position: "absolute",
  top: "30px",
  left: "10px",
}));

export const ArticleCard = styled(MUICard)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: "none",
  padding: "20px 0",
  display: "flex",
  borderRadius: "0",
  borderBottom: "1px solid #cccccc",
}));

export const ArticleImage = styled(MUICardMedia)({
  height: "290px",
  width: "400px",
  filter: "grayscale(100%) brightness(0.5) contrast(1)",
  backgroundPositionY: "30%",
  flexShrink: "0",
});

export const ArticleContent = styled(MUIBox)({
  display: "flex",
  flexDirection: "column",
  marginLeft: "40px",
  flexShrink: "1",
});

export const Title = styled(MUITypography)({
  fontSize: "24px",
  color: "#000",
  fontWeight: "800",
});

export const Additional = styled(MUIBox)({
  display: "flex",
  alignItems: "center",
  fontSize: "18px",
  fontStyle: "italic",
  height: "25px",
  marginTop: "5px",
});

export const Author = styled(MUITypography)({
  fontSize: "18px",
  fontStyle: "italic",
  width: "35%",
  borderRight: "1px solid #888888",
  lineHeight: "25px",
});

export const Date = styled(Typography)({
  fontSize: "16px",
  marginLeft: "10px",
  lineHeight: "25px",
});

export const Description = styled(MUITypography)({
  fontSize: "18px",
  marginTop: "30px",
});

export const ReadArticleButton = styled(MUIButton)({
  backgroundColor: "#8d6e63",
  fontSize: "14px",
  fontWeight: "700",
  color: "#fff",
  marginTop: "20px",
  width: "180px",
  "&:hover": {
    backgroundColor: "#000",
  },
});
