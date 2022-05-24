import styled from "styled-components";

const StyledHeader = styled.header`
    border-bottom: 2px solid var(--primary);
    color: var(--primary);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100vw;
    background: var(--neutral);

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        max-width: 65rem;
        margin: auto;
        height: inherit;
    }

    h1{
        cursor: pointer;
        font-weight: bold;
        margin: 1rem;
    }
    section.container{
        position: relative;
        width: 320px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .searchBtn{
        border: var(--primary) solid 2.4px;
        border-radius: 2rem;
        margin: 0.5rem;
    }

    input{
        border: none;
        height: max-content;
        background: none;
        outline: none;
        width: 0;
        padding: 0;
        transition: 0.8s ease-in-out;
    }
    .searchBtn:hover input, input:focus {
        width: 150px;
        padding: 1px 2px;
    }

    svg{
        color: var(--primary);
    }


    @media (min-width: 450px){
        div{
            flex-direction: row;
            justify-content: space-between;
        }

        section.container{
            justify-content: flex-end;
        }
    }
`

export default StyledHeader