//welcome message to the user

const user=prompt("Enter your name:","Anonymous");

username.innerText=`Welcome ${user}, happy to see you again. `


//toggle up dark mode

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

//------------------------

//dark mode after some 3 sec 

const darkmode= document.getElementById('dark');

function changeColor(){
        setTimeout(()=>{
            document.body.style.backgroundColor='black';
            document.body.style.color='white';
            document.body.style.fontFamily='Monotype Corsiva';
        },3000);
    }

darkmode.onclick=function changecolor(){
    setTimeout(()=>{
            document.body.style.backgroundColor='black';
            document.body.style.color='white';
            document.body.style.fontFamily='Monotype Corsiva';
        },3000);
};


//displaying clock
const clocktime=document.getElementById('time');
function clock(){
    let date = new Date();
    let time= date.toLocaleTimeString();
    clocktime.innerText=time;
}

setInterval(clock,1000);