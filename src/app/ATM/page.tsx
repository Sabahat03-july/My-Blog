"use client";
import Link from "next/link"
import { useEffect, useState } from "react";
import Image from "next/image";
import Atm from '../ATM/ATM.png'; 
import Typewriter from 'typewriter-effect';

const ATM = () => {
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
        <div className="bg-[#a0df80]"> 
            <section className="text-gray-800 body-font">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                        <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-white p-4 rounded-md">
                            <Typewriter
                                options={{
                                    strings: ["Unlocking Convenience: The Benefits of CLI ATM Machine! 💳✨"],
                                    autoStart: true,
                                    loop: false,
                                    deleteSpeed: 50,
                                    delay: 75,
                                }}
                            />
                        </h1>
                        <p className="mb-4 leading-relaxed text-lg text-[#333]">
                            An intuitive Command Line Interface (CLI) ATM! 🚀 This tool allows users to manage transactions quickly and efficiently, all from the terminal.
                            <br />
                            <strong>Why a CLI ATM? 🤔</strong><br />
                            In a world filled with complex applications, simplicity is key. A CLI ATM provides essential functionalities without the distractions of a GUI.
                        </p>
                        <strong>Key Features of the CLI ATM 🛠️</strong><br />
                        <ul className="list-disc ml-6 mb-4">
                            <li>Basic Transaction Operations: The ATM supports withdrawals, deposits, and balance inquiries. Just enter your command, and let the ATM do the rest! 💵</li>
                            <li>User-Friendly Interface: Clear prompts and instructions ensure anyone can easily navigate the CLI ATM.</li>
                            <li>Error Handling: Robust error handling provides feedback for invalid inputs, ensuring a smooth experience. ⚠️</li>
                            <li>Extensible Design: Easily expand functionality to include advanced features like fund transfers or account management. 🌟</li>
                        </ul>
                        <div className="flex space-x-4 mt-8 ml-16">
                            <Link href="https://github.com/Sabahatsabahat/ATM-project.git">
                           <button className="inline-flex text-[#333] bg-[#e1e4e8] border-0 py-3 px-8 focus:outline-none hover:bg-[#d8dad1] rounded-lg shadow-md transition duration-300">
                                Source Code
                            </button> </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center">
                        <div className="relative transition-transform transform hover:scale-105 duration-500">
                            <Image
                                className="rounded-lg shadow-lg"
                                alt="ATM"
                                src={Atm}
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
                        <button type="submit" className="inline-flex items-center justify-center text-white bg-[#a0df80] border-0 py-2 px-4 focus:outline-none hover:bg-[#16191d] rounded-lg shadow-md transition duration-300 transform hover:scale-105">
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
};

export default ATM;
