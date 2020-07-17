console.log("Let's upgrade");

//here we gonna get OS & its version from the user and split up by the space between them
//then we gonna log a formatted output in the console.

let userinput=prompt("Enter your OS name & version (with whitespace):") //getting input from the user

let answer=userinput.split(" ") //using string method split() to split the string based on whitespaces

//console.log(answer)

//as the split() stores the result in array format , I used index values to display the formatted output

console.log(`The OS name is ${answer[0]} and version is ${answer[1]}`); //displaying the formatted output 
