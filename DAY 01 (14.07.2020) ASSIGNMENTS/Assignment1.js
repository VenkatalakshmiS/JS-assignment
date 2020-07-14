//assignment 1 (14.07.2020)
//console functions
console.log("LET'S UPGRADE");

// console.log() is used to display any statement in console of webpage.
console.log("hello there!!!");

//to display any error
console.error("hey here comes an error. lookout")

//to display a warning message
console.warn("hey warn me");

//to determine the time taken to execute a bunch of code
console.time("Let me show the time required here");

//am just using some decorative thing to display the contents here

var student1 ={"id":1,"name":"ram","dept":"IT"}
var student2 ={"id":2,"name":"deepa","dept":"CT"}
var student3 ={"id":3,"name":"kavya","dept":"CS"}

//dont use like this
console.log(student1);
console.log(student2);
console.log(student3);

// use this as an alternative method
console.log({student1,student2,student3})

//to display in a table
console.table({student1,student2,student3});

//customized message is displayed by the use of %c

console.log('%c Hey there lookup am the customised message. Am I beautiful to look???','color:orange')

//here I will end the time 
console.timeEnd("Let me show the time required here")