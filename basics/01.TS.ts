// Install TS compilter using
// npm install -g typescript

console.log("hello-world from TS");

// Let's make an error
function greet(person, date){
    console.log(`Hello ${person}, today id ${date}`)
}

// greet("Branson") - error
greet("Bransonn", "01-dec")