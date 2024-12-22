import AuthenticationPage from "@/components/page_layouts/authentication-page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { appUrls } from "@/utils/urls";
import { Link } from "react-router-dom";

const SignUpPassword = () => {
  return (
    <AuthenticationPage>
      <h1>And your password?</h1>
      <div className="w-full flex flex-col gap-4">
        <Input type="password" placeholder="You@you.com" />
        <Input type="password" placeholder="retype password" />
      </div>
      <div className="w-full">
        <Link to={appUrls.home}>
          <Button className="w-full" variant={"customDefault"}>
            Continue
          </Button>
        </Link>
      </div>
    </AuthenticationPage>
  );
};

export default SignUpPassword;
