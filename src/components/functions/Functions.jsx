import axios from "axios";

const pictureOTD = async (state) => {
  const peticion = await axios.get("https://api.nasa.gov/planetary/apod?api_key=9NScBtyByKxhB9JRI0GUZQ2DOtiOAnwnihu1yh7h");
  const data = Array.isArray(peticion.data) ? peticion.data : [peticion.data];
  state(data);
};

const marsPictures = async () => {
  try {
    const response = await axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=9NScBtyByKxhB9JRI0GUZQ2DOtiOAnwnihu1yh7h");
    const firstTenPhotos = response.data.photos.slice(0, 10);
    return firstTenPhotos;
  } catch (error) {
    throw new Error("There is not a Mars Pic");
  }
};

const singleEvent = async (id) => {
  try {
    const response = await axios.get(`https://eonet.gsfc.nasa.gov/api/v2.1/events/${id}`);
    console.log("API response:", response.data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export {
  pictureOTD,
  marsPictures,
  singleEvent
};