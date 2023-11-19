import { HeroStY } from "./style";
import { FaLongArrowAltRight } from "react-icons/fa";
import Title from "../heading/Title";

export default function Hero() {
  return (
   
      <>
        <HeroStY>
          <section className="hero">
              <div className="container">
                <div className="row">
                <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis repudiandae temporibus adipisci sequi. Accusantium
                    placeat obcaecati voluptatum et quasi adipisci, eveniet quaerat
                    delectus facilis repudiandae officiis expedita dolorem in enim?
                  </p>
                  <div className="button">
                    <button className="primary-btn">
                      GET STARTED NOW{" "}
                      <i>
                        <FaLongArrowAltRight />
                      </i>
                    </button>
                    <button >
                      VIEW COURSE
                      <i>
                        <FaLongArrowAltRight />
                      </i>
                    </button>
                  </div>
                </div>
              </div>
              </section>
                    </HeroStY>
                    <div className="margin"></div>
      </>
        
     
  );
}
