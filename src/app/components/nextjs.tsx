import Link from "next/link";
import Image from "next/image";
import portfolio from "../MyPortfolio/portfolio.png";
import soda from "../Fizzi/soda.png";
import recipe from "../RecipeSearch/recipe.png";
import bike from "../BikeWebsite/bike.webp";
import icecream from "../Icecream/ice-cream.png";

const Nextjs = () => {
    return (
        <div>
            <section className="body-font bg-black">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 justify-center">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                                <Image
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                    src={portfolio}
                                    alt="My Portfolio"
                                    width={720}
                                    height={400}
                                />
                                <div className="p-6">
                                    <h1 className="title-font text-2xl font-bold text-white mb-3 text-center">
                                        My Portfolio
                                    </h1>
                                    <p className="leading-relaxed mb-3 text-slate-300">
                                        Welcome to my Portfolio! Here, you will discover my passion for innovative technology, including my personal chatbot that enhances user interaction and streamlines communication.
                                    </p>
                                    <div className="flex justify-center">
                                        <Link href="/MyPortfolio">
                                            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-[#161616] transition duration-200 transform hover:scale-105 shadow-md">
                                                Explore Now
                                                <svg
                                                    className="w-4 h-4 ml-2 inline-block"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M5 12h14" />
                                                    <path d="M12 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                                <Image
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                    src={soda}
                                    alt="Fizzi 3D Animated Website"
                                    width={721}
                                    height={401}
                                />
                                <div className="p-6">
                                    <h1 className="title-font text-2xl font-bold text-white mb-3 text-center">
                                        Fizzi 3D Animated Website
                                    </h1>
                                    <p className="leading-relaxed mb-3 text-slate-300">
                                        Welcome to Fizzi, where creativity meets technology! Explore our 3D animated website, showcasing dynamic visuals and interactive experiences designed to captivate and engage users.
                                    </p>
                                    <div className="flex justify-center">
                                        <Link href="/Fizzi">
                                            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-[#161616] transition duration-200 transform hover:scale-105 shadow-md">
                                                Explore Now
                                                <svg
                                                    className="w-4 h-4 ml-2 inline-block"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M5 12h14" />
                                                    <path d="M12 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                                <Image
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                    src={recipe}
                                    alt="Recipe Search Website"
                                    width={722}
                                    height={402}
                                />
                                <div className="p-6">
                                    <h1 className="title-font text-2xl font-bold text-white mb-3 text-center">
                                        Recipe Search Website
                                    </h1>
                                    <p className="leading-relaxed mb-3 text-slate-300">
                                        Welcome to our Recipe Search App, your culinary companion! Effortlessly browse and discover a wide variety of recipes tailored to your taste and dietary needs, making mealtime inspiration just a tap away.
                                    </p>
                                    <div className="flex justify-center">
                                        <Link href="/RecipeSearch">
                                            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-[#161616] transition duration-200 transform hover:scale-105 shadow-md">
                                                Explore Now
                                                <svg
                                                    className="w-4 h-4 ml-2 inline-block"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M5 12h14" />
                                                    <path d="M12 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="body-font bg-black">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -m-4 justify-center">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                                <Image
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                    src={bike}
                                    alt="Bike Website with ChatBot"
                                    width={720}
                                    height={400}
                                />
                                <div className="p-6">
                                    <h1 className="title-font text-2xl font-bold text-white mb-3 text-center">
                                        Bike Website with ChatBot
                                    </h1>
                                    <p className="leading-relaxed mb-3 text-slate-300">
                                        Welcome to our Bike Website, where adventure meets innovation! Explore our extensive selection of bikes while our chatbot is here to assist you with recommendations.
                                    </p>
                                    <div className="flex justify-center mt-10">
                                        <Link href="/BikeWebsite">
                                            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-[#161616] transition duration-200 transform hover:scale-105 shadow-md">
                                                Explore Now
                                                <svg
                                                    className="w-4 h-4 ml-2 inline-block"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M5 12h14" />
                                                    <path d="M12 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                                <Image
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                    src={icecream}
                                    alt="Ice-Cream Website with ChatBot"
                                    width={721}
                                    height={401}
                                />
                                <div className="p-6">
                                    <h1 className="title-font text-2xl font-bold text-white mb-3 text-center">
                                        Ice-Cream Website with ChatBot
                                    </h1>
                                    <p className="leading-relaxed mb-3 text-slate-300">
                                        Welcome to Scoop Paradise, where every scoop is a delightful adventure! Explore our artisanal ice cream flavors, from classic to unique creations, while our friendly chatbot is here to assist you.
                                    </p>
                                    <div className="flex justify-center">
                                        <Link href="/Icecream">
                                            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-[#161616] transition duration-200 transform hover:scale-105 shadow-md">
                                                Explore Now
                                                <svg
                                                    className="w-4 h-4 ml-2 inline-block"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M5 12h14" />
                                                    <path d="M12 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Nextjs;
