import AuthenticationPage from "@/components/page_layouts/authentication-page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { appUrls } from "@/utils/urls";
import { Link } from "react-router-dom";

const SignUpEmail = () => {
  return (
    <AuthenticationPage>
      <h1>What's your email address?</h1>
      <Input type="text" placeholder="You@you.com" />
      <div className="w-full">
        <Link to={appUrls.signUpPasswordHref}>
          <Button className="w-full" variant={"customDefault"}>
            Continue
          </Button>
        </Link>
      </div>
    </AuthenticationPage>
  );
};

export default SignUpEmail;
