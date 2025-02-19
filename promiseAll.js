// const p1 = Promise.resolve("One");
// const p2 = Promise.resolve("Two");
// const p3 = new Promise((resolve) => setTimeout(resolve, 1000, "Three"));

// Promise.all([p1, p2, p3])
//     .then((results) => console.log(results)) // ["One", "Two", "Three"]
//     .catch((error) => console.error(error));

// -------------------------------------------------------------------------

// const p1 = Promise.resolve("Success 1");
// const p2 = new Promise((_, reject) => setTimeout(reject, 1000, "Error!"));
// const p3 = Promise.resolve("Success 3");

// Promise.all([p1, p2, p3])
//     .then((results) => console.log(results))
//     .catch((error) => console.error("Rejected with:", error));

// ----------------------------------------------------------------------------

// Fetching Multiple APIs Using Promise.all()

// const fetch1 = fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json());
// const fetch2 = fetch("https://jsonplaceholder.typicode.com/posts/2").then(res => res.json());

// Promise.all([fetch1, fetch2])
//     .then((data) => console.log("API Responses:", data))
//     .catch((error) => console.error("Error fetching data:", error))

// -----------------------------------------------------------------------------------

const p1 = new Promise((resolve) => setTimeout(resolve, 1000, "Task 1"));
const p2 = new Promise((_, reject) => setTimeout(reject, 1500, "Task 2 Failed"));
const p3 = new Promise((resolve) => setTimeout(resolve, 2000, "Task 3"));

Promise.all([
    p1.catch(err => err), // Catch and return error instead of rejecting all
    p2.catch(err => err),
    p3.catch(err => err),
])
    .then((results) => console.log("Results:", results))
    .catch((error) => console.error("Error:", error));




