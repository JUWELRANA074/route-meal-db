import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './MealDetails.css'


const MealDetails = () => {

    let { mealId } = useParams();

    const [meal, setMeal] = useState({});
    // console.log(meal[0].strMeal);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]));
    }, [mealId])


    return (
        <div className="details bg-danger" >
            <h2 className="text-white" >Details  of Your Order:{mealId}</h2>

            <div className="card">
                <img src={meal.strMealThumb} className="card-img-top my-image " alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {meal.strMeal}</h5>
                    <p className="card-text">Discription: {meal.strInstructions}</p>

                    <Link to="/resturent" className="btn btn-danger">Go Back</Link>
                </div>
            </div>

        </div>
    );
};

export default MealDetails;