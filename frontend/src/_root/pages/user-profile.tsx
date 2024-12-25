import AppPage from "@/components/page_layouts/app-page";
import UserAvatar from "@/components/user-avatar";
import profilePhoto from "../../mock-api/images/profile_photo.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const UserProfilePage = () => {
  return (
    <AppPage>
      <div className="flex flex-col gap-10">
        <UserAvatar
          src={profilePhoto}
          userName="AnimeBoi727"
          userId="879456216"
          fontSize="2xl"
          gap={20}
          height={115}
          width={40}
        />
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="bg-transparent">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="security">Secuirty</TabsTrigger>
          </TabsList>
          <Separator className="bg-white" />
          <TabsContent value="profile">
            Make changes to your profile here.
          </TabsContent>
          <TabsContent value="security">Change your security here.</TabsContent>
        </Tabs>
      </div>
    </AppPage>
  );
};

export default UserProfilePage;
