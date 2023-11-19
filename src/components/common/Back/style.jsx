import styled from "styled-components";
import ImgBack from '../../../assets/images/back.webp'

export const Container = styled.section`

  background-image: url(${ImgBack});
  background-size: cover;
  background-attachment: fixed;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  padding-top: 30%;
  padding-right: 50px;
  color: #fff;
  text-align: center;

 h1 {
  font-size: 100px;
  font-weight: 400;
}
 h2 {
  font-weight: 500;
  font-size: 17px;
  text-transform: uppercase;
}
.margin{
    margin-top: 40.3%;
}
@media screen and (max-width: 768px) {
 background-position: center;
 padding-top: 50%;
 height: 80vm;
}
`;