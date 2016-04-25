/*
Jake R. Martin
April 25, 2016
The University of Toledo - CSET 3200:901
Web Services Assignment - Stopwatch
*/

// Get Control Elements
var startButton = document.getElementById('btnStart');
var getButton = document.getElementById('btnGet');
var stopButton = document.getElementById('btnStop');

// Attach Event Listeners to Click event
startButton.addEventListener('click', startTimer, false);
getButton.addEventListener('click', getCurrentTime, false);
stopButton.addEventListener('click', stopTimer, false);


function startTimer() {
  appendConsole('DOM: Start Timer button clicked!');
}

function getCurrentTime() {
  appendConsole('DOM: Get Time button clicked!');
}

function stopTimer() {
  appendConsole('DOM: Stop Timer button clicked!');
}

// Function for appending messages to Console list
function appendConsole(messageValue) {
  var newItem = document.createElement('li');                         // Create new List Item <li> variable
  var itemValue = document.createTextNode(' -> ' + messageValue);     // Create a text node and add text value
  newItem.appendChild(itemValue);                                     // Append text node to new list item

  var consoleList = document.getElementById('console');               // Get list
  consoleList.appendChild(newItem);                                   // Append new list item to list
}
