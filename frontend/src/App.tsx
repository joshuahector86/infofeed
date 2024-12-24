import { Route, Routes } from "react-router-dom";
import { appUrls } from "./utils/urls";
import { SignUpEmail, SignUpIntro, SignUpPassword } from "./_auth/forms";
import { WelcomeScreen } from "./_auth/pages";
import { Home, ExploreFeed } from "./_root/pages";

function App() {
  return (
    <Routes>
      {/* WELCOME SCREENS ROUTES */}
      <Route path={appUrls.welcomeScreen} element={<WelcomeScreen />} />

      {/* SIGN UP ROUTES */}
      <Route path={appUrls.signUpHref} element={<SignUpIntro />} />
      <Route path={appUrls.signUpEmailHref} element={<SignUpEmail />} />
      <Route path={appUrls.signUpPasswordHref} element={<SignUpPassword />} />

      {/* LOGIN ROUTES  */}
      <Route path={appUrls.loginHref} element={<Home />} />

      {/* HOME ROUTES */}
      <Route path={appUrls.homeHref} element={<Home />} />

      {/* HOME NAVBAR ROUTES */}
      <Route path={appUrls.likedNavCollectionHref} element={<Home />} />
      <Route path={appUrls.subbedNavContentHref} element={<Home />} />
      <Route path={appUrls.settingsNavHref} element={<Home />} />

      {/* EXPLORE ROUTES */}
      <Route path={appUrls.exploreHref} element={<ExploreFeed />} />
    </Routes>
  );
}

export default App;
