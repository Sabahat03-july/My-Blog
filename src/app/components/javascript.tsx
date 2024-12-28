import Link from "next/link";
import Image from "next/image";
import github from "../Github/github.jpg";
import image from "../ImageSearch/imagesearch.jpg";
import resume from "../Resume/resume.png";

const Javascript = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-black">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Image Search App Card */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={image}
                  alt="Image Search App"
                  width={721}
                  height={500}
                />
                <div className="p-6 text-center">
                  <h2 className="title-font text-2xl font-bold text-white mb-3">
                    Image Search App
                  </h2>
                  <p className="leading-relaxed mb-3 text-slate-300">
                    Discover stunning visuals at your fingertips. Search, explore, and save your favorite images in an instant!
                  </p>
                  <div className="mt-6">
                    <Link href="/ImageSearch" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full transition duration-200 transform hover:bg-indigo-700 hover:scale-105">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Github Profiles Search Card */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={github}
                  alt="Github Profiles Search"
                  width={721}
                  height={401}
                />
                <div className="p-6 text-center">
                  <h2 className="title-font text-2xl font-bold text-white mb-3">
                    Github Profiles Search
                  </h2>
                  <p className="leading-relaxed mb-3 text-slate-300">
                    Explore coding talent and projects effortlessly. Our GitHub profile search brings the best developers right to you!
                  </p>
                  <div className="mt-6"> 
                    <Link href="/Github" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full transition duration-200 transform hover:bg-indigo-700 hover:scale-105">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Editable Resume Builder Card */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={resume}
                  alt="Editable Resume Builder"
                  width={722}
                  height={402}
                />
                <div className="p-6 text-center">
                  <h2 className="title-font text-2xl font-bold text-white mb-3">
                    Editable Resume Builder
                  </h2>
                  <p className="leading-relaxed mb-3 text-slate-300">
                    Craft your dream resume effortlessly. Customize, edit, and shine in your job applications with our intuitive builder!
                  </p>
                  <div className="mt-6"> 
                    <Link href="/Resume" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full transition duration-200 transform hover:bg-indigo-700 hover:scale-105">
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
};

export default Javascript;
