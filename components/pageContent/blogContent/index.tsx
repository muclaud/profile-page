import React from "react"
import HeroSection from "components/heroSection"
import DividerComponent from "components/divider"
import SinglePost from "components/singlePost"
import type { Session } from "next-auth"
import { PostType } from "types/post"

interface BlogProps {
  posts: PostType[]
  session: Session | null
}

const BlogContent = ({ posts, session }: BlogProps): JSX.Element => {
  const render = posts.splice(0, 5)

  return (
    <>
      <HeroSection herotext={"My blog"} />

      <section className="relative  bg-green-300 dark:bg-green-600 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap"></div>
        </div>
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">In progress...</h2>
          </div>
        </div>
      </section>

      <section className="relative block py-12 lg:py-24 lg:pt-0 bg-green-300 dark:bg-green-600">
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
      {/* <section className="relative py-16 block bg-green-300 dark:bg-green-600 ">
        {render.map((post, i) => (
          <SinglePost key={i} post={post} session={session} />
        ))}
      </section>
      <section className="relative block py-24 lg:pt-0 bg-green-300 dark:bg-green-600 -mt-24">
        <DividerComponent classname="" />
      </section> */}
    </>
  )
}

export default BlogContent
