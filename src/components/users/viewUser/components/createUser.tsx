import "./createUser.css";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../store";
import { useSelector, useDispatch } from "react-redux";
import { StateI } from '../../../../store/slices';
import Select from 'react-select';
import { State } from "@popperjs/core";
import { createCourrier, createCustomer, createManager, createOwner, fetchCities, fetchRestaurants, updateAddress, updateAdmin, updateCourrier, updateCustomer, updateManager, updateUser } from "../../../../store/slices/UserForm";
import { City, CustomerAddress, RestaurantFetchOptions, User, UserAdmin, UserCourrier, UserCustomer, UserManager } from "../../../../store/slices/UserForm/reducers";
import { option } from "yargs";



type Props={
    title?: string
}

export function CreateUser({title="CreateUser"}:Props){
    const dispatch = useDispatch();
    const dispatchPromise = useAppDispatch();
    const [selected, setSelected] = useState<string>('customer');

    //City
    const city = useSelector<StateI>((state)=>state.userForm.city) as City[];
    const loading = useSelector<StateI>((state)=>state.userForm.loading) as string;
    //Restaurants
    const restaurants = useSelector<StateI>((state)=>state.userForm.restaurants) as RestaurantFetchOptions[];

    //User
    const emailUser = useSelector<StateI>((state)=>state.userForm.user.email) as string;
    const phoneUser = useSelector<StateI>((state)=>state.userForm.user.phone) as string;
    const usernameUser = useSelector<StateI>((state)=>state.userForm.user.user_name) as string;

    const roleUser= useSelector<StateI>((state)=>state.userForm.user.role) as "customer" | "admin" | "manager" | "superadmin" | "courier";
    const [password, setPassword] = useState<string>()
    const [send, setSend] = useState<boolean>(false);

    const [userData, setUserData] = useState<User>({
        email: emailUser || "",
        phone: phoneUser || "",
        user_name: usernameUser || "",
        role: roleUser || "customer",
    });
    //Manager
    const restaurantId = useSelector<StateI>((state)=>state.userForm.manager.restaurant_id) as number;
    const userId = useSelector<StateI>((state)=>state.userForm.manager.user_id) as string;
    
    const [managerData, setManagerData] = useState<UserManager>({
        restaurant_id: restaurantId || 0,
        user_id: userId || "",
    });

    //Customer
    const fullnameCustomer = useSelector<StateI>((state)=>state.userForm.customer.user.full_name) as string;
    const userIdCustomer = useSelector<StateI>((state)=>state.userForm.customer.user.user_id) as string;
    const phoneCustomer = useSelector<StateI>((state)=>state.userForm.customer.user.phone) as string;
    
    const [customerData, setCustomerData] = useState<UserCustomer>({
        full_name: fullnameCustomer || "",
        user_id: userIdCustomer || "",
        phone: phoneCustomer || "",
    });
    
    //address
    const customer_id = useSelector<StateI>((state)=>state.userForm.customer.address.customer_id) as number;
    const address = useSelector<StateI>((state)=>state.userForm.customer.address.address) as string;
    const reference = useSelector<StateI>((state)=>state.userForm.customer.address.reference) as string;
    const zip_code = useSelector<StateI>((state)=>state.userForm.customer.address.customer_id) as number;
    const city_id = useSelector<StateI>((state)=>state.userForm.customer.address.customer_id) as number;

    const [addressData, setAddressData] = useState<CustomerAddress>({
        customer_id: customer_id || 0,
        address: address || "",
        reference: reference || "",
        zip_code: zip_code || 0,
        city_id: city_id || 1,
    });

    //Courrier
    const fullnameCourrier = useSelector<StateI>((state)=>state.userForm.courrier.fullname) as string;
    const userIdCourrier = useSelector<StateI>((state)=>state.userForm.courrier.user_id) as string;
    const phoneCourrier = useSelector<StateI>((state)=>state.userForm.courrier.phone) as string;

    const [courrierData, setCourrierData] = useState<UserCourrier>({
        fullname: fullnameCourrier || "",
        user_id: userIdCourrier || "",
        phone: phoneCourrier || "",
    });

    //Owner/Admin
    const fullnameAdmin = useSelector<StateI>((state)=>state.userForm.courrier.fullname) as string;
    const userIdAdmin = useSelector<StateI>((state)=>state.userForm.admin.user_id) as string;
    const phoneAdmin = useSelector<StateI>((state)=>state.userForm.admin.phone) as string;
 
    const [adminData, setAdminData] = useState<UserAdmin>({
        fullname: fullnameAdmin || "",
        user_id: userIdAdmin || "",
        phone: phoneAdmin || "",
    });
    
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
        {value: "superadmin", label: "superadmin", isDisabled: true},
    ]

    const name = useSelector<StateI>((state) => state.newRestaurantCount.FormStage);
    
    //------------User----------------
    //Select USER: 
    const handleChange = (e:any) => {
        setSelected(e.value);

        setUserData({
            ...userData, 
            ['role']: e.value
        })
    };
    const handleChangeUser = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setUserData({
            ...userData, 
            [name]: value
        })
    };
    useEffect(()=>{
        dispatch(updateUser(userData));
    }, [userData, dispatch])

    //------------Manager----------------
    const handleChangeManager = (e:any) => {
        //setSelected(e.value);
        setManagerData({
            ...managerData,
            ['restaurant_id']: e.value
        });
    };
    useEffect(()=>{
        dispatch(updateManager(managerData));
    }, [managerData, dispatch])

    //------------Admin----------------
    const handleChangeAdmin = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setAdminData({
            ...adminData, 
            [name]: value
        })
    };
    useEffect(()=>{
        dispatch(updateAdmin(adminData));
    }, [adminData, dispatch])

    //------------Customer----------------
    const handleChangeCustomer = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setCustomerData({
            ...customerData, 
            [name]: value
        })
    };
    useEffect(()=>{
        dispatch(updateCustomer(customerData));
    }, [customerData, dispatch]);

    const handleChangeAddress = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setAddressData({
            ...addressData, 
            [name]: value
        })
    };
    const handleChangeCity = (e:any) => {
        //setSelected(e.value);
        setAddressData({
            ...addressData,
            ['city_id']: e.value
        });
    };
    useEffect(()=>{
        dispatch(updateAddress(addressData));
    }, [addressData, dispatch]);

    //------------Courrier----------------
    const handleChangeCourrier = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setCourrierData({
            ...courrierData, 
            [name]: value
        })
    };
    useEffect(()=>{
        dispatch(updateCourrier(courrierData));
    }, [courrierData, dispatch]);




    //Fill Selectors
    useEffect(()=>{
        dispatchPromise(fetchCities());
        dispatchPromise(fetchRestaurants());
    },[dispatchPromise])

    //Process to create a new User...
    //User
    useEffect(()=>{

        if(send){
            if(selected==='customer' && password){
                dispatchPromise(createCustomer({
                    displayName: userData.user_name,
                    email: userData.email,
                    password: password,
                    full_name: customerData.full_name,
                    phone_number: customerData.phone,
                    address: addressData.address,
                    reference: addressData.reference,
                    zip_code: addressData.zip_code,
                    city_id: addressData.city_id,
                }));
            }
            if(selected==='admin' && password){
                dispatchPromise(createOwner({
                    displayName: userData.user_name,
                    email: userData.email,
                    password: password,
                    full_name: adminData.fullname,
                    phone_number: adminData.phone,
                }));
            }
            if(selected==='manager' && password){
                dispatchPromise(createManager({
                    displayName: userData.user_name,
                    email: userData.email,
                    password: password,
                    restaurant_id: managerData.restaurant_id,
                }));
            }
            if(selected==='courier' && password){
                dispatchPromise(createCourrier({
                    displayName: userData.user_name,
                    email: userData.email,
                    password: password,
                    full_name: adminData.fullname,
                    phone_number: adminData.phone,
                }));
            }
            setSend(false);
        }
        
    }, [send,dispatch,dispatchPromise])

    return (
        <>
            <h1>{title}</h1>
            <div className='createUserForm'>
                
                <>
                    <Select
                        className="basic-single"
                        classNamePrefix="select"
                        //value={userData.role || "customer"}
                        isDisabled={false}
                        isRtl={true}
                        onChange={(e)=>{handleChange(e)}}
                        options={options}
                    />
                </>
                <>
                <input
                    placeholder="Email"
                    type="text"
                    id="email"
                    name="email" 
                    value={userData.email}
                    onChange={handleChangeUser}
                />
                <input
                    placeholder="Username"
                    type="text"
                    id="user_name"
                    name="user_name" 
                    value={userData.user_name}
                    onChange={handleChangeUser}
                />
                <input
                    placeholder="Phone number"
                    type="text"
                    id="phone"
                    name="phone" 
                    value={userData.phone}
                    onChange={handleChangeUser}
                />
                <input
                    placeholder="Password"
                    type="text"
                    id="password"
                    name="password" 
                    value={password}
                    onChange={(e:any)=>{setPassword(e.value)}}
                />
                </>
                {selected==="manager" && <div className="managerForm">
                    <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isDisabled={false}
                        isLoading={loading=='pending'?true:false}
                        isRtl={true}
                        onChange={(e)=>{handleChangeManager(e)}}
                        options={restaurants.map(
                            function(item){
                                return{
                                  "value": item.id,
                                  "label": item.name
                                }
                              }
                        )}
                    />
                </div>}

                {selected==="owner" && <div className="ownerForm">
                    <input
                        placeholder="Fullname"
                        type="text"
                        id="fullname"
                        name="fullname" 
                        value={adminData.fullname}
                        onChange={handleChangeAdmin}
                    />
                    <input
                        placeholder="Phone Number"
                        type="text"
                        id="phone"
                        name="phone" 
                        value={adminData.phone}
                        onChange={handleChangeAdmin}
                    />
¿
                </div>}

                {selected==="customer" &&<div className="customerForm">
                    <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isDisabled={false}
                        isLoading={loading=='pending'?true:false}
                        isRtl={true}
                        onChange={(e)=>{handleChangeCity(e)}}
                        options={city.map(
                            function(item){
                                return{
                                  "value": item.id,
                                  "label": item.name
                                }
                              }
                        )}
                    />        

                    <input
                        placeholder="Fullname"
                        type="text"
                        id="full_name"
                        name="full_name" 
                        value={customerData.full_name}
                        onChange={handleChangeCustomer}
                    />
                    <input
                        placeholder="Phone Number"
                        type="text"
                        id="phone"
                        name="phone" 
                        value={customerData.phone}
                        onChange={handleChangeCustomer}
                    />
                    <input
                        placeholder="Address"
                        type="text"
                        id="address"
                        name="address" 
                        value={addressData.address}
                        onChange={handleChangeAddress}
                    />
                    <input
                        placeholder="Reference"
                        type="text"
                        id="reference"
                        name="reference" 
                        value={addressData.reference}
                        onChange={handleChangeAddress}
                    />
                    <input
                        placeholder="Zip code"
                        type="number"
                        id="zip_code"
                        name="zip_code" 
                        value={addressData.zip_code}
                        onChange={handleChangeAddress}
                    />
           
                </div>}

                {selected==="courier" &&<div className="courierForm">
                    <input
                        placeholder="Fullname"
                        type="text"
                        id="fullname"
                        name="fullname" 
                        value={courrierData.fullname}
                        onChange={handleChangeCourrier}
                    />
                    <input
                        placeholder="Phone"
                        type="text"
                        id="phone"
                        name="phone" 
                        value={courrierData.phone}
                        onChange={handleChangeCourrier}
                    />
                </div>}

                <button className="createUser-btn"
                onClick={()=>{setSend(true)}}
                >
                    Create
                </button>


            </div>
        </>
    )
}