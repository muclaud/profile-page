import React from "react"
import axios from "axios"
import { GetServerSideProps } from "next"
import type { Session } from "next-auth"
import { useSession, getSession } from "next-auth/client"
import Layout from "components/layout"
import BlogContent from "components/pageContent/blogContent"
import useMounted from "utils/hooks/useMounted"
import { PostType } from "types/post"

type Props = {
  posts: PostType[]
}

const BlogPage = ({ posts }: Props): JSX.Element => {
  const [session, loading] = useSession()
  const isMounted = useMounted()

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
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return {
    props: {
      session: await getSession(context),
      posts: data,
    },
  }
}
