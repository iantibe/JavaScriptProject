/**
 * 
 */

function validateinput() {
	var weight = document.getElementById("weight").value;
	var heightfeet = document.getElementById("feetheight").value;
	var heightinches = document.getElementById("inchesheight").value;

if(weight == undefined){
	
} else	{
	return true
}

	
}


function generateresult(){

var weight = document.getElementById("weight").value;
var heightfeet = document.getElementById("feetheight").value;
var heightinches = document.getElementById("inchesheight").value;

parseFloat('weight');
parseFloat('feetheight');
parseFloat('inchesheight');

var inches = (12*heightfeet) + heightinches;

var bmi = 703*weight/((inches*inches));

document.getElementById("result").innerHTML = bmi; 

}


