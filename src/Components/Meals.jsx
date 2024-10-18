'use client';
import { mealsData } from '@/app/services/postData'; // Assuming mealsData is an async function
import React, { useState, useEffect } from 'react';

const Meals = () => {
    const [searchText, setSearchText] = useState('');
    const [mealData, setMealData] = useState([]);
    const [error, setError] = useState(null);

    // Fetch meals when searchText changes
    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const data = await mealsData(searchText); // Call the async function
                setMealData(data); // Update state with fetched meal data
            } catch (err) {
                setError('Something went wrong while fetching meals');
            }
        };

        fetchMeals();
    }, [searchText]); // Re-run the effect when searchText changes
    console.log(mealData);
    return (
        <div className="mt-6">
            {/* Input field to set search text */}
            <input 
                onChange={(e) => setSearchText(e.target.value)} 
                className="py-2 px-4 rounded-full" 
                type="text" 
                placeholder="Search your meals" 
            />

            {/* Show error message if something goes wrong */}
            {error && <p className="text-red-500">{error}</p>}
            {/* Display fetched meals */}
            <div className="meals-list">
                {mealData.length > 0 ? (
                    <ul className='grid grid-cols-4 gap-6 '>
                        {mealData.map((meal, index) => (
                            <li className='border-2 p-6' key={index}>{meal.strMeal}</li>
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
