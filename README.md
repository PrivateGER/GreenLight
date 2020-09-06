# GreenLight
A small scripting language combining syntax of multiple languages I like with a decent standard API. Under active development. 
This language compiles back into Node.js code.

# Documentation

### Compile & run
To run a program:
```
node greenlight.js e <filename>
```
To compile a program:
```
node greenlight.js c <filename> > compiled.js
```

### Input/Output
```
print(""); // Print a passed string to STDOUT
logError(""); // Prints the passed string as red text
input("Name? "); // Print the passed string and read user input until a newline is encountered, the input is returned
```

### Function declarations & calls
```
fun say_hello(name) {
  print("Hello, " + name); 
}
  
call say_hello("Reader");
```
The function keyword in this language is "fun". 
Function calls in Greenlight ***need*** to be prefixed with "call", otherwise undefined behavior is likely to occur.

### Variables 
```
var hello = "world"; // Mutable variable
const constant = "light"; // Constant variable
```

### Objects
```
var object = {
  "key": "hello",
  "array": [
    "1",
    "2"
  ],
  "nestedObject": {
    "nested": "hi!"
};
```
Objects in Greenlight work the same as they do in JavaScript.
An object is a keyed map which can contain all data types, including other objects or arrays.

### Object & Array access
```
let array = [498, 49, 299, 18]; // Declare a new array
array[1] = 133; // Modify the second element of the array
print(array[1]); // Print the second element of the array

let object = { // Declare a new object...
  "key": "hello world" // with the value "hello world" at key "key"
};
print(object>>key); // Print the value located at the key "key"
```
### Standard library
```
sqrt(16); // => 4 Get the square root of a number
isNumber(78); // => true Get a boolean value depending if passed value is a number
exit(0); // Terminate the program with the passed exit code. 0 = normal, anything else = error
httpGet("https://example.com/"); // Send a HTTP GET request to the provided URI, returns string with response text
```
