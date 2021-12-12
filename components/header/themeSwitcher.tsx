import React from "react"
import { useTheme } from "next-themes"
import useMounted from "utils/hooks/useMounted"
import SunIcon from "../icons/sun"
import MoonIcon from "../icons/moon"

interface UseThemeProps {
  theme?: string
  setTheme?: (theme: string) => void
}

export default function ThemeSwitcher(): JSX.Element {
  const { theme, setTheme }: UseThemeProps = useTheme()
  const isMounted = useMounted()

  const toggleTheme = React.useCallback(() => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }, [setTheme, theme])

  return (
    <>
      {isMounted && theme === "light" ? (
        <button onClick={toggleTheme} className="flex">
          <MoonIcon className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      ) : (
        <button onClick={toggleTheme} className="flex">
          <SunIcon className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      )}
    </>
  )
}
