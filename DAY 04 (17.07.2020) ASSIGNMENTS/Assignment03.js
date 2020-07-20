console.log("Let's upgrade");

//Let's first create a shopping list

let shoppingList=["Tomatoes","Noodles","Pasta","Wheat","Spinach","Onions"];

console.log("Let's view shopping list first: ");
console.log(shoppingList);

//Here comes our favourite grocery shop

//Let's begin our shopping

//oh sorry I've missed some products in my shopping list. I just remembered when I get into grocery shop

let shoppingBasket=["Cookies",...shoppingList,"Icecreams","Chocolates","Bread","Jam"]  //shoppingList with some additional products

//this is done by spread operator , so the shopping list gets updated in new array (like copying into a new array)

console.log("Let's look into shopping basket:");
console.log(shoppingBasket);