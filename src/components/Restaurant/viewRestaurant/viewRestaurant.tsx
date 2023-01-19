import Sidebar from '../../Sidebar/Sidebar'
import './viewRestaurant.css'

type Props={
    title?: string
}
export function ViewRestaurant({title="viewRestaurant"}:Props){

    return (
    <>
        <Sidebar/>
    </>
    )
}