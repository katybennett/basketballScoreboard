const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function increment(user, value) {
   if (user === "home") {
    homeScore += value;
    homeScoreEl.textContent = homeScore;
   } else if (user === "guest") {
    guestScore += value;
    guestScoreEl.textContent = guestScore;
   }
}

