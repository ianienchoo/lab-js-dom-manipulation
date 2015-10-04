(function () {

	'use strict'

	window.onload = function (){
		document.getElementById("basic-calc")
			.addEventListener('click', addAndReturnResult);
		document.getElementById("trip-calc")
			.addEventListener('click', calcAndReturnTripCost);
		document.getElementById("bmi-calc")
			.addEventListener('click', calcAndReturnBMI);
	}

	function addAndReturnResult(){
		var n1, n2, op, result, answerStr;

		n1 = parseInt(document.getElementById("basic-num-1").value);
		n2 = parseInt(document.getElementById("basic-num-2").value);
		op = document.getElementById("basic-operation").value;

		switch (op) {
			case "+":
				result = n1 + n2;
				break;
			case "-":
				result = n1 - n2;
				break;
			case "/":
				result = n1 / n2;
				break;
			case "*":
				result = n1 * n2;
				break;
		}

		answerStr =
			n1 + " " + op + " " +
			n2 + " = " + result;

		document.getElementById("basic-answer-alert").innerHTML = answerStr;

	}

	function calcAndReturnTripCost(){
		var dist, mpg, cost, speed, result, answerStr;

		dist = parseFloat(document.getElementById("trip-distance").value);
		mpg = parseFloat(document.getElementById("trip-mpg").value);
		cost = parseFloat(document.getElementById("trip-cost").value);
		speed = parseFloat(document.getElementById("trip-speed").value);

		if (speed < 60) {
			result = dist / mpg * cost;
			answerStr =
				"formula used was: distance / mpg * cost. \n" +
				"The computed cost is " +
				result +
				" dollars.";
		} else {
			result = dist / (mpg - (speed - 60) * 2) * cost;
			answerStr =
				"formula used was: distance / mpg * cost. \n" +
				"The computed cost is " +
				result +
				" dollars.";
		}

		document.getElementById("trip-answer-alert").innerHTML = answerStr;

	}

	function calcAndReturnBMI(){
		var mass, height, result, answerStr;

		mass = parseFloat(document.getElementById("bmi-mass").value);
		height = parseFloat(document.getElementById("bmi-height").value);

		result = ((mass * 2.2) / (height * 39.37 * height * 39.37) )* 703;
		answerStr =
			"1kg = 2.2lb; \n " +
			"1m = 39.37in \n The BMI is: " +
			result;

		document.getElementById("bmi-answer-alert").innerHTML = answerStr;

	}

}())



















