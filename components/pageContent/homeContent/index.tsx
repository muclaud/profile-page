import React from "react"
import TextAnimation from "components/animation/textAnimation"
import CardWithIcon from "components/pageContent/homeContent/cardWithIcon"

const HomeContent = (): JSX.Element => {
  return (
    <>
      <div className="relative pt-16 flex content-center items-center justify-center min-h-screen-75">
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <h1 className="font-semibold text-5xl">
                <TextAnimation />{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section className="relative lg:pt-0 pb-20 bg-green-300 dark:bg-green-600 -mt-24">
        <div
          className="bottom-auto -top-16 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
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
              className="text-green-300 dark:text-green-600 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center dark:text-green-900">
              <CardWithIcon
                bgColor="bg-white"
                bgIconColor="bg-red-400"
                iconName="fa-award"
                cardTitle="Placeholder"
                textColor="text-green-500"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text."
              />
            </div>

            <div className="w-full md:w-4/12 px-4 text-center dark:text-green-900">
              <CardWithIcon
                bgColor="bg-white"
                bgIconColor="bg-blue-400"
                iconName="fa-retweet"
                cardTitle="Placeholder"
                textColor="text-green-500"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
              />
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center dark:text-green-900">
              <CardWithIcon
                bgColor="bg-white"
                bgIconColor="bg-green-400"
                iconName="fa-fingerprint"
                cardTitle="Placeholder"
                textColor="text-green-500"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 relative block bg-green-300 dark:bg-green-600">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
                Some text...
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-green-800">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-green-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-medal text-xl"></i>
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">First</h6>
              <p className="mt-2 mb-4 text-green-800">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-green-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-poll text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">Second</h5>
              <p className="mt-2 mb-4 text-green-800">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-green-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">Third</h5>
              <p className="mt-2 mb-4 text-green-800">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text.
              </p>
            </div>
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

export default HomeContent
