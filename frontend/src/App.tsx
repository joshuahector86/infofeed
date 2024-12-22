import { Route, Routes } from "react-router-dom";
import { appUrls } from "./utils/urls";
import { SignUpEmail, SignUpIntro, SignUpPassword } from "./_auth/forms";
import { Home, WelcomeScreen } from "./_auth/pages";

function App() {
  return (
    <Routes>
      {/* WELCOME SCREENS ROUTES */}
      <Route path={appUrls.welcomeScreen} element={<WelcomeScreen />} />

      {/* SIGN UP ROUTES */}
      <Route path={appUrls.signUpHref} element={<SignUpIntro />} />
      <Route path={appUrls.signUpEmailHref} element={<SignUpEmail />} />
      <Route path={appUrls.signUpPasswordHref} element={<SignUpPassword />} />

      {/* HOME ROUTES */}
      <Route path={appUrls.home} element={<Home />} />
    </Routes>
  );
}

export default App;
