import "./createUser.css";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../store";
import { useSelector, useDispatch } from "react-redux";
import { StateI } from '../../../../store/slices';
import Select from 'react-select';



type Props={
    title?: string
}

export function CreateUser({title="CreateUser"}:Props){
    const dispatch = useDispatch();
    const dispatchPromise = useAppDispatch();
    const [selected, setSelected] = useState<string>('customer');

     type Role = "customer" | "owner" | "admin" | "superadmin" | "manager" | "courier";

    interface accounts{
        value?: Role;
        label?: Role;
        isFixed?: boolean;
        isDisabled?: boolean;
    }

    const options:accounts[] = [
        {value: "customer", label: "customer", isFixed: true},
        {value: "courier", label: "courier", isFixed: true},
        {value: "owner", label: "owner" },
        {value: "manager", label: "manager" },
        {value: "admin", label: "admin" },
        {value: "superadmin", label: "superadmin", isDisabled: true},
    ]

    const name = useSelector<StateI>((state) => state.newRestaurantCount.FormStage);
    

    //Select: 
    const handleChange = (e:any) => {
        setSelected(e.value);
    };

    return (
        <>
            <h1>{title}</h1>
            <div className='createUserForm'>
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={options[0]}
                    isDisabled={false}
                    //isLoading={loading=='pending'?true:false}
                    //isClearable={true}
                    isRtl={true}
                    //isSearchable={true}
                    //isOptionSelected={true}
                    onChange={(e)=>{handleChange(e)}}
                    options={options}
                />
                
                <input
                    placeholder="Email"
                    type="text"
                    id="email"
                    name="email" 
                    value={''}
                    onChange={handleChange}
                />
                <input
                    placeholder="Phone number"
                    type="text"
                    id="phone"
                    name="phone" 
                    value={''}
                    onChange={handleChange}
                />
                <input
                    placeholder="Password"
                    type="text"
                    id="password"
                    name="password" 
                    value={""}
                    onChange={handleChange}
                />
                {selected==="manager" && <div className="managerForm">
                    <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={options[0]}
                        isDisabled={false}
                        //isLoading={loading=='pending'?true:false}
                        //isClearable={true}
                        isRtl={true}
                        //isSearchable={true}
                        //isOptionSelected={true}
                        onChange={(e)=>{handleChange(e)}}
                        options={options}
                    />
                </div>}

                {selected==="owner" && <div className="ownerForm">
                    <input
                        placeholder="Fullname"
                        type="text"
                        id="fullname"
                        name="fullname" 
                        value={""}
                        onChange={handleChange}
                    />
                </div>}

                {selected==="customer" &&<div className="customerForm">
                    <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={options[0]}
                        isDisabled={false}
                        //isLoading={loading=='pending'?true:false}
                        //isClearable={true}
                        isRtl={true}
                        //isSearchable={true}
                        //isOptionSelected={true}
                        onChange={(e)=>{handleChange(e)}}
                        options={options}
                    />        

                    <input
                        placeholder="Fullname"
                        type="text"
                        id="fullname"
                        name="fullname" 
                        value={""}
                        onChange={handleChange}
                    />
                    <input
                        placeholder="Address"
                        type="text"
                        id="adress"
                        name="adress" 
                        value={""}
                        onChange={handleChange}
                    />
                    <input
                        placeholder="Reference"
                        type="text"
                        id="reference"
                        name="reference" 
                        value={""}
                        onChange={handleChange}
                    />
                    <input
                        placeholder="Zip code"
                        type="number"
                        id="zip_code"
                        name="zip_code" 
                        value={""}
                        onChange={handleChange}
                    />
           
                </div>}

                {selected==="courier" &&<div className="courierForm">
                    <input
                        placeholder="Fullname"
                        type="text"
                        id="fullname"
                        name="fullname" 
                        value={""}
                        onChange={handleChange}
                    />
                </div>}

                <button className="createUser-btn">
                    Create
                </button>


            </div>
        </>
    )
}