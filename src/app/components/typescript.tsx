import Link from "next/link";
import Image from "next/image";
import calculator from "../Calculator/calculator.webp";
import weather from "../WeatherForecast/weather.png";
import currency from "../CurrencyConvertor/currency.png";
import number from "../NumberGuessing/number.png";
import google from "../GoogleSearch/google.png";
import ATM from "../ATM/ATM.png";

const Typescript = () => {
  return (
    <div>
      <section className="body-font bg-black">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {[
              {
                src: calculator,
                title: "CLI-Calculator",
                description: "Simplify your calculations with our easy-to-use command-line interface!",
                link: "/Calculator",
                alt: "CLI-Calculator"
              },
              {
                src: weather,
                title: "CLI-Weather Forecast",
                description: "Get accurate weather updates right from your command line.",
                link: "/WeatherForecast",
                alt: "CLI-Weather Forecast"
              },
              {
                src: currency,
                title: "CLI-Currency Converter",
                description: "Easily convert currencies with our simple command line tool.",
                link: "/CurrencyConvertor",
                alt: "CLI-Currency Converter"
              }
            ].map((item, index) => (
              <div className="p-4 md:w-1/3" key={index}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={item.src}
                    alt={item.alt}
                    width={720}
                    height={400}
                  />
                  <div className="p-6 text-center">
                    <h1 className="title-font text-2xl font-bold text-white mb-3">{item.title}</h1>
                    <p className="leading-relaxed mb-3 text-slate-300">{item.description}</p>
                    <div className="mt-6"> 
                      <Link href={item.link} className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full transition duration-200 transform hover:bg-indigo-700 hover:scale-105">
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
            ))}
          </div>
        </div>
      </section>

      <section className="body-font bg-black">
        <div className="container px-5 py-0 mx-auto">
          <div className="flex flex-wrap -m-4">
            {[
              {
                src: number,
                title: "CLI-Number Guessing Game",
                description: "Challenge luck with this fun.",
                link: "/NumberGuessing",
                alt: "CLI-Number Guessing Game"
              },
              {
                src: google,
                title: "CLI-Google Search",
                description: "Search the web directly from your command line interface.",
                link: "/GoogleSearch",
                alt: "CLI-Google Search"
              },
              {
                src: ATM,
                title: "CLI-ATM Machine",
                description: "Simulate ATM transactions directly from your terminal.",
                link: "/ATM",
                alt: "CLI-ATM Machine"
              }
            ].map((item, index) => (
              <div className="p-4 md:w-1/3" key={index}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={item.src}
                    alt={item.alt}
                    width={720}
                    height={400}
                  />
                  <div className="p-6 text-center">
                    <h1 className="title-font text-2xl font-bold text-white mb-3">{item.title}</h1>
                    <p className="leading-relaxed mb-3 text-slate-300">{item.description}</p>
                    <div className="mt-6"> 
                      <Link href={item.link} className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full transition duration-200 transform hover:bg-indigo-700 hover:scale-105">
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Typescript;
