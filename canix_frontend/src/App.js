import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import UploadCsv from './components/UploadCsv'
import ProductTable from './components/ProductTable'

function App() {
  const [fetchData, setFetchData] = useState(false);

  return (
    <div className="App">
      <header className="text-center my-5">
        <h1>CANIX</h1>
      </header>
      <div className="container my-5">
        <UploadCsv setFetchData={setFetchData} />
        <hr className="my-5" />
        <h2 className="text-center my-5">Products</h2>
        <ProductTable fetchData={fetchData} />
      </div>
    </div>
  );
}

export default App
