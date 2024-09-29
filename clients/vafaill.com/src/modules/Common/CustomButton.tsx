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
            className={`h-fit w-fit text-nowrap border-b-4 border-white bg-white bg-opacity-5 px-3 py-1 pt-[5.5px] text-xs font-bold text-white ${className}`}
        >
            {children}
        </button>
    )
}
