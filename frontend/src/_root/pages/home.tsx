import AppTitle from "@/components/apptitle";
import AppPage from "@/components/page_layouts/app-page";
import { Button } from "@/components/ui/button";
import { appUrls } from "@/utils/urls";
import { AlignJustify, PlusIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [hasSubscribedToContent, setHasSubscribedToContent] = useState(true);

  const ToggleSubButton = () => {
    return (
      <Button
        variant={"outline"}
        onClick={() => setHasSubscribedToContent(!hasSubscribedToContent)}
      >
        Toggle Subscription UI
      </Button>
    );
  };

  return (
    <div>
      {hasSubscribedToContent ? (
        <AppPage>
          hi
          <ToggleSubButton />
        </AppPage>
      ) : (
        <AppPage>
          <div className="flex items-center">
            <AlignJustify />
            <AppTitle />
            <PlusIcon />
          </div>

          <div className="h-[50%] flex flex-col gap-1">
            <h2>Subscribe to some content to get started!</h2>
            <Link to={appUrls.exploreHref}>
              <Button variant={"customDefault"} className="w-full">
                To the content!
              </Button>
            </Link>
            <ToggleSubButton />
          </div>
        </AppPage>
      )}
    </div>
  );
};

export default Home;
