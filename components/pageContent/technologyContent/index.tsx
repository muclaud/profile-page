import React from "react"
import HeroSection from "components/heroSection"

export default function TechnologyContent(): JSX.Element {
  return (
    <>
      <HeroSection herotext={"Technology"} />

      <section className="relative bg-green-300 dark:bg-green-600 -mt-24">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
            <div className="justify-center flex flex-wrap relative">
              <div className="my-4 w-full lg:w-6/12 px-4">
                <div className="bg-blue-400 shadow-lg rounded-lg text-center p-8">
                  <img
                    alt="..."
                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                    src="/img/tailwind.png"
                  />
                  <p className="text-lg text-white mt-4 font-semibold">
                    Tailwind
                  </p>
                </div>

                <div className="bg-blue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                  <img
                    alt="..."
                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                    src="/img/react.png"
                  />
                  <p className="text-lg text-white mt-4 font-semibold">
                    ReactJS
                  </p>
                </div>

                <div className="bg-gray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                  <img
                    alt="..."
                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                    src="/img/next.png"
                  />
                  <p className="text-lg text-white mt-4 font-semibold">
                    NextJS
                  </p>
                </div>
              </div>
              <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                  <img
                    alt="..."
                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                    src="/img/js.png"
                  />
                  <p className="text-lg text-white mt-4 font-semibold">
                    JavaScript
                  </p>
                </div>

                <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                  <img
                    alt="..."
                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                    src="/img/nest.png"
                  />
                  <p className="text-lg text-white mt-4 font-semibold">
                    NestJs
                  </p>
                </div>

                <div className="bg-green-500 shadow-lg rounded-lg text-center p-8 mt-8">
                  <img
                    alt="..."
                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                    src="/img/ts.png"
                  />
                  <p className="text-lg text-white mt-4 font-semibold">
                    TypeScript
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-24">
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Hi there!
            </h3>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              I am a result-oriented, attentive, and responsible Full-stack js
              developer.
            </h3>
          </div>
        </div>
      </section>

      <section className="relative block py-24 lg:pt-0 bg-green-300 dark:bg-green-600">
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="dark:text-green-900 text-green-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
    </>
  )
}
