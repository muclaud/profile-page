import React from "react"

interface HeroSectionProps {
  herotext: string
}

const HeroSection = ({ herotext }: HeroSectionProps): JSX.Element => {
  return (
    <>
      <div className="relative pt-16 pb-48 flex content-center items-center justify-center min-h-screen-50">
        <div className="absolute top-0 w-full h-full">
          <span id="blackOverlay" className="w-full h-full absolute"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <h1 className="font-semibold text-5xl">{herotext}</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="relative pt-24 lg:pt-0 pb-20 bg-green-300 dark:bg-green-600 -mt-24">
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
      </section>
    </>
  )
}

export default HeroSection
