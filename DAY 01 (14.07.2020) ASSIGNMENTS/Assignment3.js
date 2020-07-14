//ASSIGNMENT 3 (14.07.2020)

//DATATYPES IN JAVASCRIPT

//LIST OF DATATYPES
/*
Number
String
Boolean
Undefined
Null
Object
Symbol*/


//let me again explain with a student example


// number
//an integer, a floating point value, an exponential value, a ‘NaN’ or a ‘Infinity’.

var id =22;                     //student id  assignment                 
console.log("Student ID:",id);


//string 
//any group of characters enclosed by a single or double-quotes or by backticks.

var name="abi"                      //name assignment     
console.log("Name :",name);

//boolean
//has only two values, true and false.

var matured=false                    //matured enough or not
console.log("Matured Enough:",matured);

//array
//object data type. 
//contains more than one value with a numerical index, where the index starts from 0.

var marks=[50,60,70]                  //marks
console.log("Marks:",marks)

 //objects
//contains key-value pairs in its address

var parents={                       //parent names
    dad: "john",                    
    mom: "catherine"
}
console.log(parents);

//undefined
//variable that is not defined.

var nationality;                    //he didnt specified nationality so it is undefined
console.log(nationality);          //that is in tech terms value for nationality is not assigned


//null
//A null value means no value.
var gender=null;
console.log(gender);      

//symbol
//defines a property of an object which is private to the object.
var employee = {
    name:'arun',
    age: 25,
    city: 'coimbatore'
 }
 var occupation=Symbol('engineer');

 typeof(occupation);  //returns symbol
 console.log(employee)
