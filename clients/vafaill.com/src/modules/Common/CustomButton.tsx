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
            className={`h-fit w-fit text-nowrap border-b-4 border-white border-opacity-100 px-3 py-1 pt-[5.5px] font-bold text-white ${className}`}
        >
            {children}
        </button>
    )
}
