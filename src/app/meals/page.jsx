
import Meals from '@/Components/Meals';
import React from 'react';

const mealsPage = () => {
    return (
        <div className='min-h-screen p-12'>
            <h2 className='text-center font-semibold text-4xl text-red-500'>Choose your meals</h2>
            <p>Choose your meals of search -----------</p>
            <Meals/>
            
        </div>
    );
};

export default mealsPage;