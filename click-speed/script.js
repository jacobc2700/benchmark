//How many clicks you have done.
var count = 0;

//Runs when the ten seconds is over.
function myTimer() {
	//Tell the user the click speed.
	alert("You clicked " + count + " times in 10 seconds. Your click speed is " + count / 10 + " clicks per second.");

	//Stops the timer.
	clearInterval(timeLeftTimer);

	//Everything below helps reset the click speed test.
	reset();
	resetColor();
	count = 0;
	document.getElementById("demo").innerHTML = "";
	document.getElementById("area").style.backgroundColor = "lightgrey";
	document.getElementById("area").style.borderColor = "black";
}

//Runs the click speed test.
function runClickTest() {
	//Increment number of clicks.
	count++;

	//Starts new timer after first click.
	createTimer(count);

	//Toggles background color.


	//Changes background color depending on the time left.
	callColor();

	//Show number of clicks.
	document.getElementById("demo").innerHTML = count + " clicks";
}

//Starts the ten second timer after the first click.
function createTimer(num) {
	if (num == 1) {
		var testTimer = setTimeout(myTimer, 10000);
		displayTime();
	}
}

//Shows the amount of seconds left.
var timeLeftTimer;

//Number of seconds to count down from.
var countDown = 10;

//Calls the function that shows how much time is left.
function displayTime() {
	timeLeftTimer = setInterval(showTime, 1000);
}

//Shows how much time is left.
function showTime() {
	countDown--;
	document.getElementById("area").innerHTML = countDown;
}

//Reset the click speed test.
function reset() {
	countDown = 10;
	document.getElementById("area").innerHTML = countDown;
}

//Changes the background color depending on what second we're on.
var colorChangeTimer;

//Calls the function (changeColor) that changes the background color depending on the second.
function callColor() {
	colorChangeTimer = setInterval(changeColor, 1000);
}

//Changes the background color depending on the amount of time left in the test.
function changeColor() {
	//Green - you have lots of time.
	//Yellow - you have some time.
	//Red - you don't have much time.
	if (countDown == 9) document.getElementById("area").style.color = "green";
	if (countDown == 8) document.getElementById("area").style.color = "green";
	if (countDown == 7) document.getElementById("area").style.color = "green";
	if (countDown == 6) document.getElementById("area").style.color = "yellow";
	if (countDown == 5) document.getElementById("area").style.color = "yellow";
	if (countDown == 4) document.getElementById("area").style.color = "yellow";
	if (countDown == 3) document.getElementById("area").style.color = "red";
	if (countDown == 2) document.getElementById("area").style.color = "red";
	if (countDown == 1) document.getElementById("area").style.color = "red";
}

//Reset the text to green.
function resetColor() {
	document.getElementById("area").style.color = "green";
}

//Flag variable for background toggle.
var change = 0;

//Changes the background color after each click.
// function toggleBackground() {
// 	if (change == 0) {
// 		document.getElementById("area").style.backgroundColor = "black";
// 		document.getElementById("area").style.borderStyle = "dashed";
// 		document.getElementById("area").style.borderColor = "lightgrey";
// 		change = 1;
// 	} else if (change == 1) {
// 		document.getElementById("area").style.backgroundColor = "lightgrey";
// 		document.getElementById("area").style.borderColor = "black";
// 		change = 0;
// 	}
// }