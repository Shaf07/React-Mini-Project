import ObjectFish from "./ObjectFish";
import { useState } from 'react';
import SearchFish from "../Routing/SearchFish";

const FishForm = () => {

    const [fishData, setFishData] = useState({});

    const [fishArray, setFishArray] = useState([]);

    const setData = (event) => {
        const { name, value } = event.target;

        setFishData((prevValue) => ({
            ...prevValue,
            [name]: value,
        }))
    };
    const addToArray = () => {
        setFishArray((prevArray) => {     
            return[...prevArray, fishData] // Same thing as array.push, ignore all data and put this at the end
        });
        
        // I want my pizzaData to reset to empty 
        setFishData({}) // Set Pizza Object state to {} empty curly brackets (empty object)
    }
return (
    <>
        <label name="name"> Name: </label>
        <input type="text" name="name" onChange={(event) => setData(event)} />
        <label name="size"> Colour: </label>
        <input type="text" name="colour" onChange={(event) => setData(event)} />
        <label name="age"> Age: </label>
        <input type="text" name="age" onChange={(event) => setData(event)} />
        <label name="diet"> Diet: </label>
        <input type="text" name="diet" onChange={(event) => setData(event)} />

        {/* Button to add this info as an object to our array */}
        <button type="button" onClick={addToArray}> Click to add fishy! </button>
        <button type="button" onClick={SearchFish}> Search! </button>
        {
            fishArray.map((fish) => {
                return <ObjectFish data={fish} />
            })
        }
    </>
);
}

export default FishForm;