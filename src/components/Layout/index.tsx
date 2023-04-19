import React, { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { CustomLink, TitleLink } from "./CustomLink";
import { socialLinks } from "../../constants/constants";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import * as Styled from "./Layout.styled";

const Layout: FC = () => {
  const [language, setLanguage] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="page">
      <Styled.Header>
        <TitleLink to="/news">
          <Styled.HeaderTitle maxWidth="xl">UA/INSIGHT.</Styled.HeaderTitle>
        </TitleLink>
        <Styled.HeaderMenu maxWidth="xl">
          <Styled.Menu>
            <CustomLink to="/news">News</CustomLink>
            <CustomLink to="/categories">Categories</CustomLink>
          </Styled.Menu>

          <Styled.Navigation>
            <Styled.FormControl>
              <Select
                value={language}
                onChange={handleChange}
                autoWidth
                displayEmpty
                sx={{
                  border: "none",
                  borderRight: "1px solid #999999",
                  color: "#999999",
                  "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                    {
                      padding: "10px 15px 10px 0 !important",
                      fontSize: "17px",
                    },
                  "& .MuiSelect-icon": {
                    display: "none",
                  },
                }}
              >
                <Styled.Language value="">UA</Styled.Language>
                <Styled.Language value="EN">EN</Styled.Language>
              </Select>
            </Styled.FormControl>
            <CustomLink to="/authorization">
              <Styled.PersonIcon />
            </CustomLink>
          </Styled.Navigation>
        </Styled.HeaderMenu>
      </Styled.Header>
      <main>
        <Outlet />
      </main>
      <Styled.Footer maxWidth="xl">
        <Styled.FooterContent>
          <Styled.FooterTitle>UKRAINIAN INSIGHT</Styled.FooterTitle>
          <Styled.FooterNav>
            {/* TODO: Fix img position */}
            {socialLinks.map((link, index) => (
              <Styled.Link href="#" key={index}>
                {link.icon}
                {link.text}
              </Styled.Link>
            ))}
          </Styled.FooterNav>
        </Styled.FooterContent>
        <Styled.FooterDescription>
          @ 2023 - AlterEGO Test
        </Styled.FooterDescription>
      </Styled.Footer>
    </div>
  );
};

export default Layout;
