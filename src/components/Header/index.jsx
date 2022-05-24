import StyledHeader from "./style";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useHistory } from "react-router-dom";
import { useCart } from "../../providers/cart";
import { useAuth } from "../../providers/auth";

export const Header = ({children}) => {
    const {token, LogOff} = useAuth()
    const history = useHistory()
    const { cartQuantity } = useCart()

    const handleLogOut = () =>{
        LogOff()
        history.push("/")
    }
    return (
        <StyledHeader>
            <div>
                <h1 onClick={() => history.push("/")} >Bubble Shop</h1>
                <section className="container">
                {children}
                    <IconButton color="primary" aria-label="cart" onClick={()=> history.push("/cart")}>
                        <Badge badgeContent={cartQuantity} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </IconButton>
                    {!!token?(
                        <>
                        <IconButton color="primary" aria-label="login" onClick={()=> history.push("/profile")}>
                            <PermIdentityOutlinedIcon />
                        </IconButton>
                        <IconButton color="primary" aria-label="login" onClick={handleLogOut}>
                            <LogoutOutlinedIcon />
                        </IconButton>   
                        </>
                    ):(
                        <IconButton color="primary" aria-label="login" onClick={()=> history.push("/login")}>
                            <LoginOutlinedIcon />
                        </IconButton>
                    )}
                       
                </section> 
            </div>
        </StyledHeader>
    )
}