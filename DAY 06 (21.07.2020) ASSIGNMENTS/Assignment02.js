
let input=prompt("Enter a number to display its multiplication table:");
display.innerHTML=`Multiplication table of ${input}:`;

function multitable(){
    let num=document.getElementById('list');
    for(let i=1;i<=10;i++){
        let result=input*i;
        // console.log(result);
        let number=[`${input}  x  ${i}  =  ${result}`];
        //console.log(number);
        number.forEach(elements=>{
            num.innerHTML+=`<li>${elements} </li><br>`;
        })

    }
}

multitable();



