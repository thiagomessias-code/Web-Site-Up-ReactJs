import styled from "styled-components";

export const Container = styled.section`
img{
    width: 100%;
}
.text{
    padding: 40px 30px;
    h1{
        font-weight: 500;
        font-size: 22px;
        line-height: 30px;
        margin: 20px 0;
        transition: 0ms.5;
        &:hover{
color: #1eb2a6;
cursor: pointer;
        }
    }
    span{
        text-transform: uppercase;
        font-weight: 500;
        color: #1eb2a6;
        label{
            margin: 10px;
            color: grey;
            font-size: 14px;
        }
        &:nth-child(1) label{
                color: #1eb2a6;
            }
    }
    p{
        color: grey;
    }
}


`;