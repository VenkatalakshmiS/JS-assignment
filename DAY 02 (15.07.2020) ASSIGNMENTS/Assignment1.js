alert("Happy to see u all again")

//Let's see how user interacts with console
//There are 3 ways 
/*
1.Prompt
2.Alert
3.Confirm
*/

//They are called as models 
//where models are like popups
//which waits for user to respond


// prompt()

//it prompts the user to specify ans for something

var pr= prompt("Which colour do you love most?")
console.log("Colour : ",pr);

//in case you didnt return any value then it shows null or undefined.

//default specifiying - [optional]
// syntax: prompt(message, default value)

let confirmation= prompt("hey are u there????","yes");
console.log(confirmation);


//alert()

//it alerts the user 

var ar=alert("Don't exit from the page");
console.log(ar);


//confirm()

//it confirms something from ths user
//like yes or cancel
//Ok -> True
//Cancel -> False

var cr=confirm("Had your food?")
console.log(cr);

