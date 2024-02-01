import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const totalPages = Math.ceil(100 / 20); // Calculate the total number of pages

  async function getData(page) {
    try {
      let response = await axios.get(
        `https://ahmed-samy-node-project-iti.onrender.com/product?page=${page}&limit=21`
      );
      console.log(response.data);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData(currentPage); // Load products for the initial page
  }, [currentPage]); // Trigger a fetch when currentPage changes

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="container py-5 mb-5">
        <div className="row">
          {products.length === 0 ? (
            <FontAwesomeIcon icon={faSpinner} spin className="fa-3x" />
          ) : (
            products.map((product, index) => (
              <div key={index} className="col-md-4">
                <img
                  src={product.imageURL}
                  className="w-50"
                  alt={product.productName}
                />
                <h3>{product.productName}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.finalPrice}</p>
                <p>Stock: {product.stock}</p>
              </div>
            ))
          )}
        </div>
        <div className="text-center mt-4">
          <button
            className="btn btn-info mt-2 mb-5 mx-2"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <button
            className="btn btn-info mt-2 mb-5 ml-5"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            Next Page
          </button>
        </div>
      </div>
    </>
  );
}
