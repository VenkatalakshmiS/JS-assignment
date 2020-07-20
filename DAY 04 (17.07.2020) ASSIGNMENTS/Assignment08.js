console.log("Let's upgrade");

// function ask(question,yes,no){
//     if(confirm(question)) yes()
//     else no();
// }
// ask(
//     "Do you agree?",
//     function() { alert("You agreed");},
//     function() { alert("You cancelled the execution");}
// );

let ask =(question,yes,no) => { //arrow function is used to replace function expression
    if(confirm(question)) yes()
    else no();
}
ask(
    "Do you agree?",
    function() { alert("You agreed");},
    function() { alert("You cancelled the execution");}
);

