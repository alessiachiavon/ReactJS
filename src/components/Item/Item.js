import { Link } from "react-router-dom"

const Item = ({id, tipo, imagen, color, descripcion, precio, stock}) => {

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {tipo}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={tipo} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                    Color: {color}
                </p>
                <p className='Info'>
                    Descripcion: {descripcion}
                </p>
                <p className='Info'>
                    ${precio}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item