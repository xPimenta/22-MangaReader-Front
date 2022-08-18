import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignForm from "./pages/auth/sign.page";
import { UserProvider } from "./contexts/user.context";
import { MenuProvider } from "./contexts/menu.context";

import { ThemeProvider } from "styled-components";
import ResetCss from "./styles/reset.css.js";
import { theme } from "./styles/theme";
import HomePage from "./pages/home/index";
import Upload from "./pages/upload";
import Reader from "./pages/reader";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <MenuProvider>
          <BrowserRouter>
            <ResetCss />
            <Routes>
              <Route path="/sign-in" element={<SignForm isSignUp={false} />} />
              <Route path="/sign-up" element={<SignForm isSignUp={true} />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/reader/:mangaId" element={<Reader />} />
              {/* <Route path="/hashtag/:hashtag" element={<Hashtag />} /> */}
            </Routes>
          </BrowserRouter>
        </MenuProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
