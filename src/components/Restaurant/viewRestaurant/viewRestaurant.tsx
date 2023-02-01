import './viewRestaurant.css'
import { StateI } from '../../../store/slices';
import { useSelector, useDispatch } from 'react-redux';
import { fetchScheduleByRestaurantId, updateState } from "../../../store/slices/RestaurantView";
import { ViewInformation } from "./components/InformationView";
import { ViewSchedule } from "./components/ScheduleView";
import { ViewDisable } from "./components/DisableView";
import Select from 'react-select';
import { useContext, useEffect, useState } from 'react';
import { fetchRestaurantsbyOwnerid } from '../../../store/slices/Restaurants/index';
import { fetchRestaurantById } from '../../../store/slices/RestaurantView/index';
import store, { useAppDispatch } from '../../../store';
import { ItemGrid } from './components/Item/Items';
import { item } from './components/Item/hook';
import { AddItem } from './components/Item/AddItem';
import { useCreateItems } from './components/Item/AddItem.hook';


type Props={
    title?: string
}


export function ViewRestaurant({title="viewRestaurant"}:Props){

    const dispatch = useAppDispatch();
    const pageStage = useSelector<StateI>(state => state.restaurantView.ViewStage) as number;

    
    const loading = useSelector<StateI>(state => state.counter.loading);
    const restaurants = useSelector<StateI>(state => state.counter.pokemons) as any[];
    const [selected, setSelected] = useState<number>();
    const [updated, setUpdated] = useState<boolean>(false);

    const StatusUpdated = () => {
        setUpdated(!updated);
    }

    const isActive = (value:number)=>{
        return 'btn '+((value===pageStage) ?'active':'default');
    }

    const updateStates = (n: number) =>{
        dispatch(updateState(n));
    }

    interface RestaurantOption {
        id: number;
        name: string;
        description: string;
        city_id: number;
        category: string;
        delivery_fee: number;
        phone_number: number;
        owner_id: number;
        is_deleted: boolean;
        createdAt: string;
        updatedAt: string;
      }

    const [data] = useState<RestaurantOption[]>(
        
        [
            {
                "id": 1,
                "name": "Restaurants",
                "description": "Hamburgers, tacos and more",
                "city_id": 1,
                "category": "Fast food",
                "delivery_fee": 0,
                "phone_number": 9898202,
                "owner_id": 1,
                "is_deleted": false,
                "createdAt": "2023-01-20T21:12:29.498Z",
                "updatedAt": "2023-01-20T21:12:29.498Z"
            }
        ]
    );

    useEffect(() => {     
        dispatch(fetchRestaurantsbyOwnerid({id: 1}));
    },[dispatch, updated])

    useEffect(()=>{ 
        if(selected){
            dispatch(fetchRestaurantById({id: selected}));
            dispatch(fetchScheduleByRestaurantId({id: selected}));
        }
    }, [selected, dispatch])
    
    const handleChange = (e:any) => {
        setSelected(e.value);
        updateStates(1);
      };

  const [isChanged, setIsChanged] = useState<boolean>(false);
    
  const { createItem, isLoading}= useCreateItems();
    const OnAddItem = (newItem:item) => {
        
        //Create  NewHook to put the new item
        //When is loading success-> is Changed true
        createItem(newItem, 1);
        
        setIsChanged(!isChanged);
        
    };

    return (
    <>
        <div className="viewRestaurant">
            <div className="menuView">
                <a className={isActive(1)} onClick={()=>{ updateStates(1);}}>Information</a>
                <a className={isActive(2)} onClick={()=>{ updateStates(2);}}>Schedule</a>
                <a className={isActive(3)} onClick={()=>{ updateStates(3);}}>Disable </a>
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={{value:data[0].name, label:data[0].name}}
                    isDisabled={false}
                    isLoading={loading=='pending'?true:false}
                    //isClearable={true}
                    isRtl={true}
                    //isSearchable={true}
                    //isOptionSelected={true}
                    onChange={(e)=>{handleChange(e)}}
                    options={restaurants.map(
                        function(item){
                            return{
                              "value": item.id,
                              "label": item.name
                            }
                          }
                    )}
                />
                <button className='addNew' onClick={()=>{ (window as Window).location = "http://localhost:3000/restaurants/new"; }}> + </button>
            </div>
            <div className="container-view">
                {pageStage===1 && <ViewInformation parentCallback={StatusUpdated}/>}
                {pageStage===2 && <ViewSchedule isChanged={pageStage}/>}
                {pageStage===3 && <ViewDisable/>}
            </div>
            <div className='container-items'>
                <h1>Items</h1>
                <div id='items'>
                    <AddItem
                        parentCallBack={OnAddItem}
                    />
                    {/* TODO ADD CORRECT REFERENCES TO THE REQUEST: WHEN YOU CREATE AN ITEM IT'S JUST FOR THE RESTAURANT_ID: 1 */}
                    <ItemGrid restaurant_id={1} isChange={isChanged}/>
                </div>

            </div>
        </div>
    </>
    )
}