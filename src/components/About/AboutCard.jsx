import { ContainerCard } from "./style";
import Img1 from "../../assets/images/about.webp";
import Title from "../common/heading/Title";
import { homeAbout } from "../../Dummydata";
import AWrapper from "./AWrapper";

export default function AboutCard() {
  return (
    <>
      <ContainerCard>
        <div className="container flexSB">
          <div className="left row">
            <img src={Img1} alt="" />
          </div>
          <div className="right row">
            <Title subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise'/>
            <div className="items">
                {homeAbout.map((val) =>(
                    <div className="item flexSB">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="text">
                            <h2>{val.title}</h2>
                            <p>{val.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </ContainerCard>
      <AWrapper/>
    </>
  );
}
