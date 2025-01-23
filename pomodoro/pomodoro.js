const isRunning = false; // tracks if time is currently running
let timeleft; //remaining time in seconds
const worktime = 25; // tracks duration in minutes
const breaktime = 5; // tracks breaktime in minutes
const isWorktime = true; // tracks if we are working or on break

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const workTimeinput= document.getElementById("work-time");
const breakTimeinput = document.getElementById("break-time");
const statusDisplay  = document.getElementById("status");
const progressBar = document.getElementById("progress");

