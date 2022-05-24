import { Button } from "@mui/material"
import { useParams } from "react-router-dom"
import { Header } from "../../components/Header"
import { Container } from "./style";
import { Main } from "../../components/Main/style";
import { useCart } from "../../providers/cart";
import { useCatalogue } from "../../providers/catalogue";
import ProductCard from "../../components/Card";
import StyledDisplay from "../../components/Display/style";


export const ProductPage = () => {
    const {addToCart} = useCart();
    const {catalogue} = useCatalogue();
    const params = useParams()
    const product = catalogue.find(
        product => Number(product.id) === Number(params.id),
    );
    const options = catalogue.filter(item => item.brand === product.brand && product.id !== item.id);


    return (
        <Main>
            <Header/>

            <Container> 
                <section>
                    <figure>
                        <img src={product.image} alt={product.title} />                
                    </figure>
                </section>
                <section>
                    <h1> {product.title} </h1>
                    <p> {product.description} </p>
                    <div className="bottom">
                    {product.promotionPrice?(
                        <div>
                        <p className="off">R$ {product.price.toFixed(2)}</p> 
                        <p>R$ {product.promotionPrice.toFixed(2)}</p>
                        </div>
                    ):(
                        <>
                        <p>R$ {product.price.toFixed(2)}</p>   
                        </>
                    )}
                        <Button variant="contained" onClick={()=> addToCart(product)} >Adicionar ao Carrinho</Button>
                    </div>  
                </section> 
            </Container>
            {options.length > 0 &&(
                <>
                    <h1>Outros produtos:</h1>
                    <StyledDisplay>
                        {options.map(product=><ProductCard key={product.id} product={product}/>)}
                    </StyledDisplay>
                </>
            )}
            
        </Main>
    )
}

