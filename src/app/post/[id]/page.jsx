import React from 'react';
import {singleData} from '../../services/postData.js';



const SingleData = async({params}) => {
    const {id} = params;
    const {title, body} = await singleData(id);
    return (
        <div>
            <h1>Single Data section </h1>
            <p>Title : {title}</p>
            <p>Description : {body}</p>
        </div>
    );
};

export default SingleData;