console.log("Let's upgrade");

function isPrime(num) {
    for ( var i = 2; i < num; i++ ) { //checks the condition
        if ( num % i === 0 ) { //if number returns 0 as remainder then that is not a prime number
            return false;
        }
    }
    return true;
}

function display(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) { 
        if ( isPrime(i) ) { //calls the function isPrime()
            arr.push(i); //inserts element in array
        }
    }
    console.log(`Prime Numbers between range ${input} :`,arr); // use arr result on your own
}
let input=prompt("Enter the range:") //prompts the user to enter specific range
display(input);


