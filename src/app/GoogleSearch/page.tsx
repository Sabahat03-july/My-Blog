"use client";
import Link from "next/link"
import { useEffect, useState } from "react";
import Image from 'next/image';
import google from '../GoogleSearch/google.png'; 
import Typewriter from 'typewriter-effect';

const Google = () => {
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
        <div className="bg-[#73b0bc]"> 
            <section className="text-gray-800 body-font">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                        <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-white p-4 rounded-md">
                            <Typewriter
                                options={{
                                    strings: ["Discover the Power of CLI Google Search! 🔍💻"],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                    delay: 75,
                                }}
                            />
                        </h1>
                        <p className="mb-4 leading-relaxed text-lg text-[#424242]">
                            Welcome to my CLI Google Search project! I’m excited to share how I built a command-line interface (CLI) tool that allows users to perform Google searches directly from their terminal using a powerful API. This project merges simplicity with functionality, providing a seamless search experience without the need for a web browser. 🚀
                            <br />
                            The CLI Google Search tool leverages the Google Search API, allowing users to input queries and receive relevant search results in a clean and straightforward format. 📈✨ This approach not only enhances productivity but also makes information retrieval faster and more efficient for those who prefer working in the command line.
                            <br />
                            Throughout the development process, I learned valuable skills in API integration and command-line programming. 🛠️ I focused on creating a user-friendly interface, ensuring that the tool is intuitive and easy to use. With just a few keystrokes, users can access a wealth of information without navigating through multiple web pages.
                            <br />
                            I hope you find the CLI Google Search tool as useful as I intended it to be! 🌟 If you have any feedback or suggestions for improvements, I’d love to hear from you. Stay tuned for more updates and projects as I continue to explore the fascinating world of programming! 💡💻
                        </p>
                        <div className="flex space-x-4 mt-8 ml-16">
                            <Link href="">
                            <button className="inline-flex text-[#333] bg-[#e1e4e8] border-0 py-3 px-8 focus:outline-none hover:bg-[#88919c] rounded-lg shadow-md transition duration-300">
                                Source Code
                            </button></Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center">
                        <div className="relative transition-transform transform hover:scale-105 duration-500">
                            <Image
                                className="rounded-lg shadow-lg"
                                alt="Google Search"
                                src={google}
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
                        <button type="submit" className="inline-flex items-center justify-center text-white bg-[#3e97b2] border-0 py-2 px-4 focus:outline-none hover:bg-[#16191d] rounded-lg shadow-md transition duration-300 transform hover:scale-105">
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

export default Google;
