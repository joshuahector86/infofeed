import { ReactNode } from "react";
import BottomNavBar from "../bottom-nav-bar";

interface AppPageProps {
  children: ReactNode;
}

const AppPage: React.FC<AppPageProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="overflow-y-auto mb-10 p-10 max-w-[500px]">{children}</div>

      <BottomNavBar />
    </div>
  );
};

export default AppPage;
