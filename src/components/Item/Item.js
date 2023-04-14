import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, stock}) => {
    return (
        <article className="CardItem">
            <div className="CardHeader">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </div>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponbile: {stock}
                </p>
            </section>
            <footer className="CardFooter">
            <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
            </footer>
        </article>

    )
}

export default Item