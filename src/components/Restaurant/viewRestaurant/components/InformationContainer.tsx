import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateI } from '../../../../store/slices';
import resto from '../../../../assets/default-restaurant.png';
import './InformationContainer.css'
import { Information } from '../../../../store/slices/RestaurantView/reducers';
import { updateState, viewInformation, updateRestaurant } from '../../../../store/slices/RestaurantView';
import { fetchRestaurantsbyOwnerid } from '../../../../store/slices/Restaurants/index';
import store, { useAppDispatch } from '../../../../store';

type Props = {
  parentCallback:() =>void
}

export function InformationContainer({parentCallback}:Props) {

    //Redux
  const dispatch = useDispatch();
  const dispatchPromise = useAppDispatch();

  // get Redux store values
  const formstageName = useSelector<StateI>(state => state.restaurantView.ViewInformation.name) as string;
  const formstageDescription = useSelector<StateI>(state => state.restaurantView.ViewInformation.description) as string;
  const formstagePhone = useSelector<StateI>(state => state.restaurantView.ViewInformation.phone_number) as number;
  const formstageFoodType = useSelector<StateI>(state => state.restaurantView.ViewInformation.category) as string;
  const formstageAddress = useSelector<StateI>(state => state.restaurantView.ViewInformation.address) as string;
  const formdeliveryfee = useSelector<StateI>(state => state.restaurantView.ViewInformation.delivery_fee) as number;


  const loading = useSelector<StateI>(state => state.restaurantView.loading) as string;


   // form values initial state
   const [formData, setFormData] = useState<Information>({
    name: formstageName || "",
    description: formstageDescription || "",
    phone_number: formstagePhone || 0,  
    category: formstageFoodType || "",
    address: formstageAddress || "",
    delivery_fee: formdeliveryfee || 0,
  })

  //old
  const [oldUserData, setOldUserData] = useState({
    name: formstageName || "",
    description: formstageDescription || "",
    phone_number: formstagePhone || 0,  
    category: formstageFoodType || "",
    address: formstageAddress || "",
    delivery_fee: formdeliveryfee || 0,
  });

  //update info
  useEffect(() => {
    dispatch(viewInformation(formData));
    //TO DO: A funtion to send the new information...(endpoint)
  }, [formData, dispatch]);


  // form values onchange
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData({
        ...formData, 
        [name]: value
    })
  }

  const handleOnClickCancel = () => {
    const inputStatus = document.querySelectorAll(
      ".inputs"
    ) as unknown as HTMLInputElement[];

    inputStatus.forEach((element, index) => {
      element.disabled = true;
    });

    const buttonsBox = document.querySelector(
      ".Buttons-Edit-Box"
    ) as HTMLElement;
    buttonsBox.style.display = "none";

    setFormData(oldUserData);
  };

  const handleOnClickDone = () => {
    const inputStatus = document.querySelectorAll(
      ".inputs"
    ) as unknown as HTMLInputElement[];

    inputStatus.forEach((element, index) => {
      element.disabled = true;
    });

    const buttonsBox = document.querySelector(
      ".Buttons-Edit-Box"
    ) as HTMLElement;
    buttonsBox.style.display = "none";

    //setFormData(formData);
    dispatchPromise(updateRestaurant({...formData, id:1, city_id:1}));
    //dispatch(updateState(0));
    parentCallback();

  };

  useEffect(() => {
        // update Redux Slice
        dispatch(viewInformation(formData));
        dispatchPromise(fetchRestaurantsbyOwnerid({id: 1}));
        
  }, [formData, dispatch, dispatchPromise])

  const handleOnClickEdit = () => {
    const inputStatus = document.querySelectorAll(
      ".inputs"
    ) as unknown as HTMLInputElement[];

    setOldUserData(formData);

    inputStatus.forEach((element) => {
      element.disabled = false;
    });

    const buttonsBox = document.querySelector(
      ".Buttons-Edit-Box"
    ) as HTMLInputElement;
    buttonsBox.style.display = "flex";
  };

    return(
        <>
            <div className='general-container'>
                <img src={resto} className='img-resto'></img>
                <div className='info-container'>
                    <input
                        placeholder="Restaurant Name"
                        type="text"
                        id="name"
                        name="name"
                        disabled={true}
                        className='inputs'
                        value={formstageName}
                        onChange={handleChange}
                    />

                    <input
                        placeholder="Food Type:"
                        disabled={true}
                        type="text"
                        id="food_type"
                        name="food_type" 
                        className='inputs'
                        value={formstageFoodType}
                        onChange={handleChange}
                    />

                    <input
                        placeholder="Cell:"
                        disabled={true}
                        type="text"
                        id="phone_number"
                        name="phone_number" 
                        className='inputs'
                        value={formstagePhone}
                        onChange={handleChange}
                    />

                    <input
                        placeholder=" Delivery fee:"
                        disabled={true}
                        type="number"
                        id="delivery_fee"
                        name="delivery_fee" 
                        className='inputs'
                        value={formdeliveryfee}
                        onChange={handleChange}
                    />

                    <input
                        placeholder="Adress:"
                        disabled={true}
                        type="text"
                        id="address"
                        name="address" 
                        className='inputs'
                        value={formstageAddress}
                        onChange={handleChange}
                    />

                    <input
                        placeholder="Description:"
                        disabled={true}
                        type="text"
                        id="description"
                        name="description" 
                        className='inputs'
                        value={formstageDescription}
                        onChange={handleChange}
                    />

                    <div className="Buttons-Edit-Box">
                        <button className="Button-cancel" onClick={() => {handleOnClickCancel()
                        }}>
                        Cancel
                        </button>
                        <button
                        className="Button-done"
                        onClick={() => {
                            handleOnClickDone();
                        }}
                        >
                        Done
                        </button>
                    </div>
                </div>
                <button
                    onClick={() => {
                        handleOnClickEdit();
                    }}
                    className="edit-information">
                    <i className="fa-regular fa-pen-to-square"></i>
                </button>
            </div>
        </>
    )

}