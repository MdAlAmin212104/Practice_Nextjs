export const getData = async()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return posts;
}


export const singleData = async(id)=> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    return post;
}

export const mealsData= async(letter)=> {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${letter}`);
    const meals = await res.json();
    return meals.meals;
}