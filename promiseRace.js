// const p1 = new Promise((resolve) => setTimeout(resolve, 2000, "Task 1 Completed"));
// const p2 = new Promise((resolve) => setTimeout(resolve, 2000, "Task 2 Completed"));
// const p3 = new Promise((resolve) => setTimeout(resolve, 1000, "Task 3 Completed"));

// Promise.race([p1, p2, p3]).then((result) => console.log("Winner:", result));

// ---------------------------------------------------------------------------------------------------

const p1 = new Promise((resolve) => setTimeout(resolve, 3000, "Success 1"));
const p2 = new Promise((_, reject) => setTimeout(reject, 1000, "Error 2"));
const p3 = new Promise((resolve) => setTimeout(resolve, 1000, "Success 3"));

Promise.race([p1, p2, p3])
    .then((result) => console.log("Winner:", result))
    .catch((error) => console.error("Rejected:", error));
