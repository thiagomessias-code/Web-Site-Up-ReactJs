import { Link } from "react-router-dom";
import {NavG } from "./style";
import Head from "./Head";
import { useState } from "react";
import {
  FaBars, FaTimes
} from "react-icons/fa";

export default function Header() {
  const [click, setClick] = useState(false)
  return (
    
    <>
    <Head/>
       <NavG className="flexSB">
         
           <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
             <li>
               <Link to='/'>Home</Link>
             </li>
             <li>
               <Link to='/courses'>All Courses</Link>
             </li>
             <li>
               <Link to='/about'>About</Link>
             </li>
             <li>
               <Link to='/team'>Team</Link>
             </li>
             <li>
               <Link to='/pricing'>Pricing</Link>
             </li>
             <li>
               <Link to='/journal'>Journal</Link>
             </li>
             <li>
               <Link to='/contact'>Contact</Link>
             </li>
           </ul>
           <div className='start'>
             <div className='button'>GET CERTIFICATE</div>
           </div>
           <button className='toggle'  onClick={() => setClick(!click)}> {click ?
              <i><FaTimes/> </i> : <i><FaBars/></i>}
           </button>
         
              
       </NavG>
       </>
  );
}
