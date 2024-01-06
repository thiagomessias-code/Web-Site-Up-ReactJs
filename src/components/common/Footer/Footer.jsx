import {FaPaperPlane, FaFacebookF,FaTwitter, FaInstagram} from 'react-icons/fa'
import { Container } from './style'
import { blog } from '../../../Dummydata'
import {FaCalendar,  FaUser} from 'react-icons/fa'

export default function Footer() {
  return (
    <>
    <Container>
        <section className="newletter">
            <div className="container flexSB">
                <div className="left row">
                    <h1>
                    Newsletter - Stay tune and get the latest update
                    </h1>
                    <span>Far far away, behind the word mountains</span>
                </div>
                <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i><FaPaperPlane/></i>
          </div>
            </div>
        </section>
        <footer>
            <div className="container padding">
                <div className="box logo">
                <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <i className='icon'><FaFacebookF/></i>
            <i className=' icon'><FaTwitter/></i>
            <i className='icon'><FaInstagram/></i>
                </div>
                <div className="box link">
                    <h3>Explore</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Courses</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                  <i><FaUser/></i>
                            <label htmlFor="">{val.type}</label>
                        </span>
                        <span>
                            <i><FaCalendar/></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +2 392 3929 210
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
        
        </footer>
    </Container>
    </>
  )
}
