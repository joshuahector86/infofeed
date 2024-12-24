import AppTitle from "@/components/apptitle";
import AppPage from "@/components/page_layouts/app-page";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ExploreFeed from "./explore-feed";

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
          <ExploreFeed />
          <ToggleSubButton />
        </AppPage>
      ) : (
        <AppPage>
          <div className="h-[30vh] flex flex-col justify-between">
            <div className="flex justify-center">
              <AppTitle />
            </div>

            <div className="flex flex-col gap-1">
              <h2>Subscribe to some content to get started!</h2>
              <Button
                variant={"customDefault"}
                onClick={() =>
                  setHasSubscribedToContent(!hasSubscribedToContent)
                }
                className="w-full"
              >
                To the content!
              </Button>
            </div>
          </div>
        </AppPage>
      )}
    </div>
  );
};

export default Home;
