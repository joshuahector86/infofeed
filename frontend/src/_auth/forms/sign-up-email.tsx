import AuthenticationPage from "@/components/page_layouts/authentication-page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { appUrls } from "@/utils/urls";
import { Link } from "react-router-dom";

const SignUpEmail = () => {
  return (
    <AuthenticationPage>
      <h1>What's your email address?</h1>
      <div className="w-full">
        <Input type="text" className="mb-10" placeholder="You@you.com" />
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
