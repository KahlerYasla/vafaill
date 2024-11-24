interface CustomSeperatorProps {
    className?: string
    isNormal?: boolean
}

export const CustomSeperator: React.FC<CustomSeperatorProps> = ({
    className,
    isNormal = true,
}) => {
    return isNormal ? (
        <div
            className={`col-span-full my-2 h-[1px] border-b opacity-10 ${className}`}
        />
    ) : (
        <div className="col-span-full my-4 h-[1px] bg-black bg-opacity-40" />
    )
}
