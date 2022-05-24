import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding-bottom: 2rem;
    img{
        max-width:300px ;
        max-height:300px;
    }
    .off{
        text-decoration: line-through;
    }
    section{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .bottom{
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
`