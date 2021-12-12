import React, { useState, Fragment } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { signIn, signOut, useSession } from "next-auth/client"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import ThemeSwitcher from "./themeSwitcher"

const Header = (): JSX.Element => {
  const [session] = useSession()
  const [open, setOpen] = useState<boolean>(false)
  const { asPath } = useRouter()

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
  }
  const navigation = [
    { name: "About", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Technology", href: "/technology" },
    { name: "Projects", href: "/projects" },
  ]
  return (
    <Disclosure as="nav" className="absolute top-0 z-50 w-full">
      <>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  src={"/img/react-pink-heart.svg"}
                  width={35}
                  height={35}
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <Link href={item.href} key={item.name}>
                      <a
                        className={classNames(
                          item.href === asPath
                            ? "bg-green-300  dark:bg-green-800 "
                            : "dark:hover:bg-green-700 dark:hover:text-green-100 hover:bg-green-200 hover:text-green-800",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.href === asPath ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="bg-green-800 dark:bg-green-200 dark:text-black text-white dark:hover:text-green-100 hover:text-white dark:hover:bg-green-700 hover:bg-green-400 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white">
                  <ThemeSwitcher />
                </div>
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    {!session && (
                      <>
                        <Link key={"sign in"} href={`/api/auth/signin`}>
                          <a
                            className={
                              "dark:hover:bg-green-700 dark:hover:text-white hover:bg-green-200 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium"
                            }
                            onClick={(e) => {
                              e.preventDefault()
                              signIn()
                            }}
                          >
                            Sign in
                          </a>
                        </Link>
                      </>
                    )}
                    {session?.user && (
                      <>
                        <Menu.Button className="max-w-xs dark:bg-green-800 bg-green-200 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={session?.user?.image}
                            alt=""
                          />
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item key={"sign out"}>
                              <Link href={`/api/auth/signin`}>
                                <a
                                  className="block px-4 py-2 text-sm text-green-700"
                                  onClick={(e) => {
                                    e.preventDefault()
                                    signOut()
                                  }}
                                >
                                  Sign out
                                </a>
                              </Link>
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </div>
                </Menu>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <Disclosure.Button className="bg-green-300 dark:bg-green-700 inline-flex items-center justify-center p-2 rounded-md  dark:hover:text-green-800 hover:text-white dark:hover:bg-green-700 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon
                    className="block h-6 w-6"
                    onClick={() => setOpen(false)}
                  />
                ) : (
                  <MenuIcon
                    className="block h-6 w-6"
                    onClick={() => setOpen(true)}
                  />
                )}
              </Disclosure.Button>
            </div>
          </div>
        </div>
        <Disclosure.Panel className="md:hidden dark:bg-green-900 bg-green-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a
                  className={classNames(
                    item.href === asPath
                      ? "bg-green-300 dark:bg-green-900 "
                      : " dark:hover:bg-green-700 dark:hover:text-white hover:bg-green-200 hover:text-green-800",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.href === asPath ? "page" : undefined}
                >
                  {item.name}
                </a>
              </Link>
            ))}
            <div className="pb-3 ml-2 w-7 rounded-full block rounded-md">
              <div className="bg-green-800 dark:bg-green-200 dark:text-black text-white p-1 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white">
                <ThemeSwitcher />
              </div>
            </div>
          </div>
          <div className="pt-4 pb-3 border-t border-green-700">
            {!session && (
              <>
                <Link key={"sign in"} href={`/api/auth/signin`}>
                  <a
                    key={"sign in"}
                    href={`/api/auth/signin`}
                    className={
                      " dark:hover:bg-green-700 dark:hover:text-white hover:bg-green-200 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium"
                    }
                    onClick={(e) => {
                      e.preventDefault()
                      signIn()
                    }}
                  >
                    Sign in
                  </a>
                </Link>
              </>
            )}
            {session?.user && (
              <>
                <div className="pt-4 pb-3">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={session?.user?.image}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none">
                        {session?.user?.name}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    <Link key={"sign out"} href={`/api/auth/signin`}>
                      <a
                        key={"sign out"}
                        href={`/api/auth/signin`}
                        onClick={(e) => {
                          e.preventDefault()
                          signOut()
                        }}
                        className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-green-700"
                      >
                        Sign out
                      </a>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </Disclosure.Panel>
      </>
    </Disclosure>
  )
}

export default Header
