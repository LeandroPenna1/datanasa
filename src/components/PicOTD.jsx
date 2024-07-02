import React, { useEffect, useState } from 'react'
import { pictureOTD } from './functions/Functions';

const PicOTD = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    pictureOTD(setData)
  }, [])
  return (
    <section id='picotd'>
      <h1>Picture Of The Day</h1>
      <p>Every day, Nasa share the "image of the day". Here, we share this beautiful pic: </p>
      {data != null ? (
        data.map(data => (
          <div className='title' key={data.id}>
            <h2>Title: {data.title} </h2>
            <div className='potd-container'>
              <div className='post'>
                <img style={{height:'500px'}} src={data.hdurl}></img>
                <div className='text'>
                  <div><strong>Date: {data.date}</strong></div>
                  <div className="explanation">{data.explanation} </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : ("There is not a pic.")}
    </section>
  )
}

export default PicOTD