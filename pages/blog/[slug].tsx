import { GetServerSideProps } from "next"
import axios from "axios"
import Layout from "components/layout"
import HeroSection from "components/heroSection"
import DividerComponent from "components/divider"
import { PostType } from "types/post"

type Props = {
  post: PostType
}

const Post = ({ post }: Props): JSX.Element => {
  const { title, body } = post

  return (
    <Layout>
      <>
        <HeroSection herotext={title} />

        <section className="relative py-16 block bg-green-300 dark:bg-green-600 ">
          <div className="container mx-auto px-4 lg:pt-24 pb-24 ">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-48 bg-green-200 dark:bg-green-900">
              <div className="px-6 ">
                <div>{body}</div>
                <div>{body}</div>
                <div>{body}</div>
                <div>{body}</div>
                <div>{body}</div>
                <div>{body}</div>
                <div>{body}</div>
                <div>{body}</div>
                <div>{body}</div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-green-300 dark:bg-green-600 -mt-24">
          <DividerComponent classname="" />
        </section>
      </>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: Params) => {
  const id = params.slug
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )

  return {
    props: {
      post: data,
    },
  }
}
