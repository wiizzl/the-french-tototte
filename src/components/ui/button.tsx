export function Button({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className="my-1 bg-fg-2 px-6 py-2 font-medium text-bg-2 transition duration-500 hover:bg-black" {...props}>
            {props.children}
        </button>
    );
}

export function ButtonRef({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className="relative text-sm font-medium text-fg-2 transition-all ease-in-out before:absolute before:-bottom-2 before:left-1/2 before:h-px before:w-0 before:origin-center before:bg-fg-2 before:transition-[width] before:duration-500 before:ease-in-out after:absolute after:-bottom-2 after:right-1/2 after:h-px after:w-0 after:origin-center after:bg-fg-2 after:transition-[width] after:duration-500 after:ease-in-out hover:before:w-1/2 hover:after:w-1/2"
            {...props}
        >
            {props.children}
        </button>
    );
}

export function ButtonOutline({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className="flex gap-2 border border-fg-2 px-4 py-1 text-fg-2" {...props}>
            {props.children}
        </button>
    );
}
