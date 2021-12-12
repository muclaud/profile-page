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

      <section className="relative py-16 block bg-green-300 dark:bg-green-600 ">
        {render.map((post, i) => (
          <SinglePost key={i} post={post} session={session} />
        ))}
      </section>
      <section className="relative block py-24 lg:pt-0 bg-green-300 dark:bg-green-600 -mt-24">
        <DividerComponent classname="" />
      </section>
    </>
  )
}

export default BlogContent
