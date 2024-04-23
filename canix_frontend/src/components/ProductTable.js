import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { canix_api_url } from '../utils';

function ProductTable({fetchData}) {
  const [categories, setCategories] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    axios.get(`${canix_api_url}/products`)
      .then(response => {
        const formattedData = Object.keys(response.data).map(category => {
          return {
            category: category,
            products: response.data[category].products,
            totalWeight: response.data[category].total_weight
          };
        });

        setCategories(formattedData);
      })
      .catch(error => console.error('Error fetching data: ', error))
      .finally(() => setIsLoading(false));
  }, [fetchData]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {categories.map(categoryData => (
            <div key={categoryData.category}>
              <h3>Category: {categoryData.category}</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Product ID</th>
                    <th>Weight</th>
                    <th>Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {categoryData.products.map(product => (
                    <tr key={product.id}>
                      <td>{new Date(product.date).toLocaleDateString()}</td>
                      <td>{product.product_id}</td>
                      <td>{product.weight}</td>
                      <td>{product.unit}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="2"><b>Total Weight</b></td>
                    <td><b>{categoryData.totalWeight}</b></td>
                    <td><b>kilograms</b></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default ProductTable;
