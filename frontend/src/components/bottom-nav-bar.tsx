import {
  heartIcon,
  homeIcon,
  profileIcon,
  settingsIcon,
  subbedIcon,
} from "@/assets/navbar-icons";
import { appUrls } from "@/utils/urls";
import { Link } from "react-router-dom";

const BottomNavBar = () => {
  const bottomBarLinks = [
    {
      name: "Profile",
      href: appUrls.homeHref,
      key: 1,
      icon: profileIcon,
    },
    {
      name: "Subbbed",
      href: appUrls.subbedNavContentHref,
      key: 2,
      icon: subbedIcon,
    },
    {
      name: "Home",
      href: appUrls.homeHref,
      key: 3,
      icon: homeIcon,
    },
    {
      name: "Liked",
      href: appUrls.likedNavCollectionHref,
      key: 4,
      icon: heartIcon,
    },
    {
      name: "Settings",
      href: appUrls.settingsNavHref,
      key: 5,
      icon: settingsIcon,
    },
  ];
  return (
    <div className="fixed bottom-0 bg-navbar h-[80px] w-full flex justify-between max-w-[500px]">
      {bottomBarLinks.map((item) => (
        <Link
          to={item.href}
          className="flex flex-col items-center justify-center gap-1 p-5"
          key={item.key}
        >
          <img src={item.icon} alt="icon-img" className="w-5" />
          <p className="text-xs">{item.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default BottomNavBar;
