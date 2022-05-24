import { Button } from "@mui/material"
import { useAuth } from "../../providers/auth"
import { CardContend } from "./style"

export const ProfileCard = () =>{
    const {user, orders} = useAuth()

    return(
        <CardContend>
            <h2>Olá, {user.name}</h2>
            <h4>Meus Dados</h4>
            <p><span>Endereço:</span> {user.street}, {user.number}</p>
            <p><span>Bairro:</span> {user.district} - {user.cep}</p>
            <p><span>Cidade:</span> {user.city}, {user.state}</p>
            {/* <Button>Editar</Button> */}
            <h4>Meus Pedidos</h4>
            <ul>{
                !!orders?
                (
                    orders.map(order=>{
                        return (
                        <li key={order.id}>
                            <p>Id: {order.id}</p>
                            <p>Status: {order.status}</p>
                            <p>Valor do Pedido: R${order.finalPrice.toFixed(2)}</p>
                        </li>   
                        )
                    })
                ):(
                <>Você ainda não tem pedidos em andamento</>
                )}
                
            </ul>
        </CardContend>
    )
}