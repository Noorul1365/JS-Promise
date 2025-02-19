// It waits for all promises to complete (resolve or reject).
// Returns an array of objects describing the outcome of each promise.
// It never rejects—even if all promises fail.

// const p1 = Promise.resolve("Task 1 Completed");
// const p2 = Promise.reject("Task 2 Failed");
// const p3 = new Promise((resolve) => setTimeout(resolve, 2000, "Task 3 Completed"));

// Promise.allSettled([p1, p2, p3]).then((results) => console.log(results));

//-----------------------------------------------------------------------------------------

const fetch1 = fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json());
const fetch2 = fetch("https://jsonplaceholder.typicode.com/posts/invalid-url").then(res => res.json());
const fetch3 = fetch("https://jsonplaceholder.typicode.com/posts/3").then(res => res.json());

Promise.allSettled([fetch1, fetch2, fetch3]).then((results) => {
    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`API ${index + 1} Success:`, result.value);
        } else {
            console.log(`API ${index + 1} Failed:`, result.reason);
        }
    });
});
