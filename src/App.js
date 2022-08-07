import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignForm from "./pages/auth/sign.page";
import { UserProvider } from "./contexts/user.context";
import { MenuProvider } from "./contexts/menu.context";

import { ThemeProvider } from "styled-components";
import ResetCss from "./styles/reset.css.js";
import { theme } from "./styles/theme";
import HomePage from "./pages/home/index";
import Hashtag from "./pages/hashtag/index";
import UserProfile from "./pages/userProfile/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <MenuProvider>
          <BrowserRouter>
            <ResetCss />
            <Routes>
              <Route path="/" element={<SignForm isSignUp={false} />} />
              <Route path="/sign-up" element={<SignForm isSignUp={true} />} />
              <Route path="/timeline" element={<HomePage />} />
              <Route path="/hashtag/:hashtag" element={<Hashtag />} />
              <Route path="/user/:id" element={<UserProfile />} />
            </Routes>
          </BrowserRouter>
        </MenuProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
