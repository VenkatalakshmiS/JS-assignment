console.log("Let's upgrade");

//to filter the odd number in an array
// to cube the filtered numbers

//creating an empty array
let arr =[];

//getting a positive number from user
let positivenumfromuser=prompt("Enter a positive number:");
console.log(`The user entered positive number is ${positivenumfromuser}`);

//inserting numbers into array till the positive number specified by user using push()
for (i=1;i <= positivenumfromuser;i++){
    arr.push(i);
}
console.log(arr); //displaying array

//filtering odd numbers form the array

let oddnum=arr.filter(ele=>ele%2!=0);
console.log(oddnum);

// cube of all the odd numbers filtered from the above array
let cubeofodd=arr.filter(element=>element%2!=0).map(element=>element**3);
console.log(cubeofodd);






