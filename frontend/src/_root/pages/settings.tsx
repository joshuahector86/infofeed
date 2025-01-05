import AppPage from "@/components/page_layouts/app-page";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Settings = () => {
  return (
    <AppPage>
      <div className="flex flex-col mb-10">
        <div>
          <Input placeholder="Search" />
          <Separator className="bg-white" />
        </div>

        <div>
          <Card className="border-none">
            <CardHeader className="text-muted-foreground">
              Your account
            </CardHeader>
            <CardContent>
              <ul>
                <p>Setting Item 1</p>
                <p>Settings Item 2</p>
                <p>Setting Item 3</p>
              </ul>
            </CardContent>
          </Card>
          <Separator className="bg-white" />
        </div>
        <div>
          <Card className="border-none">
            <CardHeader className="text-muted-foreground">
              Who can see your content
            </CardHeader>
            <CardContent>
              <ul>
                <p>Setting Item 1</p>
                <p>Settings Item 2</p>
                <p>Setting Item 3</p>
              </ul>
            </CardContent>
          </Card>
          <Separator className="bg-white" />
        </div>
        <div>
          <Card className="border-none">
            <CardHeader className="text-muted-foreground">
              What you see
            </CardHeader>
            <CardContent>
              <ul>
                <p>Setting Item 1</p>
                <p>Settings Item 2</p>
                <p>Setting Item 3</p>
              </ul>
            </CardContent>
          </Card>
          <Separator className="bg-white" />
        </div>
        <div>
          <Card className="border-none">
            <CardHeader className="text-muted-foreground">
              Acount Setting Heading 4
            </CardHeader>
            <CardContent>
              <ul>
                <p>Setting Item 1</p>
                <p>Settings Item 2</p>
                <p>Setting Item 3</p>
              </ul>
            </CardContent>
          </Card>
          <Separator className="bg-white" />
        </div>
      </div>
    </AppPage>
  );
};

export default Settings;
