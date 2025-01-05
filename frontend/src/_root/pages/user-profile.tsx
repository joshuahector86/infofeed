import AppPage from "@/components/page_layouts/app-page";
import UserAvatar from "@/components/user-avatar";
import profilePhoto from "../../mock-api/images/profile_photo.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import UserProfileFeed from "@/components/profile-components/user-profile-feed";
import UserProfileSecurity from "@/components/profile-components/user-profile-security";

const UserProfilePage = () => {
  return (
    <AppPage>
      <div className="flex flex-col gap-10 w-full">
        <UserAvatar
          src={profilePhoto}
          userName="AnimeBoi727"
          userId="879456216"
          fontSize="2xl"
          gap={20}
          width={"50%"}
          maxWidth={130}
          height={"8rem"}
        />
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="bg-transparent">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>
          <Separator className="bg-white " />
          <TabsContent value="profile">
            <UserProfileFeed />
          </TabsContent>
          <TabsContent value="security">
            <UserProfileSecurity />
          </TabsContent>
        </Tabs>
      </div>
    </AppPage>
  );
};

export default UserProfilePage;
