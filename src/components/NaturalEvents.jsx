import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NaturalEvents = () => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [eventType, setEventType] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://eonet.gsfc.nasa.gov/api/v2.1/events");
        if (response.data && response.data.events) {
          setEvents(response.data.events);
          setLoading(false);
        } else {
          console.error('No se encontraron eventos disponibles');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error al cargar los datos:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterEventsByType = (eventType) => {
    if (!loading) {
      return events.filter(event => event.title.toLowerCase().includes(eventType.toLowerCase()));
    }
    return [];
  };

  const handleButtonClick = (type) => {
    setEventType(type);
  };

  return (
    <section id='naturalevents'>
    <div className='events-container'>
    <h1>Natural Events</h1>
    <p>Here, you can look ALL the natural events currently in the world.</p>
    <div className='events-interfaz'>
      <div id='event-buttons'>
        <button onClick={() => handleButtonClick('Volcano')}>Volcanoes</button>
        <button onClick={() => handleButtonClick('Fire')}>Fires and Wildfires</button>
        <button onClick={() => handleButtonClick('Iceberg')}>Icebergs</button>
      </div>
      <div id='events'>
        {loading ? (
          <p>Loading...</p>
        ) : eventType ? (
          <div className='EventList'>
            <h2>{eventType}s:</h2>
            <div className='EventContainer'>
              {filterEventsByType(eventType).map((event, index) => (
                <div key={index}>
                  <a href={`/Event/${event.id}`} target='_blank'>
                    <p>{event.title}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>Select an event type</p>
        )}
      </div>
      </div>
      </div>
    </section>
  );
};

export default NaturalEvents;