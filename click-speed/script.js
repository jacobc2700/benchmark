//How many clicks you have done.
var count = 0;

//Runs when the ten seconds is over.
function myTimer() {
	//Tell the user the click speed.
	// alert("You clicked " + count + " times in 10 seconds. Your click speed is " + count / 10 + " clicks per second.");

	document.getElementById("click-counter").style.display = 'none';
	document.getElementById("time-counter").style.display = 'none';
	document.getElementById("speed-display").innerHTML = 'Click speed: ' + (count / 10) + ' clicks per second'

	//Stops the timer.
	clearInterval(timeLeftTimer);

	//Everything below helps reset the click speed test.
	reset();
	count = 0;
	document.getElementById("click-counter").innerHTML = "Clicks: 0";
}

//Runs the click speed test.
function runClickTest() {
	// alert("D");
	//Increment number of clicks.
	count++;

	//Starts new timer after first click.
	createTimer(count);

	//Show number of clicks.
	document.getElementById("click-counter").innerHTML = "Clicks: " + count;
}

//Starts the ten second timer after the first click.
function createTimer(num) {
	if (num == 1) {
		var clickTimer = setTimeout(myTimer, 10000);
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
	document.getElementById("time-counter").innerHTML = "Time: " + countDown + " seconds";
}

//Reset the click speed test.
function reset() {
	countDown = 10;
	document.getElementById("time-counter").innerHTML = "Time: " + countDown + " seconds";
	// document.getElementById("click-counter").innerHTML = "Clicks: " + count;
}