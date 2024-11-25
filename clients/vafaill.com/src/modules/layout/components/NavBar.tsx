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
            className={`w-screen bg-black py-2 shadow-2xl shadow-black xl:pr-2 ${className}`}
        >
            <div className="mx-auto flex w-screen max-w-[1250px] flex-row gap-10 px-12">
                <div className="flex w-fit items-center gap-0">
                    <PiTriangleDashed className="text-primary" size={"40px"} />
                    <p className="ml-2 font-bold text-white">vafaill&nbsp;</p>
                    <p className="mt-[1px] text-white text-opacity-60">
                        {"</>"} labs
                    </p>
                </div>
                <div
                    onClick={() => {}}
                    className="ml-auto flex w-fit items-center justify-end gap-3 hover:cursor-pointer"
                >
                    <div className="flex flex-row justify-end gap-3">
                        <FaHome className="" size={"20px"} />
                        Home
                    </div>
                </div>
                <div
                    onClick={() => {}}
                    className="flex w-fit items-center gap-3 hover:cursor-pointer"
                >
                    <div className="flex flex-row justify-end gap-3">
                        <MdMenuBook className="" size={"20px"} />
                        Blog
                    </div>
                </div>
                <div
                    onClick={() => {}}
                    className="flex w-fit items-center gap-3 hover:cursor-pointer"
                >
                    <div className="flex flex-row justify-end gap-3">
                        <RiTeamFill className="" size={"20px"} />
                        Team
                    </div>
                </div>
                <div
                    onClick={() => {}}
                    className="flex w-fit items-center gap-3 hover:cursor-pointer"
                >
                    <div className="flex flex-row justify-end gap-3">
                        <FaFileCode className="" size={"18px"} />
                        Repos
                    </div>
                </div>
            </div>
        </nav>
    )
}
