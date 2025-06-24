import React from 'react'
import List from './List'

function App() {

  const fruits = [{id:1, name:"Apple", calories: 50},
                  {id:2, name:"Banana", calories: 100},
                  {id:3, name:"Orange", calories: 150},
                  {id:4, name:"Mango", calories: 200},
                  {id:5, name:"Watermelon", calories: 250}];

  const vegetables = [{id:1, name:"Carrot", calories: 50},
                  {id:2, name:"Spinach", calories: 100},
                  {id:3, name:"Broccoli", calories: 150},
                  {id:4, name:"Cabbage", calories: 200},
                  {id:5, name:"Spinach", calories: 250}];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
    </>
  )
}


export default App