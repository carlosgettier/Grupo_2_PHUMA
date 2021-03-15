import React from 'react';

import LeftMenu from '../LeftMenu';
import TopNavBar from '../TopNavBar';

import CardList from '../CardList';
import Article from '../Article';
import SingleTextCardList from '../SingleTextCardList';
import ProductTile from '../ProductTile';
import ProductsTable from '../ProductsTable'

import Footer from '../Footer';

import './App.css';

const baseURL = 'http://localhost:3000/api/';

let articleCardsText = ['Category1', 'Category2', 'Category3', 'Category4', 'Category5', 'Category6', 'Category7', 'Category8'];

let footerText = 'Copyright © Dashboard 2020'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      totalProducts: '',
      totalAmount: 'Pendiente API',
      totalUsers: '',
      lastProductInDatabase: {},
      allProductsData: [],
    };
    this.handlePreviewClick = this.handlePreviewClick.bind(this);
  }

  componentDidMount() {
    this.fetchUsers()
    .then(response => response.json())
    .then(data => this.setState({ totalUsers: data.cantidad }))

    this.fetchProductList()
      .then(response => response.json())
      .then(data => {
        const ultimaPosicion = data.Productos.length - 1;
        this.setState({ 
          allProductsData: data.Productos,
          totalProducts: data.cantidad
         })
        return this.fetchProduct(data.Productos[ultimaPosicion].id)
      })
      .then(response => response.json())
      .then(data => this.setState({ lastProductInDatabase: data }))
      .catch(error => console.log('Hubo algun problema: ', error))
  }

  fetchProductList() {
    return fetch(baseURL + 'products/')
  };

  fetchProduct(id) {
    return fetch(baseURL + 'products/' + id);
  };

  fetchUsers(id) {
    return fetch(baseURL + 'users/');
  };

  handlePreviewClick (id) {
    this.fetchProduct(id)
    .then(response => response.json())
    .then(data => this.setState({ lastProductInDatabase: data }))
  }

  render() {
    return (
      <main>
        <div id="wrapper">

          <LeftMenu />

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">

              <TopNavBar />

              <div className="container-fluid">

                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>

                <CardList
                  totalProducts={this.state.totalProducts}
                  totalAmount={this.state.totalAmount}
                  totalUsers={this.state.totalUsers}
                />

                <div className="row">

                  <Article title='Product preview' id='productPreview'>
                    <ProductTile
                      nombre={this.state.lastProductInDatabase.nombre}
                      imagen={this.state.lastProductInDatabase.imagen}
                      descripcion={this.state.lastProductInDatabase.descripcion}
                      precio={this.state.lastProductInDatabase.precio}
                    />
                  </Article>

                  <Article title='Categories in Data Base'>
                    <SingleTextCardList
                      cardsText={articleCardsText}
                    />
                  </Article>

                </div>

                <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>

                <ProductsTable productsData={this.state.allProductsData} handlePreviewClick ={this.handlePreviewClick}/>

              </div>
            </div>
            <Footer text={footerText} />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
