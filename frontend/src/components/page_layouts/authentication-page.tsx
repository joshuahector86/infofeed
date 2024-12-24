import { ReactNode } from "react";
import AppTitle from "../apptitle";

interface AuthenticationPageProps {
  children: ReactNode;
}

const AuthenticationPage: React.FC<AuthenticationPageProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-col p-10 items-center ">
      <AppTitle />
      <div className="flex flex-col justify-between  items-center w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default AuthenticationPage;
