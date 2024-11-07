// Icons
import { PiTriangleDashed } from "react-icons/pi"

// Components
import { FaHome } from "react-icons/fa"
import { MdMenuBook } from "react-icons/md"
import { RiTeamFill } from "react-icons/ri"
import { FaFileCode } from "react-icons/fa"
import { CustomSeperator } from "../../common/CustomSeperator"

interface NavBarProps {
    className?: string
}

export const NavBar: React.FC<NavBarProps> = ({ className }) => {
    return (
        <nav
            className={`flex h-screen flex-col gap-10 bg-black bg-opacity-[1%] px-6 py-10 backdrop-blur-md xl:pr-2 ${className}`}
        >
            <div className="ml-auto flex w-fit flex-col items-end gap-0">
                <PiTriangleDashed className="text-primary" size={"40px"} />
                <p className="mt-2 font-bold text-white">vafaill</p>
                <p className="mt-[1px] text-white text-opacity-60">
                    {"</>"} labs
                </p>
            </div>
            <div
                onClick={() => {}}
                className="ml-auto flex w-fit items-center justify-end gap-3 hover:cursor-pointer"
            >
                <div className="flex flex-row justify-end gap-2">
                    Home
                    <FaHome className="" size={"25px"} />
                </div>
            </div>
            <div
                onClick={() => {}}
                className="ml-auto flex w-fit items-center gap-3 hover:cursor-pointer"
            >
                <div className="flex flex-row justify-end gap-2">
                    Blog
                    <MdMenuBook className="" size={"23px"} />
                </div>
            </div>
            <div
                onClick={() => {}}
                className="ml-auto flex w-fit items-center gap-3 hover:cursor-pointer"
            >
                <div className="flex flex-row justify-end gap-2">
                    Team
                    <RiTeamFill className="" size={"25px"} />
                </div>
            </div>
            <div
                onClick={() => {}}
                className="ml-auto flex w-fit items-center gap-3 hover:cursor-pointer"
            >
                <div className="flex flex-row justify-end gap-2">
                    Repos
                    <FaFileCode className="" size={"23px"} />
                </div>
            </div>
        </nav>
    )
}
