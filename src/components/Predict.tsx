import './Predict.css';
import React, { useState } from 'react';
import axios from 'axios';

const Predict: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleUpload = async () => {
    if (!image) {
      alert('Please select an image to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', image);

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPrediction(response.data);
    } catch (error: any) {
      if (error.response) {
        console.error('Backend error:', error.response.data);
        alert(`Error uploading the image: ${error.response.data || 'Unknown error'}`);
      } else if (error.request) {
        console.error('No response received:', error.request);
        alert('Error: No response from server');
      } else {
        console.error('Error setting up request:', error.message);
        alert(`Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="upload-heading">Select or Drop an Image</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />

      <button onClick={handleUpload} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload and Predict'}
      </button>

      {prediction && (
        <div className="results">
          <div className="result-container">
            <div className="result-text">
              <h2>Image Insights</h2>
              <p><strong>Crown :</strong> {prediction.predicted_class_name}</p>
              <p><strong>Character :</strong> {prediction.predicted_vesha}</p>
              <p><strong>Description:</strong> {prediction.predicted_description}</p>
              <p><strong>AI Generated Description:</strong> {prediction.ai_description}</p>
            </div>
            <div className="result-image">
              <img
                src={`http://localhost:5000/static/uploads/${prediction.image_filename}`}
                alt="Uploaded"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Predict;
