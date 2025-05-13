import Nav from "./layout/nav"

import Contact from "./layout/Contact"
import Footer from "./layout/Footer"

import Pages from "./pages"
import { useSelector } from "react-redux"

import { useDispatch } from "react-redux"
import { rdxLogin } from "./redux/userSlice"

export default function App() {

  const dispatch = useDispatch();

  const { rdxDark } = useSelector(store => store.settingSlice)




  // Get user data if exists from localstorage
  const user = localStorage.user;

  console.log('App -> user', user)

  if (user) dispatch(rdxLogin(JSON.parse(user)));


  return (
    <div className={`${rdxDark ? "dark" : ''}`}>
      <Nav />

      <Pages />

      <Contact />

      <Footer />
    </div>
  )
}
