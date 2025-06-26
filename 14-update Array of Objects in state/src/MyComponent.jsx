import React, { useState } from "react";

function MyComponent(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    const style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        border: '1px solid black',
        borderRadius: '10px',
        margin: '20px auto',
        width: '300px'
    }

    function handleAddCar(){
        const newCar = {year: carYear, make: carMake, model: carModel};
        setCars(prevCars => [...prevCars, newCar]);
    }

    function handleRemoveCar(index){
        setCars(prevCars => prevCars.filter((_, i) => i !== index));
    }

    function handleYearChange(event){
        setCarYear(event.target.value);
    }

    function handleMakeChange(event){
        setCarMake(event.target.value);
    }

    function handleModelChange(event){
        setCarModel(event.target.value);
    }

    return(
        <div style={style}>
            <h2 style={{marginBottom: '20px'}}>List of Cars</h2>
            <ul style={{listStyle: 'none', padding: '0px'}}>
                {cars.map((car, index) => 
                    <li key={index} style={{marginBottom: '10px'}} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                )}
            </ul>
            <input type="number" id="carYearInput" placeholder="Enter car year" value={carYear} onChange={handleYearChange} style={{marginBottom: '10px'}}/>
            <input type="text" id="carMakeInput" placeholder="Enter car make" value={carMake} onChange={handleMakeChange} style={{marginBottom: '10px'}}/>
            <input type="text" id="carModelInput" placeholder="Enter car model" value={carModel} onChange={handleModelChange} style={{marginBottom: '10px'}}/>
            <button onClick={handleAddCar} style={{width: '100%', padding: '10px', backgroundColor: 'lightblue'}}>Add Car</button>
        </div>
    )
}

export default MyComponent