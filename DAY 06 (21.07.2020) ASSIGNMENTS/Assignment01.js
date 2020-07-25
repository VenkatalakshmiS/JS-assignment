console.log("Let's upgrade");

let colorarr=["pink","wheat","lightslategray","yellow","aqua","yellowgreen","violet","maroon","aquamarine"];

function loopOverColors(){
    
    for(let i =0;i<colorarr.length;i++){
        ((i)=> {
            setTimeout(()=> {
                document.bgColor = colorarr[i];
            }, 5000 * i);
        })(i);
    }
}
    

loopOverColors();
