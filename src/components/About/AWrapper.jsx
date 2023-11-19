import { awrapper } from "../../Dummydata";
import { ContainerW } from "./style";

export default function AWrapper() {
  return (
    <>
      <ContainerW>
      <div className='container grid'>
          {awrapper.map((val) => {
            return (
              <div className='box flex'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </ContainerW>
    </>
  );
}
