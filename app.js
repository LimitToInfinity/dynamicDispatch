// if (input == 1){
//     return "That's right!"
// }
// else if (input == 2){
//     return "Almost."
// }
// else if (input == 3) {
//     return "No."
// }
// turn these if statements into an object

const input = document.querySelector("input[name=input]")

const $ = {
    1: "That's right!",
    2: "Almost.",
    3: "No.",
}

$[input]

const $$ = {
    1(){ return "yes" },
    2: () => "NO",
    default(){ return "Uhhhh..." }
}

let result = $$[input]
    ? $$[input]()
    : $$.default()
// Or you can write it this way:
// const result = $$[input] || $$["default"]()
// result()

// there is a way to remove the or statment/cycolmatic complexity...
// function getAnswers(input){
//     const $$ = {
//         1(){ return "yes" },
//         2: () => "NO",
//         default(){ return "Uhhhh..." }
//     }

// }

// $$[input]() || $$["default"]()