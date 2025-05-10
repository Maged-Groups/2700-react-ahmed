import Nav from "./layout/nav"

import Contact from "./layout/Contact"
import Footer from "./layout/Footer"

import Pages from "./pages"
import { useSelector } from "react-redux"

export default function App() {

  const { rdxDark } = useSelector(store => store.settingSlice)

  return (
    <div className={`${rdxDark ? "dark" : ''}`}>
      <Nav />

      <Pages />

      <Contact />

      <Footer />
    </div>
  )
}
