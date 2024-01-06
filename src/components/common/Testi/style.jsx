import styled from "styled-components";

export const Container = styled.section`
  .items {
    padding: 30px;
    transition: 0.5s;
    .img {
      position: relative;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      i {
          position: absolute;
          bottom: 0;
          left: 60px;
          background-color: #1eb2a6;
          color: #fff;
        }
    }
    .name{
margin: 25px;
h2{
    font-size: 20px;
    margin-bottom: 5px;
  
    
}
span{
    color: #1eb2a6;
}
p{
    margin-top: 20px;
    color: grey;
    transition: 0.5s;
}

  }
  &:hover {
background-color: #1eb2a6;
color: #fff;
cursor: pointer;
}
&:hover span {
color: #fff;
}
&:hover p {
color: #fff;
}
&:hover i{
background-color: #fff;
color: #1eb2a6;
}
&:hover h2 {
color: #fff;
}
  }
  
  
`;
