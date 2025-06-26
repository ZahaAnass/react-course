import React, { useState } from 'react'

function MyComponent() {
    const [car, setCar] = useState({year:2024,
                                    make:"Ford", 
                                    model:"Mustang"});

    const handleYearChange = (event) => {
        setCar( prevCar => ( {...prevCar, year: event.target.value}) );
    }

    const handleMakeChange = (event) => {
        setCar( prevCar => ( {...prevCar, make: event.target.value}) );
    }

    const handleModelChange = (event) => {
        setCar( prevCar => ( {...prevCar, model: event.target.value}) );
    }

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

    return (
        <div style={style}>
            <p style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Your favorite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange} style={{marginBottom: '10px'}}/>
            <input type="text" value={car.make} onChange={handleMakeChange} style={{marginBottom: '10px'}}/>
            <input type="text" value={car.model} onChange={handleModelChange} style={{marginBottom: '10px'}}/>
        </div>
    )
}

export default MyComponent