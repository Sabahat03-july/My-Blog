"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import resume from "../Resume/resume.png"; 
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const Resume = () => {
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
        <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen"> 
            <section className="text-gray-800 body-font">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                        <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-blue-950 p-4 rounded-md">
                            {isClient && ( 
                                <Typewriter
                                    options={{
                                        strings: ["Create Your Perfect CV: Introducing My Editable Resume Builder! 📝"],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                        delay: 75,
                                    }}
                                />
                            )}
                        </h1>
                        <p className="mb-4 leading-relaxed text-lg text-[#333]">
                            A user-friendly Editable Resume Builder designed to help you craft the perfect CV with ease! 📝✨
                        </p>
                        <p className="mb-4 leading-relaxed text-lg text-[#333]">
                            <strong>Why an Editable Resume Builder? 🤔</strong><br />
                            In today’s competitive job market, having a standout resume is crucial. However, many people struggle with formatting, layout, and content organization. My goal was to create a tool that simplifies the resume-building process, allowing users to focus on showcasing their skills and experiences effectively.
                        </p>
                        <p className="mb-4 leading-relaxed text-lg text-[#333]">
                            <strong>Key Features of the Resume Builder 🛠️</strong><br />
                            <ul className="list-disc ml-6">
                                <li>Customizable Templates: Choose from a variety of professional templates tailored for different industries. Each template is designed to highlight your strengths and make a lasting impression. 🎨</li>
                                <li>Easy Editing Interface: With a simple drag-and-drop feature, you can easily rearrange sections, add new content, and personalize your resume to match your style. 🔄</li>
                                <li>Real-Time Preview: See changes instantly! The real-time preview function allows you to view your resume as you make edits, ensuring it looks just right before you download it. 👀</li>
                            </ul>
                        </p>
                        <div className="flex space-x-4 mt-8">
                            <Link href='https://miestone4.vercel.app/'>
                            <button className="inline-flex text-white bg-[#18296d] border-0 py-3 px-8 focus:outline-none hover:bg-[#4e7f92] rounded-lg shadow-md transition duration-300">
                                Check it Here
                            </button>
                            </Link>
                            <Link href=''><button className="inline-flex text-[#333] bg-[#e2e3e5] border-0 py-3 px-8 focus:outline-none hover:bg-[#898c95] rounded-lg shadow-md transition duration-300">
                                Source Code
                            </button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center">
                        <div className="relative transition-transform transform hover:scale-105 duration-500">
                            <Image
                                className="rounded-lg shadow-lg"
                                alt="An example of a resume created with the Editable Resume Builder"
                                src={resume}
                                layout="responsive"
                                width={500} 
                                height={700} 
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
                        <button type="submit" className="inline-flex items-center justify-center text-white bg-[#18296d] border-0 py-2 px-4 focus:outline-none hover:bg-[#4d4896] rounded-lg shadow-md transition duration-300 transform hover:scale-105">
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

export default Resume;
