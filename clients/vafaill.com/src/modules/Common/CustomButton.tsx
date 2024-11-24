import { ReactNode } from "react"

interface CustomButtonProps {
    className?: string
    children?: ReactNode
}

export const CustomButton: React.FC<CustomButtonProps> = ({
    className,
    children,
}) => {
    return (
        <button
            className={`h-fit w-fit text-nowrap px-4 py-2 text-white ${className}`}
        >
            {children}
        </button>
    )
}
