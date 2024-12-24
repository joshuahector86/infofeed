import { ReactNode } from "react";
import BottomNavBar from "../bottom-nav-bar";

interface AppPageProps {
  children: ReactNode;
}

const AppPage: React.FC<AppPageProps> = ({ children }) => {
  return (
    <div className="h-[93vh]  flex flex-col items-center">
      <div className="flex flex-col justify-between items-center w-full h-full p-10">
        {children}
      </div>
      <BottomNavBar />
    </div>
  );
};

export default AppPage;
