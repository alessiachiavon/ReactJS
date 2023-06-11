import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, imagen, tipo, material, color, descripcion, precio, stock }) => {
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada',quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail