console.log("Let's upgrade");

//here am gonna use conditional statements and ternary operator to grade a person based on his marks

let mark=prompt("Enter your mark correctly:");

//using conditional statements 

if(mark>=90 && mark<=100){
    console.log(`Marks are ${mark} and grade is O `);
}
else if(mark>=80 && mark<90){
    console.log(`Marks are ${mark} and grade is A` )
}
else if(mark>=70 && mark<80){
    console.log(`Marks are ${mark} and grade is B` )
}
else if(mark>=60 && mark<70){
    console.log(`Marks are ${mark} and grade is C` )
}
else if(mark>=50 && mark<60){
    console.log(`Marks are ${mark} and grade is D` )
}
else if(mark>=40 && mark<50){
    console.log(`Marks are ${mark} and grade is E` )
}
else{
    console.log(`Marks are ${mark} and grade is F` )
}


//using ternary operator

let markscore=prompt("Enter your score:")

let score = (markscore>=90 && markscore<=100) ?  `Marks are ${markscore} and grade is O` : (markscore>=80 && markscore<90) ?  `Marks are ${markscore} and grade is A` : (markscore>=70 && markscore<80) ?  `Marks are ${markscore} and grade is B` : (markscore>=60 && markscore<70)  ?  `Marks are ${markscore} and grade is C` : (markscore>=50 && markscore<60) ?  `Marks are ${markscore} and grade is D` : (markscore>=40 && markscore<50) ?  `Marks are ${markscore} and grade is E` : `Marks are ${markscore} and grade is F`;
console.log(score);