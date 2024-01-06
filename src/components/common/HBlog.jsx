import { blog } from "../../Dummydata";
import Title from "./heading/Title";
import { Container } from "../Blog/style";
import {FaCalendar, FaComments, FaUser} from "react-icons/fa"
export default function HBlog() {
  return (
    <>
      <section className="">
        <div className="container">
          <Title subtitle="our blog" title="recent from blog" />

          <div className="grid2">
            {blog.slice(0, 3).map((val) => (
              <Container>
                <div className="items shadow">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <div className="admin fleSB">
                      <span>
                        <i>
                          <FaUser />
                        </i>
                        <label htmlFor="">{val.type}</label>
                      </span>
                      <span>
                        <i>
                          <FaCalendar />
                        </i>
                        <label htmlFor="">{val.date}</label>
                      </span>
                      <span>
                        <i>
                          <FaComments />
                        </i>
                        <label htmlFor="">{val.com}</label>
                      </span>
                    </div>
                    <h1>{val.title}</h1>
                    <p>{val.desc}</p>
                  </div>
                </div>
              </Container>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
