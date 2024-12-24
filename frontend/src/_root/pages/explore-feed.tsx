import InteractionButtons from "@/components/interaction-button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { mockDataCards } from "@/mock-api/mock-api-data";
import { Ellipsis } from "lucide-react";

const ExploreFeed = () => {
  const data = mockDataCards;
  return (
    <>
      {data.map((card) => (
        <Card key={card.date} className="w-screen mb-4 border-none">
          <CardHeader className="flex-row justify-between items-center">
            <div>
              <h1>{card.title}</h1>
              <h4>{card.date}</h4>
            </div>
            <Ellipsis />
          </CardHeader>
          <CardContent>
            <img src={card.cardImage} className="1-4" alt="card-image" />
          </CardContent>
          <CardFooter className="flex-col items-start gap-2">
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-1 items-center">
                <img
                  src={card.userImage}
                  alt="user-img"
                  className="w-6 h-5 rounded-full"
                />
                <p>@{card.useId}</p>
              </div>
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
