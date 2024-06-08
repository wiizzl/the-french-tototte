export function Button({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={"my-1 hover:bg-black bg-fg-2 font-medium text-bg-2 py-2 px-6 transition duration-500"} {...props}>
            {props.children}
        </button>
    );
}
