let username:string="Khadga Bahadur shrestha";
let age:number=25;
let isMarried:boolean=false;

console.log(`${username} is ${age} and ${isMarried}`);


function greet(name:string){
    return `Hello ${name}`;
}

console.log(greet('Khadga Shrestha'))

enum Status{
    active,inactive
}

type userType={
    name:string,
    age:number,
    skills:string[],
    preferences:{
        key:string,
        value:any
    },
    roles?:[string,number],
    status:Status
}

const myUser:userType={
    name: "Khadga Shrestha",
    age: 25,
    skills: ["Flutter","Android","Express js","Mongo DB"],
    preferences: {
        key: "flutter",
        value: "Mobile application development"
    },
    roles:["admin",100],
    status:Status.active
};

console.log(myUser);
console.log(myUser.skills.length);
console.log(myUser.preferences.key);
console.log(myUser.roles);
console.log(myUser.status==Status.active);

const s=[
    "a",2,3
];

console.log(s);


let score:string|number;
score=12;
console.log("Score:",score);
score="12pt";
console.log("Score:",score)

enum AuthState{
    authenicated,unauthenticated,uninitialized
}

const authState:AuthState=AuthState.uninitialized;

let randomMessage:any="Hello";
console.log(randomMessage);
randomMessage=12;
console.log(randomMessage);
randomMessage=false;
console.log(randomMessage);

let myMessage="Hey How are you?";
// myMessage=false;

type AppState=AuthState|boolean

function getMessage(name:string,age:number):string{
    return `Hello ${name} Are you ${age}`;
}

console.log(getMessage('Ray',30));

function add(a:number,b:number){
    return a+b;
}

let action:Function;
action=add;

console.log(action(10,20))

function myCall(a:number,b:number,cb:(res:number)=>void){
   return cb(a+b);
}

myCall(10,10,(x)=>{
    console.log("Result:"+x);
});