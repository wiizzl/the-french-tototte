export function Flag({ hover = false, transition }: { hover?: boolean; transition?: string }) {
    const france = ["bg-blue-800", "bg-white", "bg-red-600"];

    return (
        <div className="flex">
            {france.map((item, index) => (
                <span className={`${item} px-1 h-2 ${hover && transition}`} key={index} />
            ))}
        </div>
    );
}
