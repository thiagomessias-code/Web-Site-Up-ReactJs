import styled from "styled-components";
import ImgAwRapper from "../../assets/images/awrapper.webp";
export const ContainerCard = styled.section`
  height: auto;

  #heading {
    text-align: left;
    padding: 0;
  }
  .left img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .right {
    padding: 80px 50px;
  }
  .items {
    margin-top: 50px;
  }
  .item {
    background-color: #fff;
    margin-top: 30px;
    padding: 20px;
    transition: 0.5s;
    h2 {
      font-size: 20px;
      margin-bottom: 15px;
    }
    p {
      color: #999999;
      &:hover {
        color: #fff;
      }
    }

    &:hover {
      background-color: #1eb2a6;
      color: #fff;
      cursor: pointer;
      box-shadow: 0 5px 25px -2px rgb(0 0 0 / 6%);
    }
  }
  .img {
    width: 200px;
  }
  img {
    width: 70px;
    height: 70px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 20%;
    .container {
      flex-direction: column-reverse;
    }
    .row {
      width: 100%;
    }
  }
`;

export const ContainerW = styled.section`
  /*----------awrapper------------*/

  background-image: url(${ImgAwRapper});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 30vh;
  color: #fff;

  .box {
    padding: 70px 0;
  }
  img {
    margin-right: 30px;
  }
  h1 {
    font-size: 50px;
  }
  h3 {
    font-size: 20px;
    font-weight: 500;
  }
  @media screen and (max-width: 768px) {
   
 
    height: 50vh;
 
}
  /*----------awrapper------------*/
`;
