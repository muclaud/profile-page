import Header from "./header/header"
import Footer from "./footer/footer"
import MainWrapper from "./pageContent/mainWrapper"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  )
}
export default Layout
