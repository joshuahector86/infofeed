import AuthenticationPage from "@/components/page_layouts/authentication-page";
import { Button } from "@/components/ui/button";
import { appUrls } from "@/utils/urls";
import { Link } from "react-router-dom";

const SignUpIntro = () => {
  return (
    <AuthenticationPage>
      <div className="flex flex-col justify-between h-full w-full pt-10">
        <h1 className="text-2xl flex flex-col items-center font-thin">
          Everything you need it <br />
          <p>to be.</p>
        </h1>
        <div className="flex flex-col w-full">
          <Link to={appUrls.signUpEmailHref}>
            <Button variant={"customDefault"} className="w-full">
              Get Started
            </Button>
          </Link>
          <Link
            className="flex justify-center pt-2 underline"
            to={appUrls.loginHref}
          >
            Got an account? Login
          </Link>
        </div>
      </div>
    </AuthenticationPage>
  );
};

export default SignUpIntro;
