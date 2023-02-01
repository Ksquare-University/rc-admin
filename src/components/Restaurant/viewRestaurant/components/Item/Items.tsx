import './item.css'
import { useEffect, useState } from 'react';
import { useFetchItems, item } from './hook';
import {ProductItem} from './Item'


type Props = {
    restaurant_id: number,
    isChange: boolean,
}

export const ItemGrid = ({ restaurant_id, isChange=false }: Props) => {
  const [items, setItems] = useState<item[]>([]);
  const [loading, setLoading] = useState<boolean>();

    
    const {images, isLoading} = useFetchItems(restaurant_id);//Fetch Items

    //setItems(images);
    // setLoading(isLoading);
    
    const listItems =images.map(( element ) => (
      <ProductItem title={element.name} price={element.price} />
    ));

  
    // useEffect(()=>{
    //   //getImages();
      
    // },[isChange])

    return (
      <>
        {isLoading   && (<h2>Is loading... </h2>)}
        {images.length}
        <div className="card-grid">{listItems}</div>
      </>
    );
  };
  