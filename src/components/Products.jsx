import React, { useState } from 'react';
import Header from './Header';
import { useApi } from '../contexts/FetchingApi';
import './products.css';
import { useCart } from '../contexts/CartContext';

function Products() {
  const { data, loading, error } = useApi();
  const { cart, dispatch } = useCart();
  const [selectedProduct, setSelectedProduct] = useState({}); // this is used for  single product will stored in this variable
  const [showModal, setShowModel] = useState(false) // this is used for showing and hiding the modal

  // Debug: Check data, loading, and error states
  // console.log('Data:', data);
  // console.log('Loading:', loading);
  // console.log('Error:', error);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModel(true);
  }
  const handleCloseModal = () => {
    setShowModel(false);
    // setSelectedProduct(null);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <Header />
      <div className="row container mx-auto mt-5">
        {
          data.map((product, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-3 py-3">
              <div className="card">
                <img
                  src={product.images}
                  alt={product.title}
                  className="card-img-top"
                  onClick={() => handleProductClick(product)}
                  style={{cursor: 'pointer'}}
                />
                <div className="card-body">
                  <h5 className="card-title ellipsis">{product.title}</h5>
                  <p className="card-text ellipsis">{product.description}</p>
                  <p className="card-text"><strong>Price: ${product.price}</strong></p>
                  <a href="#" className="btn btn-primary" onClick={() => dispatch({ type: 'Add', product: product })}>Add to Cart</a>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      {/* <!-- Button trigger modal --> */}
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div
        className={`modal fade ${showModal ? 'show d-block' : ''}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: showModal ? 'block' : 'none' }}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{selectedProduct.title}</h1>
              <button type="button" className="btn-close" onClick={handleCloseModal} data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src={selectedProduct.images}
                
                className='w-100'
              />
              <p className='description'>
                {selectedProduct.description}
              </p>
            </div>
            <div className="modal-footer">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
