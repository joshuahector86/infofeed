import InteractionButtons from "@/components/interaction-button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import UserAvatar from "@/components/user-avatar";
import { mockDataCards } from "@/mock-api/mock-api-data";

const ExploreFeed = () => {
  const data = mockDataCards;
  return (
    <>
      {data.map((card) => (
        <Card key={card.date} className="w-screen border-none max-w-[500px]">
          <CardHeader>
            <h1>{card.title}</h1>
            <h4>{card.date}</h4>
          </CardHeader>
          <CardContent>
            <img src={card.cardImage} alt="card-image" />
          </CardContent>
          <CardFooter className="flex-col items-start gap-2">
            <div className="flex justify-between items-center w-full">
              <UserAvatar
                src={card.userImage}
                userName={card.userName}
                height={20}
                width={20}
              />
              <InteractionButtons />
            </div>
            <p>{card.category}</p>
            <div>{card.caption}</div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default ExploreFeed;
