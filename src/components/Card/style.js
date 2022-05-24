import styled from "styled-components";

const StyledCard = styled.div`
    width: ${(props)=>props.cartSize? "100%":"280px"};
    height: ${(props)=>props.cartSize? "90px":"300px"};
    margin: 10px 15px;
    color: var(--primary);
    display: flex;
    flex-direction:${(props)=>props.cartSize? "row":"column"};
    justify-content: space-evenly;
    align-items: ${(props)=>props.cartSize? "center":"normal"};
    border-radius: 1rem;
  box-shadow: 4px 0px 4px 0px #00000040;


figure{
    width: ${(props)=>props.cartSize? "60px":"200px"};
    height: ${(props)=>props.cartSize? "60px":"200px"};
    margin: ${(props)=>props.cartSize? "":"auto"};
    cursor: pointer;
}
h3{
    max-width: 20ch;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: var(--primary);
    margin: 0.5rem auto;
    font-size:${(props)=>props.cartSize? "12px":"18px"};
}
h3:hover{
    text-decoration: underline;
    cursor: pointer;
}

img{
    max-width: ${(props)=>props.cartSize? "60px":"200px"};
    max-height: ${(props)=>props.cartSize? "60px":"200px"};
}
svg{
    color: var(--primary)
}
section{
    width: ${(props)=>props.cartSize? "":"100%"}
}
div{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
p{
    width: ${(props)=>props.cartSize? "inherit":""} ;
}
.off{
    text-decoration: line-through;
}
.price{
    display: block;
    width: ${(props)=>props.cartSize? "100%":"min-content"} ;
    margin: 0;
}

.price p{
    width: 100%;
}

@media (min-width: 730px){
    section{
        display: flex;
        flex-direction:${(props)=>props.cartSize? "row":"column"};
        width: 100%;
        justify-content: space-between;
    }

    section div{
        width: inherit;
        margin: auto;
    }
    h3{
        width:  ${(props)=>props.cartSize? "50%":"100%"};
        max-width: 30ch;
        font-size:20px;
    }
}

`

export default StyledCard