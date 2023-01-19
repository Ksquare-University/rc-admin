import './viewRestaurant.css'
import { StateI } from '../../../store/slices';
import { useSelector, useDispatch } from 'react-redux';
import { updateState } from "../../../store/slices/RestaurantView";
import { ViewInformation } from "./components/InformationView";
import { ViewSchedule } from "./components/ScheduleView";
import { ViewDisable } from "./components/DisableView";
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { fetchPokemonByName } from '../../../store/slices/Restaurants/index';
import store, { useAppDispatch } from '../../../store';

type Props={
    title?: string
}

export function ViewRestaurant({title="viewRestaurant"}:Props){

    const dispatch = useAppDispatch();
    const pageStage = useSelector<StateI>(state => state.restaurantView.ViewStage) as number;

    
    const loading = useSelector<StateI>(state => state.counter.loading);
    const pokemons = useSelector<StateI>(state => state.counter.pokemons);

    const isActive = (value:number)=>{
        return 'btn '+((value===pageStage) ?'active':'default');
    }

    const updateStates = (n: number) =>{
        dispatch(updateState(n));
    }
    interface Restaurant{
        label:string;
        value:number;
    }

    interface ColourOption {
        readonly value: string;
        readonly label: string;
        readonly color: string;
        readonly isFixed?: boolean;
        readonly isDisabled?: boolean;
      }
      
    const [data, setData] = useState<ColourOption[]>(
        [
            { value: 'ocean', label: 'Oceannnnnnnn', color: '#00B8D9'},
            { value: 'blue', label: 'Blue', color: '#0052CC'},
            { value: 'purple', label: 'Purple', color: '#5243AA' },
            { value: 'red', label: 'Red', color: '#FF5630' },
            { value: 'orange', label: 'Orange', color: '#FF8B00' },
            { value: 'yellow', label: 'Yellow', color: '#FFC400' },
            { value: 'green', label: 'Green', color: '#36B37E' },
            { value: 'forest', label: 'Forest', color: '#00875A' },
            { value: 'slate', label: 'Slate', color: '#253858' },
            { value: 'silver', label: 'Silver', color: '#666666' }
        ]
    );

    const [state, setState] = useState();



    useEffect(() => {
        const fetchColors = async()=>{
            const response = await fetch(
                `https://gist.githubusercontent.com/YumilRuedaFlores-Ksquare/1392d19bb568ea159a14dd91ee37da62/raw/0379f2c123f6a2bdd2c5d631a0b1774ab512e990/colors.json`
                )  ;
            console.log(response);

            const actualData = await response.json();
            setData(actualData);
            
        }
        fetchColors();
        
        
        dispatch(fetchPokemonByName({name: 'pikachu'}));
        
    },[dispatch])
    
    console.log('pokemon', pokemons, loading);
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
                    defaultValue={data[0]}
                    isDisabled={false}
                    isLoading={true}
                    //isClearable={true}
                    isRtl={true}
                    //isSearchable={true}
                    //isOptionSelected={true}
                    //onInputChange={(e)=>{console.log(e.value)}}
                    options={data}
                />
            </div>
            <div className="container-view">
                {pageStage===1 && <ViewInformation isChanged={pageStage}/>}
                {pageStage===2 && <ViewSchedule isChanged={pageStage}/>}
                {pageStage===3 && <ViewDisable/>}
            </div>
        </div>
    </>
    )
}