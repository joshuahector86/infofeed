import { HeartIcon, MessageSquareIcon, Send } from "lucide-react";

const InteractionButtons = () => {
  return (
    <div className="flex gap-1 items-center">
      <HeartIcon size={20} />
      <MessageSquareIcon size={20} />
      <Send size={20} />
    </div>
  );
};

export default InteractionButtons;
