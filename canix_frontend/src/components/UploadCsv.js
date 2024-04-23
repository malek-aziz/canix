import React, { useState } from 'react';
import axios from 'axios';
import { canix_api_url } from '../utils';

function UploadCsv({setFetchData}) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post(`${canix_api_url}/products`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully');
      if (response) setFetchData(prev => !prev)
    } catch (error) {
      alert('Error uploading file');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <div className="mb-3">
        <input className="form-control" type="file" onChange={handleFileChange} />
      </div>
      <button type="submit" className="btn btn-primary">Upload</button>
    </form>
  );
}

export default UploadCsv;
