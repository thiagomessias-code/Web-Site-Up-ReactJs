import Back from "../common/Back/Back";

import Header from "../common/Header/Header";
import AboutCard from "./AboutCard";

export default function AboutComponents() {
  return (
    <div>
      <Header/>
      
      <Back title="About us"/>
      <AboutCard/>
    </div>
  )
}
