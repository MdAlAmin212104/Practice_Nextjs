import Link from 'next/link';
import React from 'react';

const BlogPage = () => {
    return (
        <div className='min-h-screen container mx-auto'>
            <h1 className='text-center font-bold text-5xl'>this is Blog section</h1>
            {
                blog.map(item => (
                    <div key={item.id} className='border-b py-3'>
                        <h2 className='text-xl font-bold'>{item.title}</h2>
                        <p>{item.description}</p>
                        <Link href={`/blog/${item.id}`}><button className='btn'>Details</button></Link>
                    </div>
                ))
            }
        </div>
    );
};

export default BlogPage;


const blog = [
    {
        "id": 1,
        "title": "The Future of Web Development",
        "description": "An in-depth look at the latest trends and technologies shaping the future of web development."
    },
    {
        "id": 2,
        "title": "Introduction to React.js",
        "description": "A beginner's guide to understanding the fundamentals of React.js and how to get started with building components."
    },
    {
        "id": 3,
        "title": "Mastering CSS Grid",
        "description": "A comprehensive guide to mastering CSS Grid for creating complex web layouts with ease."
    },
    {
        "id": 4,
        "title": "Top 10 JavaScript Frameworks",
        "description": "A curated list of the top 10 JavaScript frameworks in 2024, along with their key features and use cases."
    },
    {
        "id": 5,
        "title": "How to Optimize Web Performance",
        "description": "Essential tips and techniques to optimize web performance and reduce loading times for a better user experience."
    }
      
      
]