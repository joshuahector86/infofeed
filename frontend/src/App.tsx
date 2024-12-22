import { Route, Routes } from "react-router-dom";
import { appUrls } from "./utils/urls";
import { SignUpEmail, SignUpIntro } from "./_auth/forms";

function App() {
  return (
    <Routes>
      {/* SIGN UP ROUTES */}
      <Route path={appUrls.signUpHref} element={<SignUpIntro />} />
      <Route path={appUrls.signUpEmailHref} element={<SignUpEmail />} />
    </Routes>
  );
}

export default App;
