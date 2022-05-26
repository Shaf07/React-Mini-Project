const ObjectFish = ({data}) => {
    const {name, colour, age, diet} = data;
    return ( 
        <>
            <h2> Fish name: {name} </h2>
            <h2> Colour: {colour} </h2>
            <h2> Age: {age} </h2>
            <h2> Diet: {diet} </h2>
        </>
     );
}
 
export default ObjectFish;