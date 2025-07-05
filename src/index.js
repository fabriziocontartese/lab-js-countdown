const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button


const startBtn = document.querySelector("#start-btn");

if (startBtn) {
  startBtn.addEventListener("click", () => {
  startCountdown()
  });

}




// ITERATION 2: Start Countdown
function startCountdown() {

  timer = setInterval(() => {
    if (remainingTime > 0) {
      remainingTime--;
      document.querySelector("#time").textContent = remainingTime;
    } else {
      clearInterval(timer)
      showToast()
    }
  }, 1000);

}




// ITERATION 3: Show Toast
function showToast() {
  const toast = document.querySelector("#toast")

  toast.classList.add("show")

  setInterval(() => {
    toast.classList.remove("show")
  }, 3000)



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  const closeToast = document.querySelector("#close-toast");

  if (closeToast) {
    closeToast.addEventListener("click", () => {
    toast.classList.remove("show")
    });
  }
}


// BONUS: ITERATION 5: More Toasts



// const toastMsg = document.querySelector("#toast-message")
// toastMsg.textContent = message

// showToast("Starting countdown...")