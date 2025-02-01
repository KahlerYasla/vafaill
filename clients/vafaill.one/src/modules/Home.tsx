import { IPhoneMockup } from "react-device-mockup"

import { FaBrain } from "react-icons/fa"
import { RiGitRepositoryFill } from "react-icons/ri"
import { GiStairsGoal } from "react-icons/gi"
import { MdAlternateEmail } from "react-icons/md"

import { FcGoogle } from "react-icons/fc"
import { FaAppStore } from "react-icons/fa"

import Typewriter from "typewriter-effect"

import { Line, Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import { CButton } from "./core"

// Registering necessary chart components
ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const Home: React.FC = () => {
    const dataLine = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "User Growth",
                data: [10, 20, 40, 50, 60, 80],
                fill: false,
                borderColor: "#000",
                tension: 0.1,
            },
        ],
    }

    const dataBar = {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        datasets: [
            {
                label: "Revenue",
                data: [2000, 4000, 8000, 10000],
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                borderColor: "rgba(0, 0, 0, 1)",
                borderWidth: 1,
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Growth Over Time",
            },
        },
    }

    const optionsBar = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Revenue by Quarter",
            },
        },
    }

    return (
        <div className="relative flex flex-col h-fit w-screen">
            <img
                src="/0.png"
                alt="background"
                className="h-96 absolute w-screen object-cover brightness-[.2] opacity-100 -z-10 drop-shadow-lg"
            />
            <div className="flex justify-center items-center h-96 w-full container mx-auto">
                <p className="h-fit text-2xl text-white font-bold">
                    <Typewriter
                        options={{
                            delay: 0,
                            deleteSpeed: 0,
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(
                                    "Where Imagination Becomes Playable With Our Code </>"
                                )
                                .pauseFor(3000) // Wait 2 seconds before deleting
                                .deleteAll(0)
                                .typeString(
                                    "Skill Meets Passion – 4 Masters, One Unstoppable Team."
                                )
                                .pauseFor(3000)
                                .deleteAll(0)
                                .start()
                        }}
                    />
                </p>
            </div>

            <h2 className="mx-auto mt-24 text-xl font-bold text-black flex items-center gap-4">
                <RiGitRepositoryFill className="text-primary text-3xl" />
                Projects
                <p className="text-xs opacity-60">vafaill repository</p>
            </h2>

            <div className="flex gap-16 justify-center items-center h-96 my-16 container w-screen mx-auto">
                <IPhoneMockup
                    screenWidth={500}
                    isLandscape
                    frameColor={"#000"}
                    hideStatusBar
                    hideNavBar
                    className="drop-shadow-lg"
                >
                    <img src="game.png" className="w-full object-cover" />
                </IPhoneMockup>
                <div className="flex flex-col gap-8">
                    <h2 className="font-black">
                        Printed Town <br />
                        <span className="text-primary underline">see more</span>
                    </h2>
                    <CButton className="flex gap-3 items-center justify-center">
                        <FcGoogle size={20} />
                        Google Play
                    </CButton>
                    <CButton className="flex gap-3 items-center justify-center">
                        <FaAppStore size={20} />
                        App Store
                    </CButton>
                </div>
            </div>

            <hr className="border mb-24 opacity-10 border-dashed" />

            <h2 className="mx-auto text-xl font-bold text-black flex items-center gap-4">
                <FaBrain className="text-primary text-2xl" />
                Team Behind
                <br />
                <p className="text-xs opacity-60">meet the talents</p>
            </h2>

            <div className="flex justify-evenly items-center h-96 my-8 container w-screen mx-auto">
                <div className="relative h-64 w-64 hover:scale-105 transition-all duration-500 hover:cursor-pointer ">
                    <img
                        src="berkay.jpeg"
                        className="object-cover aspect-square grayscale-50 border-4 border-black"
                    />
                    <p className="mt-auto absolute bottom-4 left-4 text-white font-bold">
                        Berkay Aslan
                    </p>
                </div>
                <div className="relative h-64 w-64 hover:scale-105 transition-all duration-500 hover:cursor-pointer">
                    <img
                        src="enis.png"
                        className="object-cover aspect-square grayscale-50 border-4 border-black"
                    />
                    <p className="mt-auto absolute bottom-4 left-4 text-white font-bold">
                        Enis Simsir
                    </p>
                </div>
                <div className="relative h-64 w-64 hover:scale-105 transition-all duration-500 hover:cursor-pointer">
                    <img
                        src="berkay.png"
                        className="object-cover aspect-square grayscale-50 border-4 border-black"
                    />
                    <p className="mt-auto absolute bottom-4 left-4 text-white font-bold">
                        Berkay Sever
                    </p>
                </div>{" "}
                <div className="relative h-64 w-64 hover:scale-105 transition-all duration-500 hover:cursor-pointer">
                    <img
                        src="arda.png"
                        className="object-cover aspect-square grayscale-50 border-4 border-black"
                    />
                    <p className="mt-auto absolute bottom-4 left-4 text-white font-bold">
                        Arda
                    </p>
                </div>
            </div>

            <hr className="border mb-24 opacity-10 border-dashed" />

            <h2 className="mx-auto text-xl font-bold text-black flex items-center gap-4 mb-20">
                <GiStairsGoal className="text-primary text-2xl" />
                Objectives
                <br />
                <p className="text-xs opacity-60">metrics</p>
            </h2>

            <div className="flex flex-col gap-16 justify-around items-center w-full">
                <div className="max-w-3xl">
                    <p className="text-lg text-gray-700 mb-6 font-semibold">
                        We aim to disrupt the market with innovative solutions
                        that offer measurable growth. Our key objectives are to:
                    </p>
                    <ul className="list-disc pl-6 space-y-4 text-gray-700 text-lg">
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">+</span>
                            Increase market share by 20% over the next year.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">+</span>
                            Launch 3 new products within the next 6 months.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">+</span>
                            Achieve a 50% growth in user engagement within the
                            first quarter.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">+</span>
                            Expand into 5 new international markets in the next
                            12 months.
                        </li>
                    </ul>
                </div>
                <div className="flex gap-16 h-[300px] mt-8">
                    <div style={{ width: "450px", height: "500px" }}>
                        <Line data={dataLine} options={options} />
                    </div>
                    <div style={{ width: "450px", height: "500px" }}>
                        <Bar data={dataBar} options={optionsBar} />
                    </div>
                </div>
            </div>

            <hr className="border mb-24 opacity-10 border-dashed" />

            <h2 className="mx-auto text-xl font-bold text-black flex items-center gap-4 mb-20">
                <MdAlternateEmail className="text-primary text-2xl" />
                Contact
                <br />
                <p className="text-xs opacity-60">reach out to us!</p>
            </h2>

            {/* Contact Us Form */}
            <div className="px-8 mb-32">
                <form className="max-w-lg mx-auto flex flex-col gap-6 bg-white p-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-3 border-black/20 border"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-3 border-black/20 border"
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        className="p-3 border-black/20 border"
                        rows={4}
                        required
                    />
                    <CButton>Send the Message</CButton>
                </form>
            </div>
        </div>
    )
}

export default Home
