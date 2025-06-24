
function List() {

    const fruits = [{id:1, name:"Apple", calories: 50},
                    {id:2, name:"Banana", calories: 100},
                    {id:3, name:"Orange", calories: 150},
                    {id:4, name:"Mango", calories: 200},
                    {id:5, name:"Watermelon", calories: 250}];

    fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL ORDER
    fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL ORDER
    fruits.sort((a, b) => a.calories - b.calories); // ASCENDING ORDER
    fruits.sort((a, b) => b.calories - a.calories); // DESCENDING ORDER

    const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
    const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

    return (
        <>
            <h2>List</h2>
            <ol>
                <h3>Low Calorie Fruits</h3>
                {lowCalFruits.map((fruit) => (
                    <li key={fruit.id}>
                        {fruit.name}: &nbsp;
                        <b>{fruit.calories}</b>
                    </li>
                ))}
            </ol>
            <ol>
                <h3>High Calorie Fruits</h3>
                {highCalFruits.map((fruit) => (
                    <li key={fruit.id}>
                        {fruit.name}: &nbsp;
                        <b>{fruit.calories}</b>
                    </li>
                ))}
            </ol>
        </>
    );


}

export default List
