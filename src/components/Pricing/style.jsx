import styled from "styled-components";

export const Container = styled.section`
  .price {
    .items {
      padding: 40px;
      text-align: center;
      h1 {
        font-size: 50px;
        margin: 20px 0;
        color: #1eb2a6;
        span {
          font-size: 20px;
          margin-right: 5px;
          color: #000;
        }
      }
    }
  }

  .faq {
    .container {
      max-width: 70%;
      border-radius: 5px;
      .box {
        background-color: #fff;
        margin-bottom: 20px;
      }
      button {
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 15px 20px;
        &:hover {
          background-color: #1eb2a6;
          color: #fff;
        }
      }
      h2 {
        font-weight: 500;
        i{
        padding-left: 40px;
        }
      }
      p {
        padding: 20px;
      }
    }
  }
`;
