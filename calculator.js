// this lists the name of all operations and their symbls
var OPERATIONS = {
	"add": "+",
	"subtract": "-",
	"multiply": "*",
	"divide": "/",
	"power": "^"
};

// get all of the ui elements
var operand1 = document.getElementById("operand1");
var operand2 = document.getElementById("operand2");
var operator = document.getElementById("operator");
var result = document.getElementById("result");

// listen for changes to any of the inputs
operand1.addEventListener("input", solve);
operand2.addEventListener("input", solve);
operator.addEventListener("input", solve);

// get the names of all the operations
Object.getOwnPropertyNames(OPERATIONS)

// the function will be called with the name of each operation (ex: add, subtract...)
.forEach(function(operation) {
	// check if the operation has been defined as a function
	// NOTE: window[operator] is the same as window. with the value of operator
	// NOTE: so if operator is "add" window[operator] is the same as window.add
	if(typeof window[operation] == "function") {
		// create an option for the operator menu
		var option = document.createElement("option");

		// set the text the user will see
		option.innerText = OPERATIONS[operation];

		// set the value we will get when the option is selected
		option.setAttribute("value", operation);

		// add the operation to the operator menu
		operator.appendChild(option);
	}
});

// this is where we solve the equation
function solve() {
	// NOTE: adding a + in front of a variable will convert it to a number
	// NOTE: if it is not a number it will return NaN (not a number)
	var value1 = +operand1.value;
	var value2 = +operand2.value;

	// calculate the result
	var $result = window[operator.value](value1, value2);

	// check if the result is NaN
	if(isNaN($result)) {
		result.innerText = "Error";
	}
	else {
		// any special rounding
		if(typeof round == "function") {
			$result = round($result);
		}

		result.innerText = $result;
	}
}
