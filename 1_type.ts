const st: string = "Hello";
console.log(st);

const isFetching: boolean = true;
const isLoading: boolean = false;
const int: number = 42;

const float: number = 4.3;

const num: number = 3e10;

const message: string = "Hello TypeScript";

const numberArray: number[] = [1, 1, 3, 5, 6, 25];
const numberArray2: Array<number> = [1, 1, 3, 5, 6, 25];

const words: string[] = ["hello", "Typescript"];

// Tuple
const contact: [string, number] = ["Vika", 1234567];

///any
let variable: any = 42;
variable = "New str";
variable = [];

/// ====
function sayMyName(name: string): void {
  console.log(name);
}
sayMyName("Haizenberg");

// never
function throwError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {}
}

//Type
type Login = string;

const login: Login = "admin";
//const login2: Login = 2 ---

type ID = string | number;
const id1: ID = 1234;
const id2: ID = "cat";
//const id3: ID = true ---

type SomeType = string | null | undefined;
