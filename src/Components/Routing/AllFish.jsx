import FishList from "../Array-Objects/FishList";
import FishForm from "../Array-Objects/FishForm";
import AddFish from "./AddFish";
import SearchFish from "./SearchFish";


const AllFish = () => {
    return ( 
        <>
        <AddFish/>
        <h2> Our Collection! </h2>
        <br></br>
        <br></br>
        <FishList/>
        <br></br>

        </>
     );
}
 
export default AllFish;