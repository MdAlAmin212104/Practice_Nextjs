import Link from 'next/link';
import React from 'react';
import { getData } from '../services/postData';

const PostPage = async() => {
    const postData = await getData();
    return (
        <div className='min-h-screen'>
            <h1 className='text-center text-4xl font-bold'>All Post</h1>
            <div className='grid grid-cols-4 gap-6'>
                {
                    postData.map(({title, body, id}) => 
                       (<div className='border-2 p-6' key={id}>
                        <h2>Title {title}</h2>
                        <p>Description {body}</p>
                        <Link href={`/post/${id}`}>
                            <button className='btn'>Read More</button>
                        </Link>
                    </div>))
                }
            </div>
        </div>
    );
};

export default PostPage;