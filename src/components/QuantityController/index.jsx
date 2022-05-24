import { useCart } from '../../providers/cart';
import { RangeButton } from './style';
import { Span } from './style';

export const QuantityController = ({product}) =>{
  const { addToCart, reduceQuantity} = useCart();
    return (
        <div>
          <RangeButton
            onClick={() => reduceQuantity(product)}
        > - </RangeButton>
          <Span>{product.quantity}</Span>
          <RangeButton 
          onClick={() => addToCart(product)}
          > + </RangeButton>
        </div>
      );
}