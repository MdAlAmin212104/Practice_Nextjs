'use client';
import { mealsData } from '@/app/services/postData'; // Assuming mealsData is an async function
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Meals = () => {
    const [searchText, setSearchText] = useState(''); // Manages input value
    const [mealData, setMealData] = useState([]); // Stores fetched meal data
    const [error, setError] = useState(null); // Handles errors

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await mealsData(searchText); // Call async function with search text
            setMealData(data); // Update state with the fetched data
        } catch (err) {
            setError('Something went wrong while fetching meals');
        }
    }

    return (
        <div className="mt-6">
            {/* Input field to set search text */}
            <form onSubmit={handleSubmit}>
                <input
                    className="py-3 px-4 rounded-full rounded-r-none"
                    type="text"
                    placeholder="Search your meals"
                    value={searchText} // Bind input value to state
                    onChange={(e) => setSearchText(e.target.value)} // Update state on input change
                />
                <button type="submit" className="btn btn-primary rounded-l-none">Search</button>
            </form>

            {error && <p className="text-red-500">{error}</p>}

            {/* Display fetched meals */}
            <div className="meals-list mt-6">
                {mealData.length > 0 ? (
                    <ul className="grid grid-cols-3 gap-6">
                        {mealData.map((meal, index) => (
                            <div className="border-2 p-6" key={index}>
                                <Image src={meal?.strMealThumb} alt='meal image section' width={500} height={500}/>
                                <h3>{meal.strMeal}</h3>
                                <p>{meal.strInstructions}</p>
                            </div>
                        ))}
                    </ul>
                ) : (
                    <p>No meals found</p>
                )}
            </div>
        </div>
    );
};

export default Meals;
