import styled from "styled-components";


export const Form = styled.form`
    max-width: 500px;
    width: 80%;
    margin: auto;

    section{
        display: flex;
    }

    section div{
        width: 70%;
    }
    
    span{
        font-weight: bold;
    }

    span:hover{
        text-decoration: underline;
    }

    section div + div{
        width: 40%;
    }
    @media (min-width: 768px) {
        width: 50%;
        margin: auto;
    }
`