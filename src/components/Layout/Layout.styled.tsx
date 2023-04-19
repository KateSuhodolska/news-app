import { styled } from "@mui/system";
import {
  AppBar as MUIAppBar,
  Container as MUIContainer,
  Typography as MUITypography,
  Box as MUIBox,
  Link as MUILink,
  MenuItem as MUIMenuItem,
  FormControl as MUIFormControl,
} from "@mui/material";
import { Person as MUIPersonIcon } from "@mui/icons-material";

export const Header = styled(MUIAppBar)({
  position: "static",
});

export const HeaderTitle = styled(MUIContainer)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "60px",
  height: "115px",
  backgroundColor: theme.palette.primary.main,
  cursor: "pointer",
}));

export const HeaderMenu = styled(MUIContainer)(({ theme }) => ({
  height: "60px",
  backgroundColor: theme.palette.support.main,
  display: "flex",
  alignItems: "center",
  padding: "10px 15px 10px 30px !important",
}));

export const Menu = styled(MUIBox)({ width: "50%" });

export const Navigation = styled(MUIBox)({
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
});

export const FormControl = styled(MUIFormControl)({
  display: "flex",
  alignItems: "center",
});

export const Language = styled(MUIMenuItem)();

export const PersonIcon = styled(MUIPersonIcon)(({ theme }) => ({
  margin: "15px !important",
}));

export const Footer = styled(MUIContainer)(({ theme }) => ({
  backgroundColor: theme.palette.support.main,
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const FooterContent = styled(MUIBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "80%",
  margin: "auto",
  padding: "10px",
  borderBottom: "1px solid",
  borderColor: theme.palette.secondary.dark,
}));

export const FooterTitle = styled(MUIContainer)(({ theme }) => ({
  fontSize: "25px",
  color: theme.palette.primary.contrastText,
  display: "flex",
  justifyContent: "center",
}));

export const FooterNav = styled(MUIBox)({
  width: "30%",
  marginTop: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
});

export const Link = styled(MUILink)(({ theme }) => ({
  color: theme.palette.support.light,
  fontSize: "14px",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  marginRight: "10px",
}));

export const FooterDescription = styled(MUITypography)(({ theme }) => ({
  fontSize: "13px",
  letterSpacing: "0",
  marginTop: "5px",
  fontWeight: "700",
  color: theme.palette.support.light,
}));
