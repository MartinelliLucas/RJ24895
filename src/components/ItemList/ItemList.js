import { Item } from "../Item/Item";
import { Contenedor } from "../ejemplos/Contenedor"
import './ItemList.scss'

export const ItemList = ( {productos} ) => {
    return (
        <Contenedor className = "productos">
            <h2>Productos</h2>
            <hr className="hr"></hr>
            <div className="row">
                { productos.map ((el) => <Item nombre={el.nombre} {...el}/>)}
            </div>
        </Contenedor>
      

    )
}