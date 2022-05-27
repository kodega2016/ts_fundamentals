### Lab1: Data Types & Functions

##### Core Data Types:

- string
- number
- boolean

```typescript
let username: string = "Khadga Bahadur shrestha";
let age: number = 25;
let isMarried: boolean = false;
console.log(`${username} is ${age} and ${isMarried}`);
//Khadga Bahadur shrestha is 25 and false
```

##### User Define Data Type:

We can define new type as:

```typescript
type userType = {
  name: string;
  age: number;
  skills: string[];
  preferences: {
    key: string;
    value: any;
  };
};
```

##### Tuple Data Type

Used to create fixed length and fixed type array

```typescript
roles?:[string,number]

roles:["admin",100],
```

##### Union Type

Variable that can hold multiple type of value

```typescript
let score: string | number;
score = 12;
console.log("Score:", score);
score = "12pt";
console.log("Score:", score);
```

##### Enum Type

```typescript
enum AuthState {
  authenicated,
  unauthenticated,
  uninitialized,
}

const authState: AuthState = AuthState.uninitialized;
```

##### Any Type

Variable that can hold any type of value:

```typescript
let randomMessage: any = "Hello";
console.log(randomMessage);
randomMessage = 12;
console.log(randomMessage);
randomMessage = false;
console.log(randomMessage);
```

##### Literal Type

A literal is a more concrete sub-type of a collective type. What this means is that "Hello World" is a string, but a string is not "Hello World" inside the type system.

```typescript
let myMessage = "Hey How are you?";
// myMessage=false;
```

##### Type alias

We can define type using type keyword as

```typescript
type AppState = AuthState | boolean;
```

#### Functions

##### Function Return Type

We can define the return type of a function as

```typescript
function getMessage(name: string, age: number): string {
  return `Hello ${name} Are you ${age}`;
}

console.log(getMessage("Ray", 30));
```

##### Function as Type

We can pass function as a type

```typescript
function add(a: number, b: number) {
  return a + b;
}

let action: Function;
action = add;

console.log(action(10, 20));
```

##### Function with callback

We can pass callback function to a function as

```typescript
function myCall(a: number, b: number, cb: (res: number) => void) {
  return cb(a + b);
}

myCall(10, 10, (x) => {
  console.log("Result:" + x);
});
```

### Lab2: Typescript Compilation

##### Compile single file

We can compile/watch single file by using

> tsc app.ts -w

##### Compiling multiple ts file

To compile all the .ts file in the project we need to setup
ts by

> tsc --init

after this we can watch/compile all the ts file by using

> ts

##### Exclude/Include file from compiling by tsc

```typescript
//Exclude tsc files
"exclude": [
"node_modules",
"analytics.ts"
]
//Include tsc files
"include": [
"node_modules",
"analytics.ts"
]
```
