import { HeartIcon, Send } from "lucide-react";

const InteractionButtons = () => {
  return (
    <div className="flex gap-4 items-center">
      <HeartIcon size={20} />
      <Send size={20} />
    </div>
  );
};

export default InteractionButtons;
