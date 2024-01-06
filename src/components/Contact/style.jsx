import styled from "styled-components";

 export const Container = styled.div`
 iframe{
    width: 100%;
 height: 100%;
 border: none;
 }
 
 .right{
    padding: 50px;
    h1{
        font-size: 30px;
        font-weight: 400;
    }
    p{
        font-size: 17px;
        margin-top: 10px;
    }
 }
textarea, input{
    width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  outline: none;
  border-radius: 1rem;
  border: 1px solid grey;
  &:nth-child(1){
    margin-right: 10px;
  }
}
h3{
    margin-top: 20px;
    font-weight: 500;
    margin-bottom: 10px;
}
span{
    color: #1eb2a6;
    font-weight: 600;
    font-size: 1rem;
    word-spacing: 5px;

}
@media screen and (max-width: 768px) {
   .container {
    flex-direction: column;
  }
  iframe {
    height: 50vh;
  }
  .row {
    width: 100%;
  }
}

 `;