import AddFish from "./FishObject";
import {useState} from 'react';

const FishAdd = () => {

    const [fishData, setfishData] = useState({});

    // Add my method to set the data
    const setData = (event) => {
        const {name, value} = event.target;

        setFishData((prevValue) => ({
           ...prevValue, 
           [name]: value,
        }))
    };

    return ( 
        <>
            <input type="text" name="name" onChange={(event) => setData(event)}/>
            <input type="text" name="colour" onChange={(event) => setData(event)}/>
            <input type="text" name="age" onChange={(event) => setData(event)}/>
            <input type="text" name="diet" onChange={(event) => setData(event)}/>
            <AddFish data={fishData}/>
        </>
     );
}
 
export default FishAdd;