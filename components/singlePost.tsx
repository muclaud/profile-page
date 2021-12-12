import React from "react"
import Link from "next/link"
import { signIn } from "next-auth/client"
import { PostType } from "types/post"
import type { Session } from "next-auth"

interface SPProps {
  post: PostType
  session: Session | null
}

const SinglePost = ({ post, session }: SPProps): JSX.Element => {
  const { id, title, body } = post

  return (
    <div className="container mx-auto px-4 lg:pt-24 pb-24">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-48 bg-green-200 dark:bg-green-900">
        <div className="px-6 ">
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal mb-2 dark:text-gray-200 text-gray-800 mb-2">
              {title}
            </h3>
          </div>
          <div className="mt-10 py-10 border-t border-gray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed dark:text-gray-200 text-gray-800">
                  {body}
                </p>
                {session ? (
                  <Link href={`/blog/${id}`}>
                    <span className="font-bold dark:text-green-200 text-blue-600 bg-green-300 dark:bg-green-600 dark:hover:bg-green-500 dark:hover:text-green-100 hover:bg-green-400 hover:text-blue-800 px-3 py-2 rounded-md cursor-pointer">
                      Show more
                    </span>
                  </Link>
                ) : (
                  <Link key={"sign in"} href={`/api/auth/signin`}>
                    <a
                      className={
                        "dark:text-green-200 text-blue-600 bg-green-300 dark:bg-green-600 dark:hover:bg-green-500 dark:hover:text-green-100 hover:bg-green-400 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium"
                      }
                      onClick={(e) => {
                        e.preventDefault()
                        signIn()
                      }}
                    >
                      You must be signed in to view this page
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePost
