// Loop dari 1 hingga 100
for (let A = 1; A <= 100; A++) {
    if (A % 3 === 0 && A % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (A % 3 === 0) {
        console.log("Fizz");
    }
    else if (A % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(A);
    }
}
