import { BiPlusMedical } from "react-icons/bi"

// Icons
import { CgWebsite } from "react-icons/cg"
import { CiMobile1 } from "react-icons/ci"
import { LuServerCog } from "react-icons/lu"
import { HiOutlineSupport } from "react-icons/hi"
import { MdOutlineDashboardCustomize } from "react-icons/md"

// Components
import { CustomButton } from "../Common"
import { CustomSeperator } from "../Common/CustomSeperator"
import { PiTriangleDashed } from "react-icons/pi"

interface HomeContainerProps {
    className?: string
}

export const HomeContainer: React.FC<HomeContainerProps> = ({ className }) => {
    return (
        <div className={`py-10`}>
            <div className="md:block">
                <img
                    src="/images/banners/0.png"
                    alt="banner"
                    className="col-span-full hidden h-[6.2rem] w-full object-cover object-center opacity-60 grayscale-[.75] md:block"
                />
            </div>
            <div
                className={`custom-border grid grid-cols-4 gap-y-16 px-4 pb-12 md:pt-8 ${className}`}
            >
                {renderHomeContainer()}
                <CustomSeperator />
                {renderProjectsContainer()}
                <CustomSeperator />
                {renderContactContainer()}
                {/* {renderLegalContainer()} */}
            </div>
        </div>
    )
}

