import { useState } from "react";
import { item } from "./hook";

type newItem = {
    parentCallBack:(arg:item) => void
}


export const AddItem = ({ parentCallBack }:newItem) => {
  const [inputValue, setInputValue] = useState({
    name: '',
    price: 0
  });
  
//   const onInputChange = ({ target }) => {
//     setInputValue(target.value);
//   };
  const handleChangeUser = (e:React.ChangeEvent<HTMLInputElement>) => {
    //console.log(e);
    const { name, value } = e.target

    setInputValue({
        ...inputValue, 
        [name]: value
    })
};
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(inputValue.name !== ''){
      parentCallBack({
        name: inputValue.name,
        price: inputValue.price
      });
    }
  
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Product Name:"
        name='name'
        value={inputValue.name}
        onChange={handleChangeUser}
      />
      <input
        type="number"
        placeholder="Price"
        value={inputValue.price}
        name='price'
        onChange={handleChangeUser}
      />
      <input type="submit" value="Add product" />
    </form>
  );
};
