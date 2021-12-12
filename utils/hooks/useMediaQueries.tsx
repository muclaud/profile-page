import useMounted from "./useMounted"

function useMediaQueries() {
  const isMounted = useMounted()

  return {
    isMediumOrSmallScreen:
      isMounted && window.innerWidth < 1024 && window.innerWidth > 768,
    isMobileScreen: isMounted && window.innerWidth <= 768,
  }
}

export default useMediaQueries
