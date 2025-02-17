import AppPage from "@/components/page_layouts/app-page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Settings = () => {
  const userSettings = {
    accountPrivacySettings: {
      settingUrl: "/settings/account-privacy",
      accountPrivacySettingsTitle: "Account privacy",
      accountPrivacy: ["Account", "Close friends", "Blocked"],
    },

    forProfessionalsSettings: {
      settingUrl: "/settings/for-professionals",
      forProfessionalsTitle: "For professionals",
      forProfessionals: [
        "Insights",
        "Verification",
        "Creator tools and controls",
      ],
    },

    forFanInteractionSettings: {
      settingUrl: "/settings/fan-interaction",
      forFanInteractionTitle: "Fan interaction",
      fanInteraction: [
        "Messages and story replies",
        "Comments",
        "Hidden words",
      ],
    },

    forMiscellaneous: {
      settingUrl: "/settings/miscellaneous",
      forMiscellaneousTitle: "Omnimode",
      forMiscellaneous: ["Miscellaneous", "Ominuous dealings", "The truth"],
    },
  };
  return (
    <AppPage>
      <div className="flex flex-col mb-10">
        <div>
          <Input placeholder="Search" />
          <Separator className="bg-white" />
        </div>
        <SettingsBlock
          settingsTitle={
            userSettings.accountPrivacySettings.accountPrivacySettingsTitle
          }
          settingsList={userSettings.accountPrivacySettings.accountPrivacy}
          settingUrl={userSettings.accountPrivacySettings.settingUrl}
        />
        <SettingsBlock
          settingsTitle={
            userSettings.forFanInteractionSettings.forFanInteractionTitle
          }
          settingsList={userSettings.forFanInteractionSettings.fanInteraction}
          settingUrl={userSettings.forFanInteractionSettings.settingUrl}
        />
        <SettingsBlock
          settingsTitle={
            userSettings.forProfessionalsSettings.forProfessionalsTitle
          }
          settingsList={userSettings.forProfessionalsSettings.forProfessionals}
          settingUrl={userSettings.forProfessionalsSettings.settingUrl}
        />
        <SettingsBlock
          settingsTitle={userSettings.forMiscellaneous.forMiscellaneousTitle}
          settingsList={userSettings.forMiscellaneous.forMiscellaneous}
          settingUrl={userSettings.forMiscellaneous.settingUrl}
        />
      </div>
    </AppPage>
  );
};

interface SettingsBlockProps {
  settingsTitle: string;
  settingsList: string[];
  settingUrl?: string;
}

const SettingsBlock = ({
  settingsTitle,
  settingsList,
  settingUrl,
}: SettingsBlockProps) => {
  return (
    <div>
      <Card className="border-none">
        <CardHeader className="text-muted-foreground">
          {settingsTitle}
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col space-y-2">
            {settingsList.map((setting) => (
              <Link to={settingUrl || "/"}>
                <Button variant={"outline"} className="w-full">
                  {setting}
                </Button>
              </Link>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Separator className="bg-white" />
    </div>
  );
};
export default Settings;
