import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    startIcon?: ReactNode;
    endIcon?: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, className, startIcon, endIcon, }, ref) => {
        return (
            <button ref={ref} className={`inline-flex text-nowrap items-center justify-center gap-2 px-4 py-2 rounded-lg ${className}`}>
                {startIcon && <span>{startIcon}</span>}
                <span>{children}</span>
                {endIcon && <span>{endIcon}</span>}
            </button>
        );
    }
);

export { Button };