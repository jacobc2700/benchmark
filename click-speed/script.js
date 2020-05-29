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
	count = 0;
	document.getElementByClassName("click-counter").innerHTML = "";
}

//Runs the click speed test.
function runClickTest() {
	//Increment number of clicks.
	count++;

	//Starts new timer after first click.
	createTimer(count);

	//Show number of clicks.
	document.getElementsByClassName("click-counter").innerHTML = count;
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