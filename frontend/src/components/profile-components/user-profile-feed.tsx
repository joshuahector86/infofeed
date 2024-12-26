import { Card } from "../ui/card";
import nezuko from "../../mock-api/images/nezukoMockApi.jpg";

const UserProfileFeed = () => {
  return (
    <div className="grid grid-cols-3">
      <Card className=" p-1 border-none rounded-none ">
        <img src={nezuko} alt="user-image-feed" />
      </Card>
    </div>
  );
};

export default UserProfileFeed;
