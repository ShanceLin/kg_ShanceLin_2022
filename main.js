//Store the command line arguments save the first 2 (node & main.js)
var args = process.argv.slice(2);

//array of phonetic of integers
var nums = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

//Turns the command line args 
var argsString = saveString(args);


//Iterates through the string of numbers and prints the phonetic of the number or ',' if its a comma
for(var j = 0; j < argsString.length; j++) {
	if (!isNaN(argsString[j])) {
 		process.stdout.write(nums[argsString[j]]);
 	} else if (argsString[j] == ',') {
 		process.stdout.write(',');
 	}
}
process.stdout.write("\n"); //New line at the end


/*
Turns an array of numbers into a single comma-separated string
ARGS:
array - Array of numbers saved from command line
*/
function saveString(array) {
	var aString = "";
	for (var i = 0; i < array.length; i++) {
		if(i != array.length-1) {
			aString += array[i];
			aString += ",";
		} else {
			aString += array[i];
		}
	}
	return aString;
}