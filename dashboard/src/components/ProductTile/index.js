function ProductTile(props) {
    return (
        <div>
            <div className="text-center">
                <h3>{props.nombre}</h3>
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={'http://localhost:3000'+props.imagen} alt="dummy product" />
            </div>
            <p>{props.descripcion}</p>
            <p><b>${props.precio}</b></p>
            <a target="_blank" rel="nofollow" href="/">View more details</a>
        </div>
    );
}

export default ProductTile;