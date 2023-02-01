import resto from '../../../../../assets/default-restaurant.png';

type Props = {
    title: string,
    price: number,
}

export const ProductItem = ( { title= 'Product', price=0 }:Props ) => {
    return (
      <div className="card">
          <img className='img-product' src={resto} alt={title} />
          <p>Product:{title}</p>
          <p>Price: {price}</p>
      </div>
    )
  }
  