import { StateI } from '../../../store/slices';
import { useSelector, useDispatch } from 'react-redux';
import { fetchScheduleByRestaurantId, updateState } from "../../../store/slices/RestaurantView";

import Select from 'react-select';
import { useContext, useEffect, useState } from 'react';
import { fetchRestaurantsbyOwnerid } from '../../../store/slices/Restaurants/index';
import { fetchRestaurantById } from '../../../store/slices/RestaurantView/index';
import store, { useAppDispatch } from '../../../store';
import { Welcome } from './components/startUser';
import { CreateUser } from './components/createUser';
import { EditUser } from './components/editUser';


type Props={
    title?: string
}


export function ViewUser({title="viewUser"}:Props){

    const dispatch = useAppDispatch();
    const [pageStage, setPagestage] = useState<number>(0);
    const [selected, setSelected] = useState<number>(0);

    const isActive = (value:number)=>{
        return 'btn '+((value===pageStage) ?'active':'default');
    }
    const updateStates = (n: number) =>{
        setPagestage(n);
    }


    useEffect(() => {     
        //dispatch(fetchRestaurantsbyOwnerid({id: 1}));
    },[dispatch])

    //Select: 
    //Fetch after...
    useEffect(()=>{ 
        if(selected){
            // dispatch(fetchRestaurantById({id: selected}));
            // dispatch(fetchScheduleByRestaurantId({id: selected}));
        }
    }, [selected, dispatch])
    
    //Select: 
    const handleChange = (e:any) => {
        setSelected(e.value);
        updateStates(1);
    };

    return (
    <>
        <div className="viewUser">
            <div className="menuView">
                <a className={isActive(1)} onClick={()=>{ updateStates(1);}}>Create User</a>
                <a className={isActive(2)} onClick={()=>{ updateStates(2);}}>Edit</a>
                {pageStage===2 &&
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    //defaultValue={{value:data[0].name, label:data[0].name}}
                    isDisabled={false}
                    //isLoading={loading=='pending'?true:false}
                    //isClearable={true}
                    isRtl={true}
                    //isSearchable={true}
                    //isOptionSelected={true}
                    onChange={(e)=>{handleChange(e)}}
                    // options={restaurants.map(
                    //     function(item){
                    //         return{
                    //           "value": item.id,
                    //           "label": item.name
                    //         }
                    //       }
                    // )}
                />}
            </div>
            <div className="container-view">
                {pageStage===0 && <Welcome/>}
                {pageStage===1 && <CreateUser/>}
                {pageStage===2 && <EditUser/>}

            </div>
        </div>
    </>
    )
}