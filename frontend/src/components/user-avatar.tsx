interface AvatarItemsProps {
  src: string;
  height?: number | string;
  width?: number | string;
  maxWidth?: number | string;
  userId?: string;
  gap?: number;
  fontSize?: string;
  userName?: string;
}

const UserAvatar: React.FC<AvatarItemsProps> = ({
  src,
  userId,
  height,
  width,
  maxWidth,
  gap,
  fontSize,
  userName,
}) => {
  return (
    <div style={{ gap: gap }} className="flex gap-1 items-center">
      <img
        src={src}
        style={{
          height: height,
          width: width,
          maxWidth: maxWidth,
        }}
        alt="user-img"
        className="rounded-full"
      />
      <div>
        <p className={` text-${fontSize}`}>{userName}</p>
        {userId ? <p>UID: {userId}</p> : <p></p>}
      </div>
    </div>
  );
};

export default UserAvatar;
