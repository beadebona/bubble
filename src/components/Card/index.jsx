import StyledCard from "./style";
import { IconButton } from "@mui/material";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useHistory } from "react-router-dom";
import { useCart } from "../../providers/cart";

const ProductCard = ({product, cartSize, children}) => {

    const history = useHistory() 
    const { addToCart, removeFromCart } = useCart();

    return(
        <StyledCard cartSize={cartSize} >
            <figure onClick={()=>history.push(`product/${product.id}`)}>
                <img src={product.image} alt={product.title}/>
            </figure>
            <section>
            <h3 onClick={()=>history.push(`product/${product.id}`)} >{product.title}</h3>
            <div>
            {children}
            <div>
            {product.promotionPrice?(
            <div className="price">
                <p className="off">R${product.price.toFixed(2)}</p> 
                <p>R${product.promotionPrice.toFixed(2)}</p>
            </div>
            ):(
            <>
                <p>R${product.price.toFixed(2)}</p>   
            </>
            )}
                {!!cartSize?(
                <>
                <IconButton onClick={()=> removeFromCart(product)} >
                    <DeleteOutlineOutlinedIcon/>
                </IconButton>
                </>
                ):(        
                <>                   
                <IconButton onClick={()=> addToCart(product)} >
                    <AddShoppingCartOutlinedIcon/>
                </IconButton>
                </> 
                )}
            </div>
            </div>
            </section>
        </StyledCard>
    )
}

export default ProductCard