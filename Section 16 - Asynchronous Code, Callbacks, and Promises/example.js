// Example Syntax for Callbacks
function fetchData(callback) {
	setTimeout(() => { callback('Data Loaded'); }, 2000);
}
fetchData(console.log);

////////////////////////////////////////////////////////////////////////////////

// Example Syntax for Promises
let promise = new Promise((resolve, reject) => {
	setTimeout(() => resolve('Success!'), 2000);
});
promise.then(console.log);

////////////////////////////////////////////////////////////////////////////////

// Example Syntax for using the fetch() api
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));

// Example that demonstrates making an HTTP request with the Fetch API
async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched Data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function when the script loads
document.addEventListener('DOMContentLoaded', () => {
    getData();
});

////////////////////////////////////////////////////////////////////////////////

// // Example Syntax for Async and Await
// async function fetch_data() {
// 	let response = await fetch('https://api.example.com');
// 	let data = await response.json();
// 	console.log(data);
// }

// // Example demonstrating async/await with fetch
// async function fetchData() {
//     try {
//         let response = await fetch('https://api.example.com');
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// // Call the function
// document.addEventListener('DOMContentLoaded', () => {
//     fetchData();
// });
