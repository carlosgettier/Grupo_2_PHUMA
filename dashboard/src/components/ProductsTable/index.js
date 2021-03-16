import ProductsTableRow from '../ProductsTableRow'

function ProductsTable(params) {

	return (
		<div className="card shadow mb-4">
			<div className="card-body">
				<div className="table-responsive">
					<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
						<thead>
							<tr>
								<th>Name</th>
								<th>Description</th>
								<th>Price</th>
								<th>Categories</th>
								<th>Colors</th>
								<th>Stock</th>
								<th>Preview</th>
							</tr>
						</thead>
						<tfoot>
							<tr>
								<th>Name</th>
								<th>Description</th>
								<th>Price</th>
								<th>Categories</th>
								<th>Colors</th>
								<th>Stock</th>
								<th>Preview</th>
							</tr>
						</tfoot>
						<tbody>
							{params.productsData.map(thisProductData => {
								return (
								<ProductsTableRow 
								nombre = {thisProductData.nombre}
								descripcion = {thisProductData.descripcion}
								precio = {thisProductData.precio}
								key = {thisProductData.id}
								handlePreviewClick = {()=>params.handlePreviewClick(thisProductData.id)}
								/>
								)
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default ProductsTable;