var memory = "0",
	currentValue = "0",
	resultValue = 0;

const maxChar = 12;

const display = document.querySelector(".display p");

//printing a value on the display

function addValue(digit) {
	if (eval(currentValue) === 0 && currentValue.indexOf(".") === -1) {
		current = digit;
	} else {
		currentValue += digit;
	}

	display.innerHTML = currentValue;
}

//adding a decimal

function addDecimal() {
	if (currentValue.length === 0) {
		currentValue = "0.";
	} else if (currentValue.indexOf(".") === -1) {
		currentValue += ".";
	}
	display.innerHTML = currentValue;
}

//inclunding the minusplus function

function minusPlus() {
	if (currentValue.indexOf("-") === 0) {
		currentValue = currentValue.substring(1);
	} else {
		currentValue = "-" + currentValue;
	}
	if (eval(currentValue) === 0 && currentValue.indexOf(".") === -1) {
		currentValue = 0;
	}
}

// adding the clear function to C

function clearAll() {
	currentValue = "0";
	resultValue = 0;
	memory = "0";

	display.innerHTML = currentValue;
}

// adding the operators

function addOperation(op) {
	if (resultValue !== 0) {
		//if the user inputs a string of values and operations
		calculate(); //the calculator only deals with two calculations
	}

	if (op.indexOf("*") > -1) {
		//instead of using html.value,
		resultValue = 1; // these are the operations
	} //
	if (op.indexOf("/") > -1) {
		resultValue = 2;
	}
	if (op.indexOf("+") > -1) {
		resultValue = 3;
	}
	if (op.indexOf("-") > -1) {
		resultValue = 4;
	}

	memory = currentValue; // storing every entry in the memory variable to always calculate 'current value' against
	currentValue = ""; // clear the current value so it can be used next, after being stored in the memory

	display.innerHTML = currentValue;
}

// calculating percentages

function percentage() {
	if (eval(memory) === 0) {
		currentValue = currentValue / 100;
	} else {
		currentValue = (currentValue / 100) * memory;
	}

	display.innerHTML = currentValue;
}

// adding the four core calculation possibilities in one function

function calculate() {
	// if the operator used was the multiplication, then multiply what is stored in memory with the current value
	if (resultValue === 1) {
		currentValue = eval(memory) * eval(currentValue);
	}

	// if the operator is the division one, then multiply the value stored in memory with the current value
	if (resultValue === 2) {
		if (eval(currentValue) !== 0) {
			// unless it is trying to divide by zero
			currentValue = eval(memory) / eval(currentValue);
		} else {
			currentValue = "Error";
		}
	}
	// if the operation used was addition, then add what is stored in memory with the current value
	if (resultValue === 3) {
		currentValue = eval(memory) + eval(currentValue);
	}
	// if the operation used was subtraction, then subtract what is stored in memory with the current value
	if (resultValue === 4) {
		currentValue = eval(memory) - eval(currentValue);
	}

	// reset the value stored in the memory and the current value and force the current value to a string after completing the calculation

	currentValue = currentValue + "";
	resultValue = 0;
	memory = "0";

	display.innerHTML = currentValue;
}
