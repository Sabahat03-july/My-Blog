import Link from "next/link";
import Image from "next/image";
import trading from "../TradingWebsite/trading.webp";
import gemini from "../GeminiBot/gemini.png";

const Reactjs = () => {
    return (
        <div>
            <section className="body-font bg-black">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 justify-center">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                                <Image
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                    src={trading}
                                    alt="Trading Website"
                                    width={720}
                                    height={400}
                                />
                                <div className="p-6 flex flex-col items-center">
                                    <h1 className="title-font text-2xl font-bold text-white mb-3">
                                        Trading Website
                                    </h1>
                                    <p className="leading-relaxed mb-3 text-center text-slate-300">
                                        Welcome to our Trading Website, where market insights and powerful tools meet to empower your trading journey.
                                    </p>
                                    <Link href="/TradingWebsite">
                                        <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full transition duration-200 transform hover:bg-indigo-700 hover:scale-105 shadow-md">
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
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                                <Image
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                    src={gemini}
                                    alt="Gemini Bot"
                                    width={721}
                                    height={401}
                                />
                                <div className="p-6 flex flex-col items-center">
                                    <h1 className="title-font text-2xl font-bold text-white mb-3">
                                        Gemini Bot
                                    </h1>
                                    <p className="leading-relaxed mb-3 text-center text-slate-300">
                                        Meet my Gemini bot, the ultimate conversationalist! With a blend of curiosity and charm, it adapts to your mood.
                                    </p>
                                    <Link href="/GeminiBot">
                                        <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full transition duration-200 transform hover:bg-indigo-700 hover:scale-105 shadow-md">
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
            </section>
        </div>
    );
}

export default Reactjs;
