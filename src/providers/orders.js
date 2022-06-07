import { createContext, useContext, useState } from "react";
import { API } from "../services";

const orderContext = createContext()

export const OrderProvider = ({children}) =>{
    const [orders, setOrders] = useState([])
    const token = localStorage.getItem("@bubble:token")
    const user = JSON.parse(localStorage.getItem("@bubble:user"))

    const updateOrders = () =>{
        API.get(`orders`, {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }  
        }).then(response =>{
            setOrders(response.data)
        }) 
    }
    const myOrders = orders.filter(order => order.user.id === user.id) 
    return (
        <orderContext.Provider value={{orders, myOrders, updateOrders}}>
            {children}
        </orderContext.Provider>
    )
}

export const useOrders = () => useContext(orderContext)