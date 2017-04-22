
// Setup
var testString = "Ada Lovelace and  it it it itCharles Babbage designed the first computer and the software that would have run on it.";

// Example
var expressionToGetSoftware = /software/gi;
var softwareCount = testString.match(expressionToGetSoftware).length;


// Only change code below this line.

var expression = /and/gi;  // Change this Line
var andCount = testString.match(expression).length;

var getIt = /it/gi;
var itCount = testString.match(getIt).length;


console.log(testString); // testString printed
console.log(andCount);//gives me # of "and" in testString
console.log(softwareCount);//gives me me # of "software" in testString
console.log(itCount);
