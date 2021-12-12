import React from "react"

export default function Footer(): JSX.Element {
  return (
    <>
      <footer className="relative pt-8 pb-6 dark:bg-green-900 bg-green-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let`s keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-green-600">
                Find me on any of these platforms.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <a href="https://www.facebook.com/profile.php?id=100008347620286">
                  <button
                    className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/taras-tunka-56b87b1b3/">
                  <button
                    className="bg-white text-blue-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-linkedin"></i>
                  </button>
                </a>
                <a href="https://github.com/muclaud">
                  <button
                    className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-github"></i>
                  </button>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-green-500 text-sm font-semibold mb-2">
                    Pages Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-green-600 hover:text-green-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-green-600 hover:text-green-800 font-semibold block pb-2 text-sm"
                        href="/blog"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-green-600 hover:text-green-800 font-semibold block pb-2 text-sm"
                        href="/technology"
                      >
                        Technology
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-green-600 hover:text-green-800 font-semibold block pb-2 text-sm"
                        href="/projects"
                      >
                        Projects
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-green-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-green-500 font-semibold py-1">
                © Taras Tunka {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
