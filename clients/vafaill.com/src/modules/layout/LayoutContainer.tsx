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
                <NavBar className="sticky z-50 hidden w-fit text-end md:fixed md:flex" />

                {/* <div>
                    <img
                        src="images/banners/0.png"
                        className="fixed left-0 top-0 mb-4 h-screen w-screen object-cover object-bottom opacity-[.05] grayscale-[0]"
                    />
                </div> */}

                <div>
                    <img
                        src="images/banners/0.png"
                        className="absolute left-0 top-0 mb-4 h-64 w-screen object-cover object-bottom opacity-[.1] grayscale-[0]"
                    />
                </div>

                <div className="relative mt-16 px-6">
                    <Outlet />
                    {/* expander */}
                    <div className="w-[1200px]"></div>
                </div>
                {/* <Footer /> */}
                <button className="fixed bottom-5 left-5 rounded-full bg-primary bg-opacity-30 p-3 md:hidden">
                    <GiHamburgerMenu size={"25px"} className="text-primary" />
                </button>
            </main>
        </>
    )
}
