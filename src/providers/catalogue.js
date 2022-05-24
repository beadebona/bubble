import { createContext, useContext, useEffect, useState } from 'react';
import { API } from '../services';

const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([])
  const [products, setProducts] = useState([])
  const [root, setRoot] = useState("")

  useEffect(()=>{
    API.get(`products${root}`)
    .then((response) => {
      setProducts(response.data)
      setCatalogue(response.data)
    })
  }, [root])

  const filterInput = (value) =>{
    const filtered = products.filter(product =>product.title.toLowerCase().includes(value)||product.brand.toLowerCase().includes(value))
    setCatalogue(filtered)
  }

  const[validate, setValidate] = useState(false)

return (
  <CatalogueContext.Provider
   value={{ catalogue, filterInput, validate, setValidate, setRoot }}>
	{children}
  </CatalogueContext.Provider>
 )
}

export const useCatalogue = () => useContext(CatalogueContext);
