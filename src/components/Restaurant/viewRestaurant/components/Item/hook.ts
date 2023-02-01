import { useEffect, useState } from "react";


export interface item {
    name:string;
    price:number;
}

export const useFetchItems = ( restaurant_id:number ) => {
const [images, setImages] = useState<item[]>([]);
const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const newImages = await fetch(`http://localhost:3001/items/all/${restaurant_id}`); //fetch
    const data = await newImages.json();
    console.log(data);
    
    setImages(data["items"]);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return ({
    images,
    isLoading
  })
};
