"use client"; 
import { useEffect, useState } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import github from "../Github/github.jpg";
import Link from "next/link";

const Github = () => {
    const [isClient, setIsClient] = useState(false);
    const [comments, setComments] = useState('');
    const [commentList, setCommentList] = useState<string[]>([]);
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        setIsClient(true);
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
        <div className="bg-gradient-to-b from-[#8d9daa] to-white min-h-screen">
            <section className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                    <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-black leading-tight">
                        {isClient && (
                            <Typewriter
                                options={{
                                    strings: ["Introducing My GitHub Profile Search Application! 🐙💻"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        )}
                    </h1>
                    <p className="mb-4 leading-relaxed text-lg text-black">
                        I’ve built a GitHub Profile Search Application using HTML, CSS, and JavaScript! 🚀
                        <br />
                        <strong>Why GitHub Profile Search? 🤔</strong><br />
                        In today’s world, connecting with developers and exploring open-source contributions is crucial. My goal was to create a simple yet powerful tool that allows users to search for GitHub profiles effortlessly. By leveraging GitHub’s API, I’ve made it easy to retrieve and display vital information in real-time. 🌐
                    </p>
                    <p className="mb-4 leading-relaxed text-lg text-black">
                        <strong>What’s Inside? 🔍</strong><br />
                        <ul className="list-disc ml-6">
                            <li className="text-black">Intuitive Search Functionality: Users can input any GitHub username and instantly view the profile. ✏️</li>
                            <li className="text-black">Clean and Modern UI: Designed for an enjoyable user experience, with a focus on aesthetics and usability. 🎨</li>
                            <li className="text-black">Dynamic Data Display: Using JavaScript to fetch and render profile data directly from the API, ensuring up-to-date information. 📊</li>
                        </ul>
                    </p>
                    <p className="mb-8 leading-relaxed text-lg text-black">
                        Working on this project has been incredibly rewarding, allowing me to refine my skills in web development and API integration. I can’t wait for you to try it out and explore the world of GitHub profiles! 🌟
                    </p>
                    <div className="flex space-x-4 mt-8">
                        <Link href="https://search-github-profiles-murex.vercel.app/"><button className="inline-flex items-center justify-center text-white bg-[#181a19] border-0 py-3 px-8 focus:outline-none hover:bg-[#4c4d4c] rounded-lg shadow-md transition duration-300">
                            Check it Here
                        </button>
                        </Link>
                        <Link href=""><button className="inline-flex items-center justify-center text-black bg-[#e1e4e8] border-0 py-3 px-8 focus:outline-none hover:bg-[#d1d5da] rounded-lg shadow-md transition duration-300">
                            Source Code
                        </button>
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full flex justify-center">
                    <div className="relative transition-transform transform hover:scale-105 duration-500 w-full max-w-md">
                        <Image
                            className="rounded-lg shadow-lg"
                            alt="GitHub Profile Search App"
                            src={github}
                            layout="responsive"
                            width={500}
                            height={300}
                            priority 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 rounded-lg transition-opacity duration-500 hover:opacity-0" />
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
                            <button type="submit" className="inline-flex items-center justify-center text-white bg-[#191c1e] border-0 py-2 px-4 focus:outline-none hover:bg-[#363737] rounded-lg shadow-md transition duration-300 transform hover:scale-105">
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

export default Github;
