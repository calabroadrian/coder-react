import Item from '../Item/Item';
import '../ItemList/ItemList.css'

const Itemlist = ({products}) => {
    if (!Array.isArray(products)) {
        return <div>No se encontraron productos</div>;
    }

    return (
        <div className='Listgroup'>
            {products.map(product => <Item key={product.id} {...product} />)}
        </div>
    )
 }
 
export default Itemlist
