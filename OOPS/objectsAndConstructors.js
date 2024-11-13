//by default js does not have classes
//however classes was introduced to js on ES6 features
//Js is primarily a prototype based language, its classes are syntactic sugar over existing
//prototype-based inheritance mechanisms.
//Classes in js makes it easy for devs coming from C++ or java bg to code here as well



//lets start by creating an object literal
//object literal is a collection of properties and method
const user={
    userName:'Aditya',
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        console.log('The user has finally logged in'+ this.userName);
        this.greetings=function(){
            return 'Hello world';
        }
        return this;
    }
}

user.getUserDetails();

//the above object is for one user
//similarly if we have 10 users we have to create 10 different object literals, very ineffcient
//that's why construction function comes into picture
//when we do something like below:
// const promise=new Promise();
//new creates a new instance of Promise constructor;
//where each instance depicts a different value and can be accessed using this

//below we will create our own constructor function
function User(username,loginCount,isLoggedIn){ //constructor function starts with upperCase
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    return this;// we can also remove it as constructor fns. implictly return the object;
}
const userOne=new User('Aditya',2,true);//by use of new an empty object aka "instance" is created than constructor fn is called and is binded with its own this keyword and initializes the username, loginCount & isLoggedIn;
const userTwo=new User('Annu',4,false);
console.log(userOne);
console.log(userTwo);

//let assume we removed the new keyword from userOne and userTwo, than the value of userOne will be
//overwritten by the userTwo value; because of not creating the new instance 

//please read about the following keywords on your own
//these are also called 4 pillars of OOPS with example
// 1. Abstraction
// 2. Encapsulation
// 3. Inheritance
// 4. Polymorphism
