import React from "react"
// import axios from "axios"
import { GetServerSideProps } from "next"
import type { Session } from "next-auth"
import { useSession, getSession } from "next-auth/client"
import Layout from "components/layout"
import BlogContent from "components/pageContent/blogContent"
import useMounted from "utils/hooks/useMounted"
// import { PostType } from "types/post"

// type Props = {
//   posts: PostType[]
// }

const BlogPage = (): JSX.Element => {
  const [session, loading] = useSession()
  const isMounted = useMounted()
  const posts = [
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
    },
    {
      userId: 1,
      id: 6,
      title: "dolorem eum magni eos aperiam quia",
      body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae",
    },
    {
      userId: 1,
      id: 7,
      title: "magnam facilis autem",
      body: "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas",
    },
  ]

  if (isMounted && loading) return <div>Loading</div>

  return (
    <Layout>
      <BlogContent posts={posts} session={session} />
    </Layout>
  )
}

export default BlogPage

export const getServerSideProps: GetServerSideProps<{
  session: Session | null
}> = async (context) => {
  // const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return {
    props: {
      session: await getSession(context),
      // posts: data,
    },
  }
}
