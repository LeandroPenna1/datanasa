import React, { useEffect, useState } from 'react';
import {marsPictures} from './functions/Functions';

const MarsPics = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await marsPictures();
          setData(response);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <section id='marspics'>
      <div>
        <h1>Mars Pictures</h1>
        <p>Look this pictures take by the Rove robot</p>
      </div>
      <div className='pics-container'>
        {data && data.length > 0 ? (
          data.map(photo => (
            <img  key={photo.id} src={photo.img_src} alt={`Mars image ${photo.id}`} />
          ))
        ) : (
          <p>No images available at this time</p>
        )}
        </div>
      </section>
    );
  };
  
  export default MarsPics;