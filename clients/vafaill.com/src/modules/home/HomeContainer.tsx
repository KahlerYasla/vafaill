import { BiPlusMedical } from "react-icons/bi"

// Icons
import { CgWebsite } from "react-icons/cg"
import { CiMobile1 } from "react-icons/ci"
import { LuServerCog } from "react-icons/lu"
import { HiOutlineSupport } from "react-icons/hi"
import { MdOutlineDashboardCustomize } from "react-icons/md"

// Components
import { CustomButton } from "../common"
import { CustomSeperator } from "../common/CustomSeperator"
import { PiTriangleDashed } from "react-icons/pi"

interface HomeContainerProps {
    className?: string
}

export const HomeContainer: React.FC<HomeContainerProps> = ({ className }) => {
    return (
        <div className={`py-10`}>
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
                    <span className="font-bold text-white">
                        grow exponentially.
                    </span>
                    <br />
                    software engineering & consulting over the years
                </span>
            </h1>
            <CustomButton className="col-span col-span-full mx-auto border-b-4 border-primary font-bold text-black md:col-span-1 md:ml-auto md:mr-0">
                about us
            </CustomButton>

            <CustomSeperator />

            <h1 className="col-span-2">
                <span className="text-white">where we reach in?</span>
                <br />
                <span className="font-bold">3+</span>
                &nbsp;
                <span className="">years</span>
            </h1>
            <div className="col-span-full flex justify-around text-center md:col-span-2 md:mt-0 md:justify-end md:gap-16">
                <div className="">
                    <span className="font-bold text-white">10+</span>
                    <br />
                    <span className="">partners</span>
                </div>
                <div className="">
                    <span className="font-bold text-white">4+</span>
                    <br />
                    <span className="">countries</span>
                </div>
                <div className="">
                    <span className="font-bold text-white">4M+</span>
                    <br />
                    <span className="">users</span>
                </div>
            </div>

            <CustomSeperator />

            <div className="col-span-full grid grid-flow-row grid-cols-4 gap-y-4">
                <h1 className="col-span-3 text-white">Offers</h1>
                <div className="col-span-full grid grid-flow-row grid-cols-2 gap-8 md:grid-cols-5">
                    <button className="custom-border relative h-36 border backdrop-contrast-[90%]">
                        <CgWebsite className="mx-auto h-[100%]" size={"25px"} />
                        <p className="absolute right-3 top-2 text-white">
                            £600
                        </p>
                        <p className="absolute bottom-2 left-3 text-white">
                            website
                        </p>
                    </button>
                    <button className="custom-border relative h-36 border backdrop-contrast-[90%]">
                        <CiMobile1 className="mx-auto h-[100%]" size={"25px"} />
                        <p className="absolute right-3 top-2 text-white">
                            £600
                        </p>
                        <p className="absolute bottom-2 left-3 text-white">
                            mobile app
                        </p>
                    </button>
                    <button className="custom-border relative h-36 border backdrop-contrast-[90%]">
                        <LuServerCog
                            className="mx-auto h-[100%]"
                            size={"25px"}
                        />
                        <p className="absolute right-3 top-2 text-white">
                            £100
                        </p>
                        <p className="absolute bottom-2 left-3 text-white">
                            service
                        </p>
                    </button>
                    <button className="custom-border relative h-36 border backdrop-contrast-[90%]">
                        <HiOutlineSupport
                            className="mx-auto h-[100%]"
                            size={"25px"}
                        />
                        <p className="absolute right-3 top-2 text-white">
                            £40/m
                        </p>
                        <p className="absolute bottom-2 left-3 text-start text-white">
                            maintenance
                        </p>
                    </button>
                    <button className="custom-border relative h-36 border backdrop-contrast-[90%]">
                        <MdOutlineDashboardCustomize
                            className="mx-auto h-[100%]"
                            size={"25px"}
                        />
                        <p className="absolute right-3 top-2 text-white">
                            £60/m
                        </p>
                        <p className="absolute bottom-2 left-3 text-start text-white">
                            custom
                        </p>
                    </button>
                    <p className="col-span-full flex justify-start border-l-4 border-white px-4 text-xs md:col-span-5">
                        prices are starting from; end prices calculated by
                        <br />
                        minimal wage in UK * 1.75 * hours will be spent on
                        project
                    </p>
                </div>
            </div>

            <CustomSeperator />

            <div className="col-span-full grid grid-flow-row grid-cols-4 gap-y-4">
                <h1 className="col-span-3 text-white">Showcase</h1>
                <button className="flex flex-row items-center justify-end gap-2 text-start text-white">
                    expand
                    <BiPlusMedical className="mt-[1px] text-primary" />
                </button>
                <div className="col-span-full -mt-2 grid grid-flow-row grid-cols-2 gap-8 md:grid-cols-5">
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
                        <p className="absolute bottom-2 left-3 text-white">
                            Wayou
                        </p>
                    </button>
                </div>
            </div>

            <CustomSeperator />

            <div className="col-span-full grid grid-flow-row grid-cols-4 gap-y-4">
                <h1 className="col-span-3 text-white">
                    Post by categories (3)
                </h1>
                <button className="flex flex-row items-center justify-end gap-2 text-end text-white">
                    expand
                    <BiPlusMedical className="mt-[1px] text-primary" />
                </button>
                <div className="col-span-full grid grid-flow-row grid-cols-2 gap-8 grayscale-[1] md:grid-cols-5">
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

            <CustomSeperator />

            <div className="col-span-full grid grid-flow-row grid-cols-4 gap-y-4">
                <h1 className="col-span-3 mb-2 text-white">Team</h1>
                <button className="flex flex-row items-center justify-end gap-2 text-end text-white">
                    expand
                    <BiPlusMedical className="mt-[1px] text-primary" />
                </button>

                <div className="col-span-full -mt-2 grid grid-flow-row grid-cols-2 gap-8 md:grid-cols-5">
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
                <h1 className="col-span-full text-white">Projects</h1>
            </div>
        </>
    )
}

const renderContactContainer = () => {
    return <div></div>
}
