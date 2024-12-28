"use client";
import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image";
import number from "../NumberGuessing/number.png"; 
import Typewriter from 'typewriter-effect';

const Number = () => {
    const [comments, setComments] = useState('');
    const [commentList, setCommentList] = useState<string[]>([]);
    const [feedback, setFeedback] = useState('');
    const [isClient, setIsClient] = useState(false); 

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
        <div className="bg-[#9bdbe5]"> 
            <section className="text-gray-800 body-font">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                        <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-white p-4 rounded-md">
                            <Typewriter
                                options={{
                                    strings: ["Challenge Yourself: Introducing My CLI Number Guessing Game! 🎮"],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                    delay: 75,
                                }}
                            />
                        </h1>
                        <p className="mb-4 leading-relaxed text-lg text-[#4a4a4a]">
                            A fun and engaging Command Line Interface (CLI) Number Guessing Game! 🎉 This simple yet addictive game allows players to test their guessing skills while having a blast right from their terminal.
                        </p>
                        <p className="mb-4 leading-relaxed text-lg text-[#4a4a4a]">
                            Why a Number Guessing Game? 🤔 Number guessing games are a classic form of entertainment that helps sharpen your critical thinking and problem-solving skills. They’re perfect for players of all ages and can be enjoyed solo or with friends.
                        </p>
                        <p className="mb-4 leading-relaxed text-lg text-[#4a4a4a]">
                            Key Features of the Number Guessing Game 🎯
                        </p>
                        <ul className="list-disc ml-6 mb-4 text-[#4a4a4a]">
                            <li>Easy-to-Understand Gameplay: The game randomly selects a number within a specified range, and your goal is to guess it in as few attempts as possible. The game provides hints if your guess is too high or too low.</li>
                            <li>Customizable Difficulty Levels: Players can choose the range of numbers, allowing for a tailored experience based on their skill level. 🎲</li>
                            <li>Score Tracking: The game keeps track of your attempts and displays your score at the end, so you can challenge yourself to improve with each playthrough. 🏆</li>
                            <li>User-Friendly Interface: With a straightforward command-line interface, getting started is as easy as running the program and following the prompts.</li>
                        </ul>
                        <div className="flex space-x-4 mt-8 ml-16">
                            <Link href="">
                           <button className="inline-flex text-[#00bcd4] bg-[#e0f7fa] border-0 py-3 px-8 focus:outline-none hover:bg-[#b2ebf2] rounded-lg shadow-md transition duration-300">
                                Source Code
                            </button> </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center">
                        <div className="relative transition-transform transform hover:scale-105 duration-500">
                            <Image
                                className="rounded-lg shadow-lg"
                                alt="Number Guessing Game"
                                src={number}
                                width={600}
                                height={400}
                                layout="responsive"
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
                        <button type="submit" className="inline-flex items-center justify-center text-white bg-[#00bcd4] border-0 py-2 px-4 focus:outline-none hover:bg-[#0097a7] rounded-lg shadow-md transition duration-300 transform hover:scale-105">
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

export default Number;
