//ASSIGNMENT 2 (14.07.2020)

// Difference between var , let & const


//EXAMPLES OF var



//you know what var works everywhere
//it is said to be a function scope


// let me explain with a student example

//student id  assignment
var id =22;                          // number
console.log("Student ID:",id);

//name assignment
var name="abi"                       // string 
console.log("Name :",name);

//matured enough or not
var matured=false                    //boolean
console.log("Matured Enough:",matured);

//marks
var marks=[50,60,70]                  //array
console.log("Marks:",marks)

//parent names
var parents={
    dad: "john",                     //objects
    mom: "catherine"
}
console.log(parents);

//he didnt specified nationality so it is undefined
//that is in tech terms value for nationality is not assigned
var nationality;
console.log(nationality);            //undefined

var gender=null;
console.log(gender);                //null



//EXAMPLES OF let


// let allows to maintain the scope of variable
//let - something like local variable
//it is said to be block scope

{
let pid;         // it can be left un-initialized

let pincode=641027;
pincode=641030;
console.log("Let us see what it prints:",pincode); //it prints value of local variable

}
//console.log(pincode);

// it clearly shows the scope of a variable


//EXAMPLE OF const

// the values of const doesn't change

const zipcode="641050";
console.log("Zipcode:",zipcode);
zipcode="987653";

const genders=["male","female"]
console.log(genders);
genders.push("agender")  // pushing new element into it 
console.log(genders);

 // re-assignment to const variable cant be done
genders=["zero","null"] //this cant be done


//using $ sign
const $genders=["male","female"]
console.log($genders);
$genders.push("agender"); // pushing new element into it 
console.log($genders);


