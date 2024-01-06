import { blog } from "../../Dummydata";
import { Container } from "./style";
import {FaCalendar, FaComments, FaUser} from 'react-icons/fa'

export default function BlogCard() {
  return (
    <>
    {blog.map((val) => (
        <Container>
            <div className="items shadow">
                <div className="img">
                    <img src={val.cover} alt="" />
                </div>
                <div className="text">
                    <div className="admin fleSB">
                        <span>
                            <i><FaUser/></i>
                            <label htmlFor="">{val.type}</label>
                        </span>
                        <span>
                            <i><FaCalendar/></i>
                            <label htmlFor=''>{val.date}</label>
                        </span>
                        <span>
                    <i>
                        <FaComments/>
                    </i>
                    <label htmlFor=''>{val.com}</label>
                  </span>
                    </div>
                    <h1>{val.title}</h1>
                <p>{val.desc}</p>
                </div>
            </div>
        </Container>
    ))}
      
    </>
  );
}
