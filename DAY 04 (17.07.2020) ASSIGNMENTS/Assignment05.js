console.log("Let's upgrade");

let sales=prompt("Enter your sales: ");
let salary= 20000;
console.log("The salary of employee:",salary);
let totcommission =0;

if(sales>=0 && sales<=5000){
    totcommission=(2/100)*salary;
    
}
else if(sales>5000 && sales<=10000){
    totcommission=(5/100)*salary;
    
}
else if(sales>10000 && sales<=20000){
    totcommission=(7/100)*salary;
    
}
else if(sales>20000 ){
    totcommission=(10/100)*salary;
    
}
console.log("The commission gained by employee:",totcommission);
console.log("The total reward of an employee with salary is :",(salary + totcommission))

