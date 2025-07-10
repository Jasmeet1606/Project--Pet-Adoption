import { BrowserRouter, Route, Routes } from "react-router-dom"
 import Home from "./components/pages/Home"
 import About from "./components/pages/About"
import Blog from "./components/pages/Blog"
import Contact from "./components/pages/Contact"
import Error from "./components/pages/Error"
import Layout from "./Components/layout/layout"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Services from "./Components/Pages/Services"
function App() {
  return (
   
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="contact" element={<Contact/>}/>
           <Route path="services" element={<Services/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
          </Route>
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
