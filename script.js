const textarea = document.getElementById('message');
const progressBar = document.getElementById('progress-bar');
const charCounter = document.getElementById('charCounter');
const warning = document.getElementById('warning');

const maxChars = textarea.getAttribute('maxlength');

function updateCounter() {
  const currentLength = textarea.value.length;
  let percentage = (currentLength / maxChars) * 100;

  if(percentage > 100) percentage = 100;

  // Update progress bar width
  progressBar.style.width = percentage + "%";

  // Change color based on thresholds
  if (percentage <= 60) {
    progressBar.style.backgroundColor = "#4caf50"; // green
  } else if (percentage <= 85) {
    progressBar.style.backgroundColor = "#ffb300"; // amber
  } else {
    progressBar.style.backgroundColor = "#d32f2f"; // red
  }

  // Update character counter text
  charCounter.textContent = `${currentLength} / ${maxChars} characters`;

  // Show warning if limit reached
  if (currentLength >= maxChars) {
    warning.textContent = "You have reached the maximum character limit.";
  } else {
    warning.textContent = "";
  }
}

// Initial update in case of pre-filled content
updateCounter();

textarea.addEventListener('input', () => {
  if (textarea.value.length > maxChars) {
    textarea.value = textarea.value.slice(0, maxChars);
  }
  updateCounter();
});
