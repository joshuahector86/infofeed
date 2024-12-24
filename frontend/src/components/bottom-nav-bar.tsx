import { appUrls } from "@/utils/urls";

const BottomNavBar = () => {
  const bottomBarLinks = [
    {
      name: "Home",
      href: appUrls.homeHref,
      key: 1,
    },
    {
      name: "Subbbed",
      href: appUrls.subbedNavContentHref,
      key: 2,
    },
    {
      name: "Home",
      href: appUrls.homeHref,
      key: 3,
    },
    {
      name: "Liked",
      href: appUrls.likedNavCollectionHref,
      key: 4,
    },
    {
      name: "Settings",
      href: appUrls.settingsNavHref,
      key: 5,
    },
  ];
  return (
    <div className="bg-navbar h-[100px] w-full flex justify-between p-8 max-w-[500px]">
      {bottomBarLinks.map((item) => (
        <div key={item.key}>{item.name}</div>
      ))}
    </div>
  );
};

export default BottomNavBar;
