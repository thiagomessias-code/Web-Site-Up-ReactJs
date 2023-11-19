
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillTwitterSquare,
    AiFillYoutube,
  } from "react-icons/ai";

  import { HeadC} from "./style";


export default function Head() {
  return (
    <HeadC>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className='social'>
          <i className="icon">
            <AiFillFacebook />
          </i>
          <i className="icon">
            <AiFillInstagram />
          </i>
          <i className="icon">
            <AiFillTwitterSquare />
          </i>
          <i className="icon">
            <AiFillYoutube />
          </i>
          </div>
        </div>
      </HeadC>
  )
}
