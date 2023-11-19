import styled from "styled-components";

export const HeadC = styled.div`
/*--------head------------*/
max-width: 85%;
margin: auto;
  padding: 20px 0;
  color: #fff;
  

.logo h1 {
  font-size: 35px;
  font-weight: 900;
}

/*--------head------------*/
`;

export const NavG = styled.div`

  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 30px;


  display: flex !important;
  ul{
    padding: 30px 20px;
      li {
      margin-right: 40px;
      a {
        color: #fff;
      font-weight: 500;
      transition: 0.5s;
      &:hover{
        color: #1eb2a6;
    }
      }
    }
    
}


.start {
  background-color: #1eb2a6;
  padding: 30px 70px;
  color: #fff;
  clip-path: polygon(10% 0%, 100% 0, 100% 100%, 0% 100%);
}
.toggle {
  display: none;
}
@media screen and (max-width: 768px) {
  .start {
    clip-path: none;
  }
  
    margin: 0;
    background-color: #1eb2a6;
    position: relative;
  
  .flexSB {
    display: none;
  }
  li {
    margin-bottom: 20px;
  }
  .toggle {
    display: block;
    background: none;
    color: #fff;
    font-size: 30px;
    position: absolute;
    right: 0;
    top: -20px;
  }
  .mobile-nav {
    position: absolute;
    top: 7vh;
    left: 0;
    width: 100%;
    background-color: #1eb2a6;
  }
  button{
    border: none;
  }
}
`