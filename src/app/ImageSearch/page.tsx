"use client"; 
import { useState } from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import search from "../ImageSearch/imagesearch.jpg";
import Link from "next/link"

const ImageSearch = () => {
    const [comments, setComments] = useState('');
    const [commentList, setCommentList] = useState<string[]>([]);
    const [feedback, setFeedback] = useState('');

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
        <div className="bg-gradient-to-b from-[#f0f4ff] to-white min-h-screen">
            <section className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                    <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-black p-4 rounded-md">
                        <Typewriter
                            options={{
                                strings: ["Unlocking Convenience: My CLI ATM Machine! 💳✨"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <p className="mb-4 leading-relaxed text-lg text-[#424242]">
                        Introducing my Command-Line Interface (CLI) ATM machine, designed to revolutionize the way you interact with banking. This innovative project enhances user experience by allowing seamless transactions through a text-based command system. 🚀
                    </p>
                    <p className="mb-4 leading-relaxed text-lg text-[#424242]">
                        Throughout the development process, I honed various skills in programming and system design. By focusing on speed and security, I created an ATM that simplifies transactions and provides a robust solution for users seeking efficiency in their banking experience. 🔒⚡
                    </p>
                    <p className="mb-8 leading-relaxed text-lg text-[#424242]">
                        I hope you enjoy using the CLI ATM as much as I enjoyed building it! 🎉 Stay tuned for more updates and insights as I continue to explore and innovate in the world of banking technology! 🌟
                    </p>
                    <div className="flex space-x-4 mt-8">
                        <Link href="https://image-search-five-lemon.vercel.app/">
                        <button className="inline-flex items-center justify-center text-white bg-[#42a5f5] border-0 py-3 px-6 focus:outline-none hover:bg-[#2196f3] rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                            Check it Here
                        </button></Link>
                        <Link href=""><button className="inline-flex items-center justify-center text-[#424242] bg-[#e3f2fd] border-0 py-3 px-6 focus:outline-none hover:bg-[#bbdefb] rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                            Source Code
                        </button>
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full flex justify-center">
                    <div className="relative transition-transform transform hover:scale-105 duration-500 w-full max-w-md">
                        <Image
                            className="rounded-lg shadow-lg"
                            alt="Image Search App"
                            src={search}
                            width={500}
                            height={300}
                            layout="responsive"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 rounded-lg transition-opacity duration-500 hover:opacity-0" />
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
                        <button type="submit" className="inline-flex items-center justify-center text-white bg-[#42a5f5] border-0 py-2 px-4 focus:outline-none hover:bg-[#2196f3] rounded-lg shadow-md transition duration-300 transform hover:scale-105">
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

export default ImageSearch;
