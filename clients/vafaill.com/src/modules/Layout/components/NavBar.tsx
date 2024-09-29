// Icons
import { PiAppStoreLogo } from "react-icons/pi"
import { PiTriangleDashedLight } from "react-icons/pi"
import { PiTriangleDashed } from "react-icons/pi"
import { WiMoonAltWaningGibbous5 } from "react-icons/wi"
import { TbHexagonalPyramid } from "react-icons/tb"

// Components
import { CustomSeperator } from "../../Common/CustomSeperator"

interface NavBarProps {
    className?: string
}

export const NavBar: React.FC<NavBarProps> = ({ className }) => {
    return (
        <nav
            className={`flex h-screen flex-col gap-6 bg-black bg-opacity-[1%] px-6 py-10 backdrop-blur-md xl:pr-2 ${className}`}
        >
            <div className="ml-auto flex w-fit flex-col items-end gap-0">
                <PiTriangleDashed className="text-primary" size={"40px"} />
                <p className="mt-2 text-xs font-bold text-white">Vafaill</p>
                <p className="mt-[1px] text-xs text-white text-opacity-60">
                    {"</>"} solutions
                </p>
            </div>
            <CustomSeperator className="mb-1 mt-0 w-[7.1rem]" />
            <div
                onClick={() => {}}
                className="ml-auto flex w-fit items-center gap-3 hover:cursor-pointer"
            >
                <div className="flex flex-col">
                    <p className="mt-1 text-xs text-white">home</p>
                    <p className="text-xs">about us</p>
                </div>
            </div>
            <div
                onClick={() => {}}
                className="ml-auto flex w-fit items-center gap-3 hover:cursor-pointer"
            >
                <div className="flex flex-col">
                    <p className="mt-1 text-xs text-white">projects</p>
                    <p className="text-xs">benchmarks</p>
                </div>
            </div>
            <div
                onClick={() => {}}
                className="ml-auto flex w-fit items-center gap-3 hover:cursor-pointer"
            >
                <div className="flex flex-col">
                    <p className="mt-1 text-xs text-white">contact</p>
                    <p className="text-xs">form</p>
                </div>
            </div>
            <div
                onClick={() => {}}
                className="ml-auto flex w-fit items-center gap-3 hover:cursor-pointer"
            >
                <div className="flex flex-col">
                    <p className="mt-1 text-xs text-white">legal</p>
                    <p className="text-xs">policies</p>
                </div>
            </div>
        </nav>
    )
}
