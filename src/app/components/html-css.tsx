import Link from "next/link";
import Image from "next/image";
import daraz from "../DarazClone/daraz.jpg";
import coffee from "../CoffeeWebsite/coffee.webp";
import food from "../FoodWebsite/food.webp";

const Html = () => {
  return (
    <div>
      <section className="text-white body-font bg-black">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-white mb-12">
            My Projects
          </h1>
          <div className="flex flex-wrap -m-4 justify-center">
            {/* Daraz Clone Card */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={daraz}
                  alt="Daraz Clone"
                  width={720}
                  height={400}
                />
                <div className="p-6 text-center">
                  <h1 className="title-font text-2xl font-bold text-white mb-3">
                    Daraz Clone
                  </h1>
                  <p className="leading-relaxed mb-3 text-slate-300">
                    Experience a seamless shopping journey with our Daraz Clone, where your favorite products are just a click away!
                  </p>
                  <Link 
                    href="/DarazClone" 
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center"
                  >
                    Explore Now
                    <svg
                      className="w-4 h-4 ml-2"
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

            {/* Coffee Website Card */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={coffee}
                  alt="Coffee Website"
                  width={721}
                  height={401}
                />
                <div className="p-6 text-center">
                  <h1 className="title-font text-2xl font-bold text-white mb-3">
                    Coffee Website
                  </h1>
                  <p className="leading-relaxed mb-3 text-slate-300">
                    Brew your perfect cup with our curated selection of coffees now with 24/7 chatbot assistance to guide you!
                  </p>
                  <Link 
                    href="/CoffeeWebsite" 
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center"
                  >
                    Explore Now
                    <svg
                      className="w-4 h-4 ml-2"
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

            {/* Food Website Card */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={food}
                  alt="Food Website"
                  width={722}
                  height={402}
                />
                <div className="p-6 text-center">
                  <h1 className="title-font text-2xl font-bold text-white mb-3">
                    Food Website
                  </h1>
                  <p className="leading-relaxed mb-3 text-slate-300">
                    Indulge in a culinary journey with our diverse menu, offering everything from comforting classics to exotic dishes!
                  </p>
                  <Link 
                    href="/FoodWebsite" 
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center"
                  >
                    Explore Now
                    <svg
                      className="w-4 h-4 ml-2"
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
      </section>
    </div>
  );
};

export default Html;
