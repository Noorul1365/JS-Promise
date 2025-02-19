// Promise.all([...]) → Resolves when all promises succeed, rejects if any fail.
// Promise.race([...]) → Resolves or rejects as soon as one promise settles.
// Promise.allSettled([...]) → Resolves when all promises settle (regardless of success or failure).
// Promise.any([...]) → Resolves as soon as any promise succeeds.

const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, "One"));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 1000, "Two"));
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 1000, "Error"))
promise3.catch(console.error);

Promise.all([promise1, promise2]) 
    .then(console.log) // ["One", "Two"]
    .catch(console.error);

// Promise.race([promise1, promise2]) 
//     .then(console.log); // "One" (whichever resolves first)

// Promise.allSettled([promise1, promise2, promise3])
//     .then(console.log);

// Promise.any([promise3, promise2]) 
//     .then(console.log) // "Two" (first successful promise)
//     .catch(console.error); // Runs only if all promises reject
