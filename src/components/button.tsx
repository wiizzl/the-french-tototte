export function Button({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={"bg-fg-2 font-medium text-bg-1 py-2 px-6 transition duration-500"} {...props}>
            {props.children}
        </button>
    );
}
