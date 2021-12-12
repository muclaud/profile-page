import { Provider } from "next-auth/client"
import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import "assets/styles/styles.css"
import "tailwindcss/tailwind.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider
      options={{
        clientMaxAge: 0,
        keepAlive: 0,
      }}
      session={pageProps.session}
    >
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
