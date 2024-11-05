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
                <p className="mt-2 font-bold text-white">vafaill</p>
                <p className="mt-[1px] text-white text-opacity-60">
                    {"</>"} labs
                </p>
            </div>
            <CustomSeperator className="mb-1 ml-auto mt-0 w-[7.1rem]" />
            <div
                onClick={() => {}}
                className="ml-auto flex w-fit items-center gap-3 hover:cursor-pointer"
            >
                <div className="flex flex-col">
                    <p className="mt-1 text-white">home</p>
                    <p className="">about us</p>
                </div>
            </div>
            <div
                onClick={() => {}}
                className="ml-auto flex w-fit items-center gap-3 hover:cursor-pointer"
            >
                <div className="flex flex-col">
                    <p className="mt-1 text-white">projects</p>
                    <p className="">benchmarks</p>
                </div>
            </div>
            <div
                onClick={() => {}}
                className="ml-auto flex w-fit items-center gap-3 hover:cursor-pointer"
            >
                <div className="flex flex-col">
                    <p className="mt-1 text-white">contact</p>
                    <p className="">form</p>
                </div>
            </div>
            <div
                onClick={() => {}}
                className="ml-auto flex w-fit items-center gap-3 hover:cursor-pointer"
            >
                <div className="flex flex-col">
                    <p className="mt-1 text-white">legal</p>
                    <p className="">policies</p>
                </div>
            </div>
        </nav>
    )
}
