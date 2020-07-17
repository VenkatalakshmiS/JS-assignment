console.log("Let's upgrade");
 
//to check whether the number given by user is even or odd

let num= prompt("Enter any number:");

//condition to check whether the number is even or odd 

//funtion definition

function evenodd(x){
    if (x % 2 == 0 ){
        console.log(`The number entered is ${x} and Number is even`);
     
    }        
    else{
        console.log(`The number entered is ${x} and Number is odd`);
        
    }
}

//function call

evenodd(num);

