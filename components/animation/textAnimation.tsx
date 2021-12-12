import * as React from "react"

import TextTransition, { presets } from "react-text-transition"

const WORDS = [
  "Reactjs",
  "Nextjs",
  "Nestjs",
  "Graphql",
  "JavaScript",
  "TypeScript",
  "CSS",
  "Nodejs",
  "Redux",
  "Git",
  "HTML",
]
const BGCOLORS = [
  "bg-red-100 ",
  "bg-indigo-100",
  "bg-yellow-100",
  "bg-blue-100",
  "bg-purple-100",
  "bg-red-100 ",
  "bg-indigo-100",
  "bg-yellow-100",
  "bg-blue-100",
  "bg-indigo-100",
  "bg-purple-100",
]

const TEXTCOLORS = [
  "text-red-600 ",
  "text-indigo-600",
  "text-yellow-600",
  "text-blue-600",
  "text-purple-600",
  "text-red-600 ",
  "text-indigo-600",
  "text-yellow-600",
  "text-blue-600",
  "text-indigo-600",
  "text-purple-600",
]

const BORDERCOLORS = [
  "border-red-700 ",
  "border-indigo-700",
  "border-yellow-700",
  "border-blue-700",
  "border-purple-700",
  "border-red-700 ",
  "border-indigo-700",
  "border-yellow-700",
  "border-blue-700",
  "border-purple-700",
  "border-indigo-700",
]

const TextAnimation = (): JSX.Element => {
  const [index, setIndex] = React.useState(0)
  const [colorClass, setColorClass] = React.useState(
    "text-green-900 dark:text-green-200 border-green-700 rounded-lg "
  )

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((i) => i + 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  React.useEffect(() => {
    setColorClass(
      `${BGCOLORS[index % WORDS.length]} ${TEXTCOLORS[index % WORDS.length]} ${
        BORDERCOLORS[index % WORDS.length]
      } rounded-lg`
    )
  }, [index])

  return (
    <div>
      <h1 className="font-semibold text-5xl">
        <span className="relative block">
          <TextTransition
            inline
            text={WORDS[index % WORDS.length]}
            className={colorClass}
            springConfig={presets.wobbly}
          />
          &nbsp;is awesome{" "}
        </span>
      </h1>
    </div>
  )
}
export default TextAnimation
