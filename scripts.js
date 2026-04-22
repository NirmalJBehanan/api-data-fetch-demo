//.then and .catch

//fetch data from api endpoints
const data = fetch("https://jsonplaceholder.typicode.com/users");
//convert the response into array of object format
data.then(response => response.json()
//consoling that data
    .then(data => console.log(data))
//if any error happens durning fetch, catch works
    .catch(error => console.log(error)));



 //async and await

async function fetchData() {
    try {
        //fetch data from api endpoints
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        //convert the response into array of object format
        const data = await response.json();
        //consoling that data
        console.log(data);
    }
    //if any error happens durning fetch, catch works
    catch (error) {
        console.log(error);
    }
}
//function calling
fetchData()