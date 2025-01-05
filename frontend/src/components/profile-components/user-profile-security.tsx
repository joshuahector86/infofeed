import { mockProfileSettingsData } from "@/mock-api/mock-api-data";
import { Card, CardContent, CardHeader } from "../ui/card";

const UserProfileSecurity = () => {
  return (
    <div className="">
      <Card className="h-full border-none pt-4">
        <CardContent>
          {mockProfileSettingsData.map((item) => (
            <div className="flex flex-col gap-5">
              <p className="text-lg">
                Name:
                <p className="text-muted-foreground">{item.name}</p>
              </p>
              <p className="text-lg">
                User Name:
                <p className="text-muted-foreground">{item.userName}</p>
              </p>
              <p className="text-lg">
                User ID:
                <p className="text-muted-foreground">{item.userId}</p>
              </p>
              <Card className="flex flex-col gap-4  rounded-[.25rem] border-white">
                <CardHeader className="font-semibold text-xl">Posts</CardHeader>
                <CardContent className="flex justify-between">
                  <p>Liked: {item.numberOfPostsLiked}</p>
                  <p>Made: {item.numberOfPostsMade}</p>
                  <p>Shared: {item.numberOfPostsShared}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfileSecurity;
