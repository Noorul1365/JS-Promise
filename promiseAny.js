// const p1 = new Promise((_, reject) => setTimeout(reject, 1000, "Error 1"));
// const p2 = new Promise((resolve) => setTimeout(resolve, 2000, "Success 2"));
// const p3 = new Promise((resolve) => setTimeout(resolve, 3000, "Success 3"));

// Promise.any([p1, p2, p3])
//     .then((result) => console.log("First Success:", result))
//     .catch((error) => console.error("All Failed:", error));


// -----------------------------------------------------------------------------------------------

// If all promise fail then aggregateError

const p1 = new Promise((_, reject) => setTimeout(reject, 1000, "Error 1"));
const p2 = new Promise((_, reject) => setTimeout(reject, 2000, "Error 2"));
const p3 = new Promise((_, reject) => setTimeout(reject, 3000, "Error 3"));

Promise.any([p1, p2, p3])
    .then((result) => console.log("First Success:", result))
    .catch((error) => console.error("All Failed:", error.errors)); // error.errors contains all rejection reasons
