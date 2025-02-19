new Promise((resolve, reject) => {
    resolve(10);
})
    .then((num) => {
        console.log(num); // 10
        return num * 2;
    })
    .then((num) => {
        console.log(num); // 20
        return num * 3;
    })
    .then((num) => {
        console.log(num); // 60
    })
    .catch((error) => console.log(error));
