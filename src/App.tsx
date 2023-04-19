import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import palette from "./ui-theme/palette";
import Layout from "./components/Layout";
import Categories from "./components/Categories";
import News from "./components/News/News";
import Profile from "./components/Profile";
import AuthorizationForm from "./components/AuthorizationForm/Form";

function App() {
  const theme = createTheme({ palette });
  //TODO: Add overrides

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<News />} />
          <Route path="categories" element={<Categories />} />
          <Route path="news" element={<News />} />
          <Route path="authorization" element={<AuthorizationForm />} />
          <Route path="profile" element={<Profile />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
