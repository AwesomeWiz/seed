
const timer = new CountdownTimer({
    selector: "#clock1",
    targetDate: new Date("August, 20 2024 12:00:00"),
    backgroundColor: "rgba(0,0,0,.15)",
    foregroundColor: "rgba(0,0,0,.50)",
});

timer.startTimer(); 