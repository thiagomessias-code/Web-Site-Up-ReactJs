import { ContainerOn } from "./style";
import Title from "../common/heading/Title";
import { online } from "../../Dummydata";

export default function OnlineCourses() {
  return (
    <>
      <ContainerOn>
      <div className='container'>
          <Title subtitle='COURSES' title='Browse Our Online Courses' />
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </ContainerOn>
    </>
  );
}
