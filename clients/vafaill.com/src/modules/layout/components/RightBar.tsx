import { FaAppStore } from "react-icons/fa"
import { FaGooglePlay } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

interface RightBarProps {
    className?: string
}

export const RightBar: React.FC<RightBarProps> = ({ className }) => {
    return (
        <nav
            className={`flex h-screen flex-col gap-4 text-nowrap bg-black bg-opacity-[1%] py-10 text-[.6rem] text-white backdrop-blur-md ${className}`}
        >
            <button className="custom-border flex items-center gap-3 rounded-xl border bg-white bg-opacity-5 px-3 py-2">
                <FaGooglePlay size={"20px"} />
                Google Play
            </button>
            <button className="custom-border flex items-center gap-3 rounded-xl border bg-white bg-opacity-5 px-3 py-2">
                <FaAppStore size={"22px"} />
                App Store
            </button>
            <button className="custom-border flex items-center gap-3 rounded-xl border bg-white bg-opacity-5 px-3 py-2">
                <FaGithub size={"22px"} />
                Github
            </button>
            <button className="custom-border flex items-center gap-3 rounded-xl border bg-white bg-opacity-5 px-3 py-2">
                <FaLinkedin size={"21px"} />
                Linkedin
            </button>
        </nav>
    )
}