const renderHomeContainer = () => {
    return (
        <>
            <PiTriangleDashed
                className="col-span-full mx-auto text-primary md:hidden"
                size={"40px"}
            />
            <h1 className="col-span-full mx-auto -mt-4 text-center font-bold text-white md:col-span-1 md:mx-0 md:mt-0 md:hidden md:text-start">
                vafaill
                <br />
                <span className="font-normal text-white text-opacity-80">
                    {"</>"} labs
                </span>
            </h1>
            <h1 className="col-span-full text-nowrap text-center md:col-span-3 md:mr-auto md:text-start">
                <span>
                    software engineering & consulting over years
                    <br />
                    <span className="font-bold italic text-white">
                        grow exponentially
                    </span>{" "}
                    & expand your business
                </span>
            </h1>
            <CustomButton className="col-span col-span-full mx-auto md:col-span-1 md:ml-auto md:mr-0">
                Read All About Us
            </CustomButton>
            <h1 className="col-span-full text-center text-white md:col-span-1 md:text-start">
                <span className=""></span>
            </h1>
            <div className="col-span-full flex justify-around text-end md:col-span-3 md:mt-0 md:justify-end md:gap-8">
                <div className="border-r border-white border-opacity-10 px-4">
                    <span className="font-bold text-primary">2+</span>
                    <br />
                    <span className="text-white">years</span>
                </div>
                <div className="border-r border-white border-opacity-10 px-4">
                    <span className="font-bold text-primary">10+</span>
                    <br />
                    <span className="text-white">partners</span>
                </div>
                <div className="border-r border-white border-opacity-10 px-4">
                    <span className="font-bold text-primary">4+</span>
                    <br />
                    <span className="text-white">countries</span>
                </div>
                <div className="border-r border-white border-opacity-10 px-4">
                    <span className="font-bold text-primary">4M+</span>
                    <br />
                    <span className="text-white">users</span>
                </div>
            </div>
            <div className="col-span-full grid grid-flow-row grid-cols-4 gap-y-4">
                <h1 className="col-span-3 text-white underline underline-offset-4">
                    Offers
                </h1>
                <div className="col-span-full grid grid-flow-row grid-cols-2 gap-4 md:grid-cols-5">
                    <button className="custom-border relative h-36 border backdrop-contrast-[90%]">
                        <CgWebsite className="mx-auto h-[100%]" size={"30px"} />
                        <p className="absolute right-3 top-2 text-white">
                            £600/site &lt;
                        </p>
                        <p className="absolute bottom-2 left-3 text-white">
                            Web App
                        </p>
                    </button>
                    <button className="custom-border relative h-36 border backdrop-contrast-[90%]">
                        <CiMobile1 className="mx-auto h-[100%]" size={"30px"} />
                        <p className="absolute right-3 top-2 text-white">
                            £600/app &lt;
                        </p>
                        <p className="absolute bottom-2 left-3 text-white">
                            Mobile App
                        </p>
                    </button>
                    <button className="custom-border relative h-36 border backdrop-contrast-[90%]">
                        <LuServerCog
                            className="mx-auto h-[100%]"
                            size={"30px"}
                        />
                        <p className="absolute right-3 top-2 text-white">
                            £100 &lt;
                        </p>
                        <p className="absolute bottom-2 left-3 text-white">
                            Web Service
                        </p>
                    </button>
                    <button className="custom-border relative h-36 border backdrop-contrast-[90%]">
                        <HiOutlineSupport
                            className="mx-auto h-[100%]"
                            size={"30px"}
                        />
                        <p className="absolute right-3 top-2 text-white">
                            £40/month &lt;
                        </p>
                        <p className="absolute bottom-2 left-3 text-start text-white">
                            Maintenance
                        </p>
                    </button>
                    <button className="custom-border relative h-36 border backdrop-contrast-[90%]">
                        <MdOutlineDashboardCustomize
                            className="mx-auto h-[100%]"
                            size={"30px"}
                        />
                        <p className="absolute right-3 top-2 text-white">
                            £60/month &lt;
                        </p>
                        <p className="absolute bottom-2 left-3 text-start text-white">
                            Custom Software
                        </p>
                    </button>
                </div>
            </div>

            <h1 className="col-span-3 text-white underline underline-offset-4">
                Showcase
            </h1>
            <button className="flex flex-row items-center justify-end gap-2 text-start text-white">
                expand
                <BiPlusMedical className="mt-[1px] text-primary" />
            </button>
            <div className="col-span-full -mt-2 grid grid-flow-row grid-cols-2 gap-4 md:grid-cols-5">
                <button className="custom-border relative h-36 border backdrop-contrast-[90%]">
                    <img
                        src="https://picsum.photos/500"
                        alt="makroteknik"
                        className="absolute top-0 h-full w-full opacity-30 grayscale-[.0]"
                    />
                    <p className="absolute right-3 top-2">Web App</p>
                    <p className="absolute bottom-2 left-3 text-white">
                        Makroteknik
                    </p>
                </button>
                <button className="custom-border relative h-36 border backdrop-contrast-[90%]">
                    <img
                        src="https://picsum.photos/501"
                        alt="makroteknik"
                        className="absolute top-0 h-full w-full opacity-30 grayscale-[.0]"
                    />
                    <p className="absolute right-3 top-2">Mobile App</p>
                    <p className="absolute bottom-2 left-3 text-start text-white">
                        Pomodoro Shell
                    </p>
                </button>
                <button className="custom-border relative h-36 border backdrop-contrast-[90%]">
                    <img
                        src="https://picsum.photos/502"
                        alt="makroteknik"
                        className="absolute top-0 h-full w-full opacity-30 grayscale-[.0]"
                    />
                    <p className="absolute right-3 top-2 text-end">
                        Custom Software
                    </p>
                    <p className="absolute bottom-2 left-3 text-white">Wayou</p>
                </button>
            </div>
            <div className="col-span-full grid grid-flow-row grid-cols-4 gap-y-4">
                <h1 className="col-span-3 text-white underline underline-offset-4">
                    Post by categories (3)
                </h1>
                <button className="flex flex-row items-center justify-end gap-2 text-end text-white">
                    expand
                    <BiPlusMedical className="mt-[1px] text-primary" />
                </button>
                <div className="col-span-full grid grid-flow-row grid-cols-2 gap-4 grayscale-[1] md:grid-cols-5">
                    <button className="custom-border relative h-36 border bg-white bg-opacity-5">
                        <img
                            src="/images/go.png"
                            alt="golang"
                            className="mx-auto h-[40%]"
                        />
                        <p className="absolute right-3 top-2">0</p>
                        <p className="absolute bottom-2 left-3 text-white">
                            Golang
                        </p>
                    </button>
                    <button className="custom-border relative h-36 border bg-white bg-opacity-5">
                        <img
                            src="/images/ts.png"
                            alt="golang"
                            className="mx-auto h-[20%]"
                        />
                        <p className="absolute right-3 top-2">0</p>
                        <p className="absolute bottom-2 left-3 text-white">
                            TypeScript
                        </p>
                    </button>{" "}
                    <button className="custom-border relative h-36 border bg-white bg-opacity-5">
                        <img
                            src="/images/react.png"
                            alt="golang"
                            className="mx-auto h-[20%]"
                        />
                        <p className="absolute right-3 top-2">0</p>
                        <p className="absolute bottom-2 left-3 text-white">
                            React
                        </p>
                    </button>
                </div>
            </div>
            <div className="col-span-full grid grid-flow-row grid-cols-4 gap-y-4">
                <h1 className="col-span-3 mb-2 text-white underline underline-offset-4">
                    Team
                </h1>
                <button className="flex flex-row items-center justify-end gap-2 text-end text-white">
                    expand
                    <BiPlusMedical className="mt-[1px] text-primary" />
                </button>

                <div className="col-span-full -mt-2 grid grid-flow-row grid-cols-2 gap-4 md:grid-cols-5">
                    <button className="custom-border relative h-36 overflow-hidden border backdrop-contrast-[90%]">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D03AQHlX67ha11sRQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718352040888?e=1732147200&v=beta&t=bC3ea3aTF8tNx0cNMW2VZtPGy9XddaM3UkW0X3SBgPw"
                            alt="berkay aslan"
                            className="object-cover opacity-50"
                        />
                        <p className="absolute bottom-2 left-3 text-white">
                            Berkay Aslan
                        </p>
                    </button>
                    <button className="custom-border relative h-36 overflow-hidden border backdrop-contrast-[90%]">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D03AQHfJWqJ5rmqVg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709104673222?e=1733356800&v=beta&t=qa4ilDo2JNx8wRJvFScMQl9Ta74SFtLRnSEiCXaPOBo"
                            alt="selin cirak"
                            className="object-cover opacity-50"
                        />
                        <p className="absolute bottom-2 left-3 text-white">
                            Selin Cirak
                        </p>
                    </button>
                </div>
            </div>
        </>
    )
}

const renderProjectsContainer = () => {
    return (
        <>
            <div className="col-span-full grid grid-flow-row grid-cols-4 gap-y-2">
                <h1 className="col-span-full text-white underline underline-offset-4">
                    Projects
                </h1>
            </div>
        </>
    )
}

const renderContactContainer = () => {
    return <div></div>
}
