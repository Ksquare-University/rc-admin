import './InformationForm.css'


export const InformationForm = () =>{


    return(
        <div className='RestaurantInfo'>
            <input
            placeholder="Restaurant Name"
            type="text"
             />

            <input
            placeholder="Food Type:"
            type="text"
             />

              <input
            placeholder="Cell:"
            type="text"
             />

            <input
            placeholder="Adress:"
            type="text"
             />

            <input
             placeholder="More Info:"
            type="text"
             />
            </div>
    );
}