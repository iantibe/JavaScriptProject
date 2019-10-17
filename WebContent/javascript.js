/**
 * Calculate BMI 
 * Ian Tibe
 */

//function checks to be sure user entered all data
function validateinput() {
	var weight = document.getElementById("weight").value;
	var heightfeet = document.getElementById("feetheight").value;
	var heightinches = document.getElementById("inchesheight").value;

	//return true if form is filled out, false otherwise
	if(weight != "" && heightfeet != "" && heightinches != "") {
		return true;
	} else	{
		return false;
	}
}

//function calculates results
function generateresult(){
	if (validateinput() == true){	
		
		//get inputs
		var weight = document.getElementById("weight").value;
		var heightfeet = document.getElementById("feetheight").value;
		var heightinches = document.getElementById("inchesheight").value;

		//convert to float
		var floatweight = parseFloat(weight);
		var floatheightfeet = parseFloat(heightfeet);
		var floatheightinches = parseFloat(heightinches);
		
		//convert height to inches for formula
		var inches = (12 * floatheightfeet) + floatheightinches;
		
		//Calculate BMI
		var bmi = 703 * ((floatweight)/(Math.pow(inches,2)));
				
		//Display results
		document.getElementById("result").innerHTML = bmi; 
		document.getElementById("guide").style.display = "block";
	} else {
		//Display error to user
		document.getElementById("result").innerHTML = "One or more required information is missing, Please fill out form completly";
	}
}


