var st = "Hello";
console.log(st);
var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.3;
var num = 3e10;
var message = "Hello TypeScript";
var numberArray = [1, 1, 3, 5, 6, 25];
var numberArray2 = [1, 1, 3, 5, 6, 25];
var words = ["hello", "Typescript"];
// Tuple
var contact = ["Vika", 1234567];
///any
var variable = 42;
variable = "New str";
variable = [];
/// ====
function sayMyName(name) {
    console.log(name);
}
sayMyName("Haizenberg");
// never
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) { }
}
var login = "admin";
var id1 = 1234;
var id2 = "cat";
