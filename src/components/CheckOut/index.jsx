import { Button } from "@mui/material";

import { useCart } from "../../providers/cart";
import { useAuth } from "../../providers/auth";
import Container from "./style";
import { useHistory } from "react-router-dom";
import { useOrders } from "../../providers/orders";

const CheckOut = () => {
    const {cart, cartQuantity, cartReducer, checkOut} = useCart();
    const { user, authenticated } = useAuth();
    const { updateOrders } = useOrders()
    const history = useHistory()

    const order = {
        user: user,
        finalPrice: cartReducer, 
        products: cart,
        status: "Pedido Confirmado"
    }

    const redirect = async ()=>{
        await updateOrders()
        return history.push("/profile")
    }

    const handleCheckOut =(order) =>{
        if(authenticated){
            checkOut(order, redirect)
        } else {
            history.push("/login")
        }
    }

    return (
        <Container>
            {cart.length > 0?(
                <>
                    <h1> Resumo do Pedido </h1>
                    <div className="column">
                        <section>
                            <div>
                                <p>Quantidade</p>
                                <p>{cartQuantity} itens</p>                                
                            </div>
                            <div>
                                <p>Total do Pedido</p>
                                <p>R$ {cartReducer.toFixed(2)}</p>                                
                            </div>
                            <div>
                                <p>Frete</p>
                                <p>Grátis</p>                                
                            </div>
                        </section>
                        <Button variant="contained" onClick={()=> handleCheckOut(order) }> Finalizar pedido </Button>
                    </div>
                </>

            ):(
                <></>
            )}
        
        </Container>
    )
}

export default CheckOut