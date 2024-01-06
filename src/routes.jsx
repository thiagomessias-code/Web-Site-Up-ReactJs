import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CoursesHome from "./pages/CoursesHome";
import Team from "./pages/Team";
import Pricing from "./pages/Pricing";
import Blog from './pages/Blog'
import Contact from './pages/Contact'




 export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/courses" element={<CoursesHome/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
      
    </Routes>
    
  )
 }



