import { useState, useEffect } from "react";
import { getProducts, getProductsById } from '../../asyncMock';
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProducts] = useState(null)
    const {itemId} = useParams()
    useEffect(() => {
        const asyncFunc = itemId ? getProductsById : getProducts
    asyncFunc(itemId)
    .then(response => {
        setProducts(response)
      })
  .catch(error => {
    console.error(error);
      })
  }, [itemId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer