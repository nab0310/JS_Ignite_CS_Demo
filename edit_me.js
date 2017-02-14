// Every line that starts with // is a comment and will not be run.
// Create a function for every operation you want the calculator to support.

// Example (add)
// a and b are the two numbers entered in the inputs.  The value returned by the
// function is the result of the expression.
function add(a, b) {
	return a + b;
}

// Write subtract, multipy, divide, and power (exponent) functions.
// When you write them they will be added to the calculator.

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function power(a, b) {
	return Math.pow(a, b);
}

// round to 2 digits
function round(num) {
	return Math.round(num * 100) / 100;
}

// add support for percents
function parseNumber(num) {
	// if the number ends with a % sign treat it as a percent
	if(num[num.length - 1] == "%") {
		// remove the % by getting every part of the string except the percent
		num = num.substr(0, num.length - 1);

		// parse the numbers and divide by 100 to get the percent value
		return parseFloat(num) / 100;
	}

	// parse any other numbers normally
	return parseFloat(num);
}
