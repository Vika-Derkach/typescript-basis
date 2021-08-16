const arrayOfNumbers: Array<number> = [1, 5, 7, 8, 767, 65];
const arrayOfStrings: Array<string> = ["hghg", "gbvb", "gjnhn"];
function reverse<T>(array: T[]): T[] {
  return array.reverse();
}
reverse(arrayOfNumbers);
reverse(arrayOfStrings);
