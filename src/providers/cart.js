import { createContext, useContext, useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { API } from '../services';
import { useAuth } from './auth';


export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('@mi-au-food:cart')) || [],
  );

  const addToCart = useCallback(
    product => {
      const cartItem = cart.find(elem => elem.id === product.id);

      if (cartItem && cartItem.quantity) {
        cartItem.quantity += 1;
        const list = [...cart];
        setCart(list);
        return localStorage.setItem('@mi-au-food:cart', JSON.stringify(cart));
      }
      Object.assign(product, { quantity: 1 });
      const list = [...cart, product];
      setCart(list);
      return localStorage.setItem('@mi-au-food:cart', JSON.stringify(list));
    },
    [cart],
  );

  const cleanCart = () => {
    setCart([]);
    return localStorage.removeItem('@mi-au-food:cart');
  };

  const removeFromCart = useCallback(
    product => {
      const list = cart.filter(item => item !== product);
      setCart(list);
      return localStorage.setItem('@mi-au-food:cart', JSON.stringify(list));
    },
    [cart],
  );

  const {token} = useAuth()
  const checkOut = (data, callback) => {
    API.post("orders", data, {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then(_=>{
      cleanCart()
      toast("Pedido concluído com sucesso!")
      callback()
    })
  }

  const reduceQuantity = useCallback(
    product => {
      const cartItem = cart.find(elem => elem.id === product.id);

      if (cartItem.quantity && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        const list = [...cart];
        setCart(list);
        return localStorage.setItem('@mi-au-food:cart', JSON.stringify(cart));
      }
      removeFromCart(cartItem);
      return null;
    },
    [cart, removeFromCart],
  );

  let cartReducer = cart.reduce((vAn, vAt) => {
    if(!!vAt.promotionPrice){
      return vAn + Number(vAt.promotionPrice * vAt.quantity);
    }else {
      return vAn + Number(vAt.price * vAt.quantity);
    }
    
  }, 0);
  
  const cartQuantity = cart.reduce((vAn, vAt)=>{
    return vAn + Number(vAt.quantity)       
  },0) 
return (
  <CartContext.Provider
   value={{ 
     cart, 
     addToCart, 
     removeFromCart, 
     cleanCart, 
     cartReducer,
     cartQuantity, 
     reduceQuantity,
     checkOut,
     }}>
	{children}
  </CartContext.Provider>
 )
}

export const useCart = () => useContext(CartContext);
