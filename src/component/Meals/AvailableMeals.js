import React from "react";
import './AvailableMeals.Module.css';
import Card from '../UI/Card';
import MealItem from "./MealItem/MealItem";
import { useState } from 'react';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
const AvailableMeals = () => {
  //const [Loading, setLoading] = useState(true);

  
  // useEffect(() => {
  //   const fetchMeals = async () => {
  //     const response = await fetch('https://foodapp-8d183-default-rtdb.firebaseio.com/meals.json');
  //     const responseData = await response.json();
  //     console.log(responseData)
  //     const loadedMeals = [];
  //     for(const key in responseData){
  //       loadedMeals.push({
  //         id: key,
  //         name: responseData[key].name,
  //         description: responseData[key].description,
  //         price: responseData[key].price
  //       })
  //     }
  //    setMeals(loadedMeals)
  //   }
  //   fetchMeals();
  // }, []);
   
    const mealsList = DUMMY_MEALS.map(meal => <MealItem 
        key={meal.id} 
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        />)
    return(
        <React.Fragment>
            <section className="meals">
                <Card>
            <ul>
                {mealsList}
            </ul>
            </Card>
            </section>
        </React.Fragment>
    )
}

export default AvailableMeals;