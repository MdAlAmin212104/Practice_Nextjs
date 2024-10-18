import React from 'react';

const dynamicPage = ({params}) => {
    console.log(params.features);
    return (
        <div>
            this is a dynamic page section
        </div>
    );
};

export default dynamicPage;