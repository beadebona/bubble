import Card from "../../components/Card"
import CheckOut from "../../components/CheckOut"
import StyledDisplay from "../../components/Display/style"
import {Header} from "../../components/Header"
import { Main } from "../../components/Main/style"
import { QuantityController } from "../../components/QuantityController"
import { useCart } from "../../providers/cart"

export const Cart = () => {
    const {cart} = useCart()
    return (
        <Main>
        <Header/>
        <h1>Carrinho</h1>
        <StyledDisplay>
        {cart.map(product => <Card key={product.id} cartSize={true}  product={product}>
            <QuantityController product={product}/>
        </Card>)}
        </StyledDisplay>
        <CheckOut/>

        </Main>
    )
}
