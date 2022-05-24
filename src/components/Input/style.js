import styled from "styled-components";

export const InputStyled = styled.div`
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    border-bottom: 2px solid var(--primary-focus);
    /* width: 100%; */
    height: 32px;
    margin: 5px;
    padding: 0 5px;
    margin-top: 18px;
    position: relative;
    transition: 0.8s;
    cursor: ${(props)=>props.autoComplete? "not-allowed": "auto"  } ;
    box-sizing: border-box;

    input{
        background: none;
        /* position: absolute; */
        padding: 0 5px;
        border: none;
        height: 30px;
        outline: none;
        width: 80%;
        font-size: 16px;
        color: var(--primary);
        cursor: ${(props)=>props.autoComplete? "not-allowed": "auto"  } ;
    }
    label{
        color: var(--primary-focus);
        position: absolute;
        left: 25px;
        top: 3px;
        transition: 0.8s;
        top: ${(props)=>props.valid? "-15px": "3px"  };
        left: 5px;
        font-size: ${(props)=>props.valid? "12px": "16px"};
        cursor: ${(props)=>props.autoComplete? "not-allowed": "auto"  } ;
    }

    &:hover, &:focus-within{
        border-bottom: 2px solid var(--primary);
        svg{
            color: var(--primary);
        }
        label{
            color: var(--primary);
        }
    }
    &:focus-within{
        border-bottom: 2px solid var(--primary);
        svg{
            color: var(--primary-focus);
        }
        label{
            color: var(--primary);
            font-size: 12px;
            top: -15px;
            left: 5px;
        }
    }
`