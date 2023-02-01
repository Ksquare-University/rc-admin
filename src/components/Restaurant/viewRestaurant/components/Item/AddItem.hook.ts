import axios from 'axios';
import { useEffect, useState } from "react";
import { item } from "./hook";




export const useCreateItems = (  ) => {
const [res, setRes] = useState<any>('');
const [isLoading, setIsLoading] = useState(true);

  const createItem = async (newItem:item, restaurant_id:number) => {

    await axios.post(`http://localhost:3001/items/new`, { 
        name: newItem.name,
        price: newItem.price,
        restaurant_id: restaurant_id
      }); //Create
      
    // setRes(Res);
    setIsLoading(false);    
  };


  return ({
    createItem,
    isLoading
  })
};
