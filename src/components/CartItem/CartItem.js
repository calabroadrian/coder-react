import { useContext } from "react"
import { CartContext } from "../Context/CartContext"


const CartItem = ({ id, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = () => {
        removeItem(id)
    }

    return (
        <div>
            <h4>{name}</h4>
            <p>Cantidad; {quantity}</p>
            <p>Precio: {price}</p>
            <p>Sub Total: {price * quantity}</p>
            <button onClick={handleRemove}>Eliminar</button>
        </div>
    )

}

export default CartItem