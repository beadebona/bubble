import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .column{
        flex-direction: column;
    }

    div{
        display: flex;
        justify-content: space-between;
        width: 310px;
        
    }
    section{
        width: 100%;
    }
`

export default Container