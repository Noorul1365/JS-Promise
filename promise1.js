const myPromise = new Promise((resolve, reject) => {
    let success = true; // Change to false to simulate rejection
    setTimeout(() => {
        if (success) {
            resolve("Operation Successful!");
        } else {
            reject("Operation Failed!");
        }
    }, 2000);
    console.log("hello");
});

myPromise
    .then((result) => {
        console.log(result); // "Operation Successful!"
    })
    .catch((error) => {
        console.log(error); // "Operation Failed!"
    })
    .finally(() => {
        console.log("Promise execution completed.");
    });