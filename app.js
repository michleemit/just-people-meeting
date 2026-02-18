const app = document.getElementById("app");

let playerName = "";
let deviceId = localStorage.getItem("deviceId");
let streak = 0;
let people = [];
let leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");


// ---------- DEVICE ID ----------
if (!deviceId) {
    deviceId = crypto.randomUUID();
    localStorage.setItem("deviceId", deviceId);
}

// ---------- LOAD DATA ----------
async function loadPeople() {
    const res = await fetch("data/people.json");
    people = await res.json();
    startApp();
}


// ---------- NAME SYSTEM ----------
function startApp() {
    const savedName = localStorage.getItem("playerName");

    if (!savedName) askName();
    else {
        playerName = savedName;
        homeScreen();
    }
}

function askName() {
    app.innerHTML = `
        <h1>Welcome</h1>
        <input id="nameInput" placeholder="Enter your name"/>
        <button onclick="saveName()">Continue</button>
    `;
}

function saveName() {
    const name = document.getElementById("nameInput").value.trim();

    if (!name) return;

    if (leaderboard.find(p => p.name === name)) {
        alert("Name already taken.");
        return;
    }

    playerName = name;
    localStorage.setItem("playerName", name);
    homeScreen();
}


// ---------- HOME ----------
function homeScreen() {

    const best = leaderboard.find(p => p.name === playerName)?.score || 0;

    app.innerHTML = `
        <h1>Hi ${playerName}!</h1>

        <button onclick="startGame()">
            ${best ? "Play Again" : "Play"}
        </button>

        <div class="leaderboard">
            <h3>Leaderboard</h3>
            ${renderLeaderboard()}
        </div>
    `;
}

function renderLeaderboard() {

    const sorted = leaderboard
        .sort((a,b)=>b.score-a.score)
        .slice(0,10);

    return sorted.map(p =>
        `<div>${p.name} — ${p.score}</div>`
    ).join("");
}


// ---------- GAME ----------
let correctPerson;
let timer;
let timeLeft = 10;

function startGame() {
    streak = 0;
    nextQuestion();
}

function nextQuestion() {

    clearInterval(timer);

    const shuffled = people.sort(()=>0.5-Math.random());
    const a = shuffled[0];
    const b = shuffled[1];

    correctPerson = Math.random() > 0.5 ? a : b;

    const question = generateQuestion(correctPerson);

    timeLeft = Math.max(3, 10 - Math.floor(streak/3));

    app.innerHTML = `
        <h2>${question}</h2>

        <div class="timer">${timeLeft}</div>

        <div class="card-container">
            <div class="card" onclick="choose('${a.name}')">
                <div class="arrow">⬅</div>
                <img src="${a.local_image}">
            </div>

            <div class="card" onclick="choose('${b.name}')">
                <div class="arrow">➡</div>
                <img src="${b.local_image}">
            </div>
        </div>

        <div class="streak">🔥 Streak: ${streak}</div>
    `;

    timer = setInterval(countdown,1000);
}


// ---------- TIMER ----------
function countdown() {
    timeLeft--;
    document.querySelector(".timer").innerText = timeLeft;

    if (timeLeft <= 0) lose();
}


// ---------- QUESTIONS ----------
function generateQuestion(person) {

    const bio = person.bio;

    const questions = [
        `Who matches this biography?`,
        `Who is described here?`,
        `Which person fits this profile?`,
        `Who achieved this career path?`
    ];

    return `"${bio.substring(0,180)}..."`;
}


// ---------- CHOICE ----------
function choose(name) {

    if (name === correctPerson.name) win();
    else lose();
}


// ---------- WIN ----------
function win() {

    streak++;

    app.innerHTML = `
        <h1>✨ Correct!</h1>
        <h2>Streak: ${streak}</h2>
    `;

    setTimeout(nextQuestion,1200);
}


// ---------- LOSE ----------
function lose() {

    updateLeaderboard();

    app.innerHTML = `
        <h1>Better next time.</h1>
        <p>Your streak: ${streak}</p>
        <button onclick="homeScreen()">Home</button>
    `;
}


// ---------- LEADERBOARD ----------
function updateLeaderboard() {

    const existing = leaderboard.find(p=>p.name===playerName);

    if (!existing || streak > existing.score) {
        leaderboard = leaderboard.filter(p=>p.name!==playerName);

        leaderboard.push({
            name: playerName,
            score: streak,
            date: new Date().toISOString()
        });

        localStorage.setItem("leaderboard",
            JSON.stringify(leaderboard));
    }
}

loadPeople();
