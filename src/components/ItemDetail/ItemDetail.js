import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, name, description,category, img, price, stock, product}) => {
    return (
    <article className="CardItem">
        <div className="Header">
            <h2 className="ItemHeader">
                {name}
                </h2>
        </div>
        <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock: {stock}
                </p>
            </section>
            <footer className="CardFooter">
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail