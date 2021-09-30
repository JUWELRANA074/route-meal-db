import React from 'react';
import { Link, } from 'react-router-dom';
import './Meal.css'

const Meal = (props) => {

    const { idMeal, strMeal, strInstructions, strMealThumb } = props.meal;

    const url = `/meal/${idMeal}`;

    return (
        <div>

            <div className="col">
                <div className="card">
                    <img src={strMealThumb} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Name: {strMeal} {idMeal} </h5>
                        <p className="card-text">Discription: {strInstructions.slice(0, 150)}</p>

                        {/* <Link to={url}>Order Now</Link> */}
                        <Link to={url} > <button className="btn btn-danger text-white" >Order Now</button> </Link>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default Meal;