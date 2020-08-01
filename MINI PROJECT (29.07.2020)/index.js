console.log("Hello Let'supgraders");

const addbutton=document.querySelector('#addbtn');
const removebutton = document.querySelector('#removebtn');
const list=document.querySelector('#listitems');

//adding items to the list
addbutton.onclick=function(){
    let items=document.querySelector('#todoitems').value;
    let textval=document.createTextNode(items);
    let listitem=document.createElement('li');
    listitem.appendChild(textval);
    list.appendChild(listitem);
    console.log(listitem);
    document.forms.form1.reset();

    //saving in local storage
    localStorage.setItem("li",JSON.stringify(listitem.innerText));
    localStorage.getItem("li");   
    
}

//removing items from list (FirstInFirstOut manner)

removebutton.onclick=function(){   
    list.removeChild(list.childNodes[0]);
}




