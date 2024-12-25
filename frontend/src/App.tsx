import { Route, Routes } from "react-router-dom";
import { appUrls } from "./utils/urls";
import { SignUpEmail, SignUpIntro, SignUpPassword } from "./_auth/forms";
import { WelcomeScreen } from "./_auth/pages";
import { Home, Liked, Settings, Subbed, UserProfilePage } from "./_root/pages";

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

      {/* USER PROFILE ROUTES */}
      <Route path={appUrls.userProfileHref} element={<UserProfilePage />} />

      {/* LIKED ROUTES */}
      <Route path={appUrls.likedHref} element={<Liked />} />

      {/* SUBBED ROUTES */}
      <Route path={appUrls.subbedHref} element={<Subbed />} />

      {/* SETTINGS ROUTES */}
      <Route path={appUrls.settingsHref} element={<Settings />} />
    </Routes>
  );
}

export default App;
