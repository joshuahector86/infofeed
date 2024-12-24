const AppTitle = () => {
  const titleArray = ["C", "A", "C", "O", "P", "H", "O", "N", "Y"];

  return (
    <div className="flex gap-3 text-xl">
      {titleArray.map((letter) => (
        <p key={letter}>{letter}</p>
      ))}
    </div>
  );
};

export default AppTitle;
