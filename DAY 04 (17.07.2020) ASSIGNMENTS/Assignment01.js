console.log("Let's upgrade");

// to create a for loop that iterates upto 100 
//displaying "fizz" at multiples of 3
//displaying "buzz" at multiples of 5
//displaying "fizzbuzz" at multiples of 3 and 5

for (i=1;i<=100;i++){
    
    if(i%3==0 && i%5==0){           //it checks multiples of 3 and 5
        console.log("fizzbuzz"); 
        continue;                   //it skips one iteration
    }
    else if(i%3==0){                //it checks multiples of 3
        console.log("fizz");
        continue;                   //it skips one iteration
    }
    else if(i%5==0){                //it checks multiples of 5
        console.log("buzz");
        continue;                   //it skips one iteration
    }    
      
    console.log(i);                 //this prints number
}
