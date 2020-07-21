console.log("Let's upgrade");

//fetching from JSON placeholder API

//async & await is used to hold a response to run in background

//fetch() is used to fetch from JSON API

async function fetchtodos(){

    const response= await fetch('https://jsonplaceholder.typicode.com/todos');
    //const data = await response;
    const data = await response.json();
    console.log(data);
}

fetchtodos(); //calling function