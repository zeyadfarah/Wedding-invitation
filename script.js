const weddingDate = new Date("2026-10-30T18:00:00+02:00").getTime();
const byId = (id) => document.getElementById(id);
const pad = (value, size = 2) => String(value).padStart(size, "0");

function updateCountdown() {
  const remaining = Math.max(0, weddingDate - Date.now());
  const day = 86_400_000;
  const hour = 3_600_000;
  const minute = 60_000;
  const days = Math.floor(remaining / day);
  const hours = Math.floor((remaining % day) / hour);
  const minutes = Math.floor((remaining % hour) / minute);
  const seconds = Math.floor((remaining % minute) / 1_000);

  byId("days").textContent = pad(days, 3);
  byId("hours").textContent = pad(hours);
  byId("minutes").textContent = pad(minutes);
  byId("seconds").textContent = pad(seconds);
  byId("countdownMessage").textContent = remaining === 0 ? "Today is the day — let the celebration begin." : "Counting down to our day together";
}

updateCountdown();
window.setInterval(updateCountdown, 1_000);
