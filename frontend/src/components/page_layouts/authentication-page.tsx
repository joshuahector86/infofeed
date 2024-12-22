import { ReactNode } from "react";

interface AuthenticationPageProps {
  children: ReactNode;
}

const AuthenticationPage: React.FC<AuthenticationPageProps> = ({
  children,
}) => {
  const titleArray = ["C", "A", "C", "O", "P", "H", "O", "N", "Y"];

  return (
    <div className="h-[90vh] flex flex-col p-10 items-center ">
      <div className="flex gap-3 text-xl p-10">
        {titleArray.map((letter) => (
          <p>{letter}</p>
        ))}
      </div>
      <div className="flex flex-col justify-between  items-center w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default AuthenticationPage;
