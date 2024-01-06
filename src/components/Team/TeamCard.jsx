
import { Container } from './style'
import { team } from '../../Dummydata'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";

export default function TeamCard() {
  return (
    
         <>
      {team.map((val) => (
        <Container>
          <div className='items shadow'>
            <div className='img'>
              <img src={val.cover}  alt='' />
              <div className='overlay'>
              <i >
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
            <div className='details'>
              <h2>{val.name}</h2>
              <p>{val.work}</p>
            </div>
          </div>
        </Container>
      ))}
    </>
 
  )
}
