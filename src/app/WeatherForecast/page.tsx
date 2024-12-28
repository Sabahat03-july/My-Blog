"use client"
import Link from "next/link"
import { useEffect, useState } from "react";
import Image from "next/image";
import weather from "../WeatherForecast/weather.png"; 
import Typewriter from 'typewriter-effect';

const Weather = () => {
    const [comments, setComments] = useState('');
    const [commentList, setCommentList] = useState<string[]>([]);
    const [feedback, setFeedback] = useState('');
    const [isClient, setIsClient] = useState(false); // State to track client-side rendering

    useEffect(() => {
        setIsClient(true); // Set to true after component mounts
    }, []);

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComments(e.target.value);
    };

    const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (comments.trim()) {
            setCommentList([...commentList, comments]);
            setComments('');
            setFeedback('Comment submitted! Thank you!');
            setTimeout(() => setFeedback(''), 3000);
        }
    };

    return (
        <div className="bg-[#b2d9d5]"> 
            <section className="text-gray-800 body-font">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                        <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-orange-500 p-4 rounded-md">
                            <Typewriter
                                options={{
                                    strings: ["☁️ Get the Forecast: Introducing My CLI Weather Search Tool"],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                    delay: 75,
                                }}
                            />
                        </h1>
                        <p className="mb-4 leading-relaxed text-lg text-[#004d40]">
                            A Command Line Interface (CLI) Weather Search Tool! 🌦️ This handy application allows you to check the weather quickly and easily, right from your terminal.
                        </p>
                        <p className="mb-4 leading-relaxed text-lg text-[#004d40]">
                            Why a CLI Weather Search Tool? 🤔 In our fast-paced digital world, having immediate access to weather information is essential. While many people rely on mobile apps and websites, a CLI tool provides a streamlined and distraction-free way to get the weather updates you need.
                        </p>
                        <p className="mb-4 leading-relaxed text-lg text-[#004d40]">
                            Key Features of the Weather Search Tool 🌍
                        </p>
                        <ul className="list-disc ml-6 mb-4 text-[#004d40]">
                            <li>Real-Time Weather Updates: Get the latest weather information for any city in just a few commands. 🌡️</li>
                            <li>Simple Command-Line Interface: The user interface is intuitive, allowing you to easily input your desired location and receive immediate results.</li>
                            <li>Error Handling: The tool is equipped with error handling to manage invalid inputs. ⚠️</li>
                            <li>Extensible Functionality: Built with growth in mind, the CLI Weather Search Tool can be enhanced to include additional features in future updates. 🌟</li>
                        </ul>
                        <div className="flex space-x-4 mt-8 ml-16">
                            <Link href="">
                            <button className="inline-flex text-[#00796b] bg-[#e0f7fa] border-0 py-3 px-8 focus:outline-none hover:bg-[#b2ebf2] rounded-lg shadow-md transition duration-300">
                                Source Code
                            </button></Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center">
                        <div className="relative transition-transform transform hover:scale-105 duration-500">
                            <Image
                                className="rounded-lg shadow-lg"
                                alt="Weather Forecast"
                                src={weather}
                                layout="responsive"
                                width={720}
                                height={600}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 rounded-lg transition-opacity duration-500 hover:opacity-0" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Comment Section */}
            <section className="max-w-6xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-lg mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Comments</h2>
                {feedback && <p className="text-green-600 mb-4">{feedback}</p>}
                <form onSubmit={handleCommentSubmit} className="flex flex-col space-y-4">
                    <textarea
                        value={comments}
                        onChange={handleCommentChange}
                        placeholder="Add your comment here..."
                        className="w-full h-24 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 resize-none"
                        maxLength={200}
                        required
                    />
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">{comments.length}/200</span>
                        <button type="submit" className="inline-flex items-center justify-center text-white bg-[#00796b] border-0 py-2 px-4 focus:outline-none hover:bg-[#004d40] rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                            Submit Comment
                        </button>
                    </div>
                </form>
                <div className="mt-4 max-h-60 overflow-y-auto">
                    {commentList.length > 0 ? (
                        <ul className="list-disc pl-5">
                            {commentList.map((comment, index) => (
                                <li key={index} className="text-gray-700 py-1 border-b last:border-b-0">{comment}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-700">No comments yet.</p>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Weather;
