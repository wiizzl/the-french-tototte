export function Flag({
  hover = false,
  transition,
}: {
  hover?: boolean;
  transition?: string;
}) {
  const france = ["bg-blue-800", "bg-white", "bg-red-600"];

  return (
    <div className="flex">
      {france.map((item, index) => (
        <span
          className={`${item} h-2 px-1 ${hover && transition}`}
          key={index}
        />
      ))}
    </div>
  );
}
