const AppTitle = () => {
  const titleMap = [
    { value: "C", key: 1 },
    { value: "A", key: 2 },
    { value: "C", key: 3 },
    { value: "O", key: 4 },
    { value: "P", key: 5 },
    { value: "H", key: 6 },
    { value: "O", key: 7 },
    { value: "N", key: 8 },
    { value: "Y", key: 9 },
  ];

  return (
    <div className="flex gap-3 text-xl">
      {titleMap.map((letter) => (
        <p key={letter.key}>{letter.value}</p>
      ))}
    </div>
  );
};

export default AppTitle;
