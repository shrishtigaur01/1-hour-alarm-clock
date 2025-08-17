// Set the total countdown time in seconds (1 hour = 60 minutes * 60 seconds)
let totalSeconds = 60 * 60;

// Store the interval ID so we can pause/clear it later
let intervalId = null;

// Flag to track whether the timer is running or paused
let isRunning = false;

// Function to update the timer display on the page
function updateTimerDisplay() {
  const minutes = Math.floor(totalSeconds / 60); // Calculate whole minutes
  const seconds = totalSeconds % 60;             // Calculate remaining seconds

  // Format numbers to always show two digits (e.g. 05:09)
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Function to start the countdown
function startTimer() {
  // Only start if it's not already running and time is remaining
  if (!isRunning && totalSeconds > 0) {
    isRunning = true;

    // Clear any existing messages
    document.getElementById('message').textContent = "";

    // Start the countdown using setInterval (runs every 1 second)
    intervalId = setInterval(() => {
      totalSeconds--;        // Decrease time by 1 second
      updateTimerDisplay();  // Update the display each second

      // If the timer reaches zero
      if (totalSeconds <= 0) {
        clearInterval(intervalId); // Stop the timer
        isRunning = false;
        document.getElementById('message').textContent = "Time's up!"; // Show message
      }
    }, 1000); // 1000 milliseconds = 1 second
  }
}

// Function to pause the countdown
function pauseTimer() {
  clearInterval(intervalId); // Stop the interval
  isRunning = false;         // Mark timer as not running
}

// Function to reset the countdown to the full hour
function resetTimer() {
  pauseTimer();              // First pause any running timer
  totalSeconds = 60 * 60;    // Reset to 1 hour
  updateTimerDisplay();      // Update the UI
  document.getElementById('message').textContent = ""; // Clear message
}

// Initialize the display when page loads
updateTimerDisplay();
