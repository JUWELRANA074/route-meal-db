import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, Button, } from 'react-bootstrap';
import Meal from '../Meal/Meal';
import './Restaurent.css'

const Restaurent = () => {

    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([])

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))

    }, [searchText])


    const hendalSreachField = event => {
        const searchTextValue = event.target.value;
        setSearchText(searchTextValue);
    }

    return (
        <div>
            <div className="input">
                <InputGroup onChange={hendalSreachField} className="mb-3 w-75 m-auto">
                    <FormControl
                        placeholder="Search your Food"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary bg-danger text-white" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </div>

            <div className="meals">

                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {
                        meals.map(meal => <Meal
                            meal={meal}
                            key={meal.idMeal}
                        ></Meal>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Restaurent;