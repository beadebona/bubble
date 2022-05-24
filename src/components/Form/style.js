import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
    height: 200px;
    justify-content: space-around;
    max-width: 500px;

    span{
        font-weight: bold;
    }

    span:hover{
        text-decoration: underline;
    }
`

export default StyledForm