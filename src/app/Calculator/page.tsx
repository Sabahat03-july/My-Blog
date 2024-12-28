"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import calculator from "../Calculator/calculator.webp"; 
import Typewriter from 'typewriter-effect';
import Link from "next/link"

const Calculator = () => {
    const [comments, setComments] = useState('');
    const [commentList, setCommentList] = useState<string[]>([]);
    const [feedback, setFeedback] = useState('');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComments(e.target.value);
    };

    const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (comments.trim()) {
            setCommentList(prevComments => [...prevComments, comments]);
            setComments('');
            setFeedback('Comment submitted! Thank you!');
            setTimeout(() => setFeedback(''), 3000);
        }
    };

    return (
        <div className="bg-gray-400"> 
            <section className="text-gray-800 body-font">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                        <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-gray-800 p-4 rounded-md">
                            <Typewriter
                                options={{
                                    strings: ["Simplifying Math: Introducing My CLI Calculator! 🔢"],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                    delay: 75,
                                }}
                            />
                        </h1>
                        <p className="mb-4 leading-relaxed text-lg text-[#333]">
                            An intuitive Command Line Interface (CLI) Calculator! 🚀 This tool makes performing calculations quick and easy, all from your terminal.
                        </p>
                        <p className="mb-4 leading-relaxed text-lg text-[#333]">
                            <strong>Why a CLI Calculator? 🤔</strong><br />
                            In a world filled with complex applications and graphical interfaces, sometimes simplicity is key. A CLI Calculator allows users to perform basic arithmetic operations without the distractions of a GUI.
                        </p>
                        <p className="mb-4 leading-relaxed text-lg text-[#333]">
                            <strong>Key Features of the CLI Calculator 🛠️</strong><br />
                            <ul className="list-disc ml-6">
                                <li>Basic Arithmetic Operations: The calculator supports addition, subtraction, multiplication, and division.</li>
                                <li>User-Friendly Interface: Clear prompts and instructions for easy navigation.</li>
                                <li>Error Handling: Includes feedback for invalid inputs.</li>
                                <li>Extensible Design: Can be expanded for more advanced functions.</li>
                            </ul>
                        </p>
                        <div className="flex space-x-4 mt-8 ml-16">
                            <Link href="https://github.com/Sabahatsabahat/Calculator_project.git">
                            <button className="inline-flex text-white bg-[#2f3235] border-0 py-3 px-8 focus:outline-none hover:bg-[#161616] rounded-lg shadow-md transition duration-300">
Source Code                            </button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center">
                        <div className="relative transition-transform transform hover:scale-105 duration-500">
                            <Image
                                className="rounded-lg shadow-lg"
                                alt="Calculator"
                                src={calculator}
                                layout="responsive"
                                width={500}
                                height={300}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 rounded-lg transition-opacity duration-500 hover:opacity-0" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Comment Section */}
            {isClient && (
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
                            <button type="submit" className="inline-flex items-center justify-center text-white bg-[#2f3235] border-0 py-2 px-4 focus:outline-none hover:bg-[#161616] rounded-lg shadow-md transition duration-300 transform hover:scale-105">
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
            )}
        </div>
    );
}

export default Calculator;
