console.log("Let's upgrade");

//creating class user

//base class

class user{
    constructor(name,age,email){
        this.name=name;
        this.age;
        this.email;
        this.coins=0;
        this.courses=[];

    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;

    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;

    }
    
}

//class moderator
 
class moderators extends user{
    constructor(name,age,email){
        super(name,age,email);      
        
    }
    insertcoin(){
        this.coins++;
        console.log(`${this.name} has ${this.coins} coins`);      
        
    }
    removecoin(){
        this.coins--;
        console.log(`${this.name} has ${this.coins} coins`);      
        
    }   
    
}    

//class administrator

class administrator extends moderators{
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);

    }

    removeCourse(user,course){
        user.courses.pop(course);
        console.log(user);

    }
}

//instantiation

let user1 = new user("Deepa",22,"deepa@gmail.com");
let user2 = new user("Kavi",22,"kavi@gmail.com");
let mod= new moderators("bala",22,"bala@gmail.com");
let admins = new administrator("Raj",25,"raj@gmail.com");

//values are gathered up into an array called users.

let users=[user1,user2,mod,admins];
users.forEach(ele=>{
    console.log(ele);

});

//invoking methods 

user1.login().logout();
user2.login().logout();

mod.login().insertcoin();
mod.login().removecoin();

admins.login().addCourse(user1,"Python");
admins.logout().addCourse(user1,"Rprogramming");

admins.login().addCourse(user2,"Java");
admins.logout().addCourse(user2,"JavaScript");


admins.login().removeCourse(user2,"Java");
