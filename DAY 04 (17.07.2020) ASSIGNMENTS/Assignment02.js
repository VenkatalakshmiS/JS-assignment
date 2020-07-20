console.log("Let's upgrade");

//Here am gonna destruct an object

//let's see the given object

const student={
    name : "Helsinki",
    age : 24,
    projects : {
        diceGame : "Two player dice game using JavaScript"
    }
}


// traditional method of destructing objects

console.log(student.name);              //destruct name from student
console.log(student.age);               //destruct age from student
console.log(student.projects.diceGame)  //destructs dicegame from projects which is inside student


//Let's see how to destruct in Modern Java Script

const {name,age,projects:{diceGame}}=student;
console.log(name,age,diceGame);     //destructs name , age & dicegame from student