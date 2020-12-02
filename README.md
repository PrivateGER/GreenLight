# GreenLight
A small scripting language combining syntax of multiple languages I like with a decent standard API. Under active development. 
This language compiles back into Node.js code.

# Contributing
Want to help? Thanks! There are multiple areas you can help with.

### Standard Library
This is currently needed the most. Open lib/stdlib.js and create the function that you think should be part of greenlight. 
Make sure it is prefixed with `greenlight_internal_` in order to not interfere with user-created functions.

Then simply enter lib/implementations/inbuilt_function.js and add your function to `functionMap` by creating a new key with the name the function should have with the value of the internal name.

Finally, test if your function works, then submit your PR. Thanks! :)

### Transpiler
Take a look at lib/lexer.js and lib/transpiler.js. The current transpilation solution is slow and not suitable for the long run. Maybe you can help with it!

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
  }
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
log(1); // => 0 Get the natural logarithm of a number
pow(2, 10); // => 1024 Raise a number to an arbitrary power
exp(1); // => 2.718281828459045 Get the exponential of a number
max(2, 4, 1, 3); // => 4 Get the maximum element of an array
min(2, 4, 1, 3); // => 1 Get the minimum element of an array
random(); // Generates a random number between 0 and 1
sin(0); // => 0 Gives the sine of number
cos(0); // => 1 Gives the cosine of number
tan(0); // => 0 Gives the tangent of number
isNumber(78); // => true Get a boolean value depending if passed value is a number
randomNumberBetween(min, max); // Get a random integer between two numbers (inclusive)
exit(0); // Terminate the program with the passed exit code. 0 = normal, anything else = error
httpGet("https://example.com/"); // Send a HTTP GET request to the provided URI, returns string with response text
run("ls"); // Run a system command and receive output after the command has exited. Returns STDERR if an error occurs.
sha256("data"); // Hash the provided data with SHA256 and return a hex string 
sha3("data"); // Hash the provided data with SHA3-256 and return a hex string
md5("data"); // Hash the provided data with SHA3-256 and return a hex string. Warning: MD5 is outdated and insecure.
getObjectKeys(object); // Returns an array of the keys of a js object
getObjectValues(object); // Returns an array of the values of a js object
objToArray(object); // Returns an array of an object's key:value pairs
objToJsonString(object); // Converts an object to a JSON string
arrMin(array); // Returns the min value in an array
arrMax(array); // Returns the max value in an array
arrAvg(array); // Returns the average of all values in an array
arrSum(array); // Returns the sum of all values in an array
arrDiff(array1, array2); // Return the elements from Array 1 that are not in the Array 2
arrDiffSymmetric(array1, array2); // Return the elements from Array 1 that are not in the Array 2 and vice-versa
arrIntersect(array1, array2); // Return the elements that both arrays share in common
trueTypeOf(input); // More accurately check the type of an object
```
