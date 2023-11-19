import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
body {
    background: var(--whiteColor);
    -webkit-font-smoothing: antialiased;
}
body, input{
font-family: 'Roboto', sans-serif;
font-size: 16px;
background-color: #f8f8f8;
}
a {
    text-decoration: none;
    font-weight: 500;
}

li{
    list-style: none;
    cursor: pointer;
}

.section{
    padding: 4rem 0 2rem;
}

.container {
  max-width: 85%;
  margin: auto;
}
.flexSB {
  display: flex;
  justify-content: space-between;
}
.icon {
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.3);
  color: #1eb2a6;
  transition: 0.5s;
}
.icon:hover {
  cursor: pointer;
  background-color: #1eb2a6;
  color: #fff;
}
a {
  text-decoration: none;
}
li {
  list-style-type: none;
}
.row {
  width: 50%;
}
button {
  padding: 17px 30px;
  background-color: #fff;
  color: #1eb2a6;
  font-weight: 600;
  border: none;
  margin: 20px 10px 0 0;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0 24px 36px -11px rgb(0 0 0 / 20%);
  transition: 0.5s;
 
} &:hover{
    box-shadow: none;
  }
button i {
  margin-left: 20px;
}

.primary-btn {
  background-color: #1eb2a6;
  color: #fff;
}





#heading {
  text-align: center;
  padding: 40px 0;
  p {
  line-height: 30px;
  font-size: 18px;
}
}
#heading h3 {
  font-weight: 600;
  letter-spacing: 1px;
  color: #1eb2a6;
  text-transform: uppercase;
}
#heading h1 {
  font-size: 45px;
  margin: 20px 0;
  text-transform: capitalize;
}
h1 h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    padding: 1rem;
    font-weight: 700;
    color: var(--blackColor);
}
 p{
    font-size: 13px;
    color: var(--greyText);
    line-height: 22px;
 }

 
.margin {
  margin-top: 40.3%;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}
.flex {
  display: flex;
}
.grid2 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
}
.outline-btn {
  margin: 0;
  box-shadow: none;
  border: 2px solid #1eb2a6;
  width: 100%;
  transition: 0.5s;
}
.outline-btn:hover {
  background-color: #1eb2a6;
  color: #fff;
}
.grid3 {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
}
.padding {
  padding: 80px 0;
}
.shadow {
  box-shadow: 0 5px 25px -2px rgb(0 0 0 / 6%);
  background-color: #fff;
}
@media screen and (max-width: 768px) {
  .grid2,
  .grid3,
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .back {
    background-position: center;
    padding-top: 50%;
    height: 80vh;
  }
}


img, video{
    width: 100%;
    height: auto;

}

input{
     font-size: 100%;
     color: var(--greyText);
}


:root{
    --PrimaryColor: hsl(225, 50%, 48%);
    --SecondaryColor: hsl(180, 17%, 95%);
    --colorOne: hsl(15, 74%, 70%);
    --colorTwo: hsl(28, 100%, 82%);
    --HoverColor: hsl(225, 56%, 59%);
    --whiteColor: hsl(0, 0%, 100%);
    --blackColor: hsl(0, 0%, 12%);
    --textColor: hsl(240, 1%, 48%);
    --borderColor: hsl(0, 0%, 83%);
    --whiteColorDeam: hsl(0, 0%, 93%);
    --greyBg: hsl(0, 0%, 96%);
    --greyText: rgb(145, 145, 145);
    --inputColor: hsl(330, 12%, 97%);
    --boxShadow: box-shadow: rgb(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.05) 0px 4px 6px -2px;
    --transition: .4s ease-in-out;
    

}
`