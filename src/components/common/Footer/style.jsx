import styled from "styled-components";

export const Container = styled.div`
.newletter {
  background-color: #1eb2a6;
  padding: 50px 0;
  color: #fff;
  .right, .left{
    padding: 50px;
  }
  h1{
    color: #fff;
    font-size: 30px;
    font-weight: 500;
    margin: 15px;
  }
  .right{
display: flex;
justify-content: space-between;
align-items: center;
  }
  input{
    width: 100%;
    padding: 20px;
    border: none;
    outline: none;
    height: 30px;
  }
  i{
    padding: 12px;
    color: #1eb2a6;
  background-color: #fff;
  }
}
footer {
  background-color: #eeeeee;
  .container{
    display: grid;
    grid-template-columns: 3fr 2fr 2fr 4fr 3fr;
    grid-gap: 30px;
    @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
}
  }
  .logo{
    span {
  color: #1eb2a6;
  font-size: 14px;
}
p {
  color: grey;
  margin: 30px 0 15px 0;
}
.icon {
  background-color: #1eb2a6;
  color: white;
  margin-right: 10px;
}
}
h3 {
  margin-bottom: 40px;
  font-weight: 500;
}
li {
  margin-bottom: 20px;
  &::before {
  content: "⟶";
  color: #1eb2a6;
  margin-right: 5px;
}
}
.items {
  margin-bottom: 30px;
  img {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin-right: 10px;
  object-fit: cover;
}
span, i {
    font-size: 12px;
  color: #1eb2a6;
  margin-right: 5px;
  text-transform: capitalize;
}
}
h4 {
  font-weight: 400;
  margin-top: 5px;
}
.last {
 li {display: flex;
  margin-bottom: 50px;}
}
i{
    width: 60px;
  font-size: 20px;
  color: #1eb2a6; 
}
.legal {
  text-align: center;
  padding: 50px 0;
  color: grey;
  background-color: #e9e9e9;
  p{
    font-size: 15px;
  }
  i{
    color: #1eb2a6;
  }
}
}


`;