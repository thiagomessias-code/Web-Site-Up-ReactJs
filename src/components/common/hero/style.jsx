import styled from "styled-components";
import Img from "../../../assets/images/bg.webp";

export const HeroStY = styled.section`

  
  .hero {
    background-image: url(${Img});
    background-size: cover;
    background-attachment: fixed;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    padding-top: 15%;
    padding-right: 50px;
    color: #fff;
  }

 
@media screen and (max-width: 768px) {
  padding-top: 20%;
  .margin {
    height: 40vh;
  }
  .hero {
    background-position: right;
    padding-top: 50%;
    height: 80vh;
  }
  .hero .row {
    width: 100%;
  }

    
  }

`;
