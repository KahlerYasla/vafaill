import { Outlet } from "react-router-dom"
import { NavBar } from "./components/NavBar"

// Icons
import { GiHamburgerMenu } from "react-icons/gi"

interface LayoutContainerProps {
    className?: string
}

export const LayoutContainer: React.FC<LayoutContainerProps> = ({
    className,
}) => {
    return (
        <>
            <main
                className={`mx-auto flex min-h-screen w-screen max-w-[1250px] justify-center ${className}`}
            >
                <NavBar className="fixed left-0 top-0 z-50 hidden w-fit text-end md:sticky md:flex" />
                <div className="relative px-6">
                    <Outlet />
                </div>
                {/* <Footer /> */}
                <button className="fixed bottom-5 left-5 rounded-full bg-primary bg-opacity-30 p-3 md:hidden">
                    <GiHamburgerMenu size={"25px"} className="text-primary" />
                </button>
            </main>
        </>
    )
}
