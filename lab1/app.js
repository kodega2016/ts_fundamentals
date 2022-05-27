var username = "Khadga Bahadur shrestha";
var age = 25;
var isMarried = false;
console.log("".concat(username, " is ").concat(age, " and ").concat(isMarried));
function greet(name) {
    return "Hello ".concat(name);
}
console.log(greet('Khadga Shrestha'));
var Status;
(function (Status) {
    Status[Status["active"] = 0] = "active";
    Status[Status["inactive"] = 1] = "inactive";
})(Status || (Status = {}));
var myUser = {
    name: "Khadga Shrestha",
    age: 25,
    skills: ["Flutter", "Android", "Express js", "Mongo DB"],
    preferences: {
        key: "flutter",
        value: "Mobile application development"
    },
    roles: ["admin", 100],
    status: Status.active
};
console.log(myUser);
console.log(myUser.skills.length);
console.log(myUser.preferences.key);
console.log(myUser.roles);
console.log(myUser.status == Status.active);
var s = [
    "a", 2, 3
];
console.log(s);
var score;
score = 12;
console.log("Score:", score);
score = "12pt";
console.log("Score:", score);
var AuthState;
(function (AuthState) {
    AuthState[AuthState["authenicated"] = 0] = "authenicated";
    AuthState[AuthState["unauthenticated"] = 1] = "unauthenticated";
    AuthState[AuthState["uninitialized"] = 2] = "uninitialized";
})(AuthState || (AuthState = {}));
var authState = AuthState.uninitialized;
var randomMessage = "Hello";
console.log(randomMessage);
randomMessage = 12;
console.log(randomMessage);
randomMessage = false;
console.log(randomMessage);
var myMessage = "Hey How are you?";
function getMessage(name, age) {
    return "Hello ".concat(name, " Are you ").concat(age);
}
console.log(getMessage('Ray', 30));
function add(a, b) {
    return a + b;
}
var action;
action = add;
console.log(action(10, 20));
function myCall(a, b, cb) {
    return cb(a + b);
}
myCall(10, 10, function (x) {
    console.log("Result:" + x);
});
