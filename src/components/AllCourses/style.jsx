import styled from "styled-components";

export const Container = styled.section`
  padding: 50px 0;

  .items {
    background-color: #fff;
    padding: 30px;
    text-align: center;
  }
  .img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #1eb2a6;
    padding: 15px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .text {
    margin-left: 15px;
    text-align: left;
    h1 {
      font-size: 30px;
      font-weight: 500;
      line-height: 45px;
    }
  }
  .rate {
    margin: 20px 0;
    color: #1eb2a6;
    i {
      font-size: 13px;
      margin-right: 5px;
    }
  }
  .details .dimg img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .details .box {
    display: flex;
    align-items: center;
    color: grey;
  }
  .details span {
    color: #1eb2a6;
    font-weight: 500;
    font-size: 14px;
  }
  .price {
    margin: 30px 0;
    background-color: #f8f8f8;
    padding: 10px;
    h3 {
      font-weight: 500;
      color: #1eb2a6;
    }
  }
  @media screen and (max-width: 768px) {
 .container{
justify-content: center;
 }
}
`;
export const ContainerOn = styled.section`
 text-align: center;
  .box {
  box-shadow: 0 5px 25px -2px rgb(0 0 0 /6%);
  background-color: #fff;
  padding: 30px 20px;
  transition: 0.5s;
  
  
&:hover{
    background-color: #1eb2a6;
  border-radius: 5px;
  cursor: pointer;
}
}

.img {
  width: 80px;
  height: 80px;
  margin: auto;
  position: relative;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
h1 {
  font-weight: 500;
  font-size: 20px;
  margin: 20px 0;
  line-height: 30px;
}
span {
  background-color: #f8f8f8;
  padding: 5px 20px;
  font-weight: 500;
  font-size: 15px;
  color: #1eb2a6;
  border-radius: 5px;
}
.show {
  opacity: 0;
}
.box:hover .show {
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
}
.box:hover h1 {
  color: #fff;
}

`;
