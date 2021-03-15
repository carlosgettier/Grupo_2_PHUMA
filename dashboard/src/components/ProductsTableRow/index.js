function ProductsTableRow(props) {
    return (
        <tr>
            <td>{props.nombre}</td>
            <td>{props.descripcion}</td>
            <td>{props.precio}</td>
            <td>
                <ul>
                    <li>Pendiente API</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li><span className="text-danger">Pendiente API</span></li>
                    <li><span className="text-primary">Pendiente API</span></li>
                    <li><span className="text-success">Pendiente API</span></li>
                </ul>
            </td>
            <td>Pendiente API</td>
            <td><a onClick={props.handlePreviewClick} href="#productPreview">Preview</a></td>
        </tr>
    );
}

export default ProductsTableRow;