<<<<<<< HEAD
function choose(option) {
    sendCheckIn(option);
    const text = document.getElementById("text");
    const buttons = document.getElementById("buttons");

    if (option === "school") {
        document.body.className = "school-bg";

        text.innerText =
        "My Future Nurse... I know nursing school feels heavy right now, but pressure creates diamonds. You're becoming who you prayed to be.";

        buttons.innerHTML = `
            <button onclick="sayMessage('proud')">Tell me you're proud of me</button>
            <button onclick="sayMessage('why')">Remind me why I'm doing this</button>
            <button onclick="sayMessage('break')">Help me calm down</button>
            <button onclick="sayMessage('extra')">💗 Extra love</button>
            <button onclick="restart()">Back</button>
        `;
    }

    else if (option === "bad") {
        document.body.className = "bad-bg";

        text.innerText =
        "Come here Love... rough days happen. You're still doing better than you think.";

        buttons.innerHTML = `
            <button onclick="sayMessage('comfort')">Comfort me</button>
            <button onclick="sayMessage('laugh')">Make me smile</button>
            <button onclick="restart()">Back</button>
        `;
    }

    else if (option === "overstimulated") {
        document.body.className = "overstimulated-bg";

        text.innerText =
        "Pause for a second Love. Breathe!";

        buttons.innerHTML = `
            <button onclick="sayMessage('breathe')">Breathe with me</button>
            <button onclick="sayMessage('okay')">Tell me I'm okay</button>
            <button onclick="restart()">Back</button>
        `;
    }
}

function sayMessage(type) {
    const text = document.getElementById("text");

    if (type === "proud") {
        text.innerText =
        "I'm so proud of you, my Future Nurse. Most people would quit, but you keep showing up every time.";
    }

    else if (type === "why") {
        text.innerText =
        "Because one day someone's healing will start with you. Keep going Baby Love.";
    }

    else if (type === "break") {
        text.innerText =
        "Close the books for a minute. Drink water. Stretch. Breathe. Then come back stronger. Keep that phone on DND!";
    }

    else if (type === "extra") {
        text.innerText =
        "Extra love activated 💗 Forehead kiss. Tight hug. I'm rooting for you always, Baby Love.";
    }

    else if (type === "comfort") {
        text.innerText =
        "You are loved, supported, and never alone in this.";
    }

    else if (type === "laugh") {
        text.innerText =
        "Even on rough days you're still fine as hell. Annoying sometimes... but fine. OOOwwweeeee Baby Love!";
    }

    else if (type === "breathe") {
        text.innerText =
        "Breathe in... hold... breathe out. Again. I'm right here.";
    }

    else if (type === "okay") {
        text.innerText =
        "You're okay Baby Love. One thing at a time. Brick by brick baby";
    }
}

function comfortNow() {
    document.getElementById("text").innerText =
    "Come here Love... relax your shoulders, fix your face, and breathe. I got you.";
}

function restart() {
    document.body.className = "";

    document.getElementById("text").innerText =
    "Hey Baby Love...you straight?";

    document.getElementById("buttons").innerHTML = `
        <button onclick="choose('school')">📚 Nursing school is stressing me</button>
        <button onclick="choose('bad')">😞 I had a rough day</button>
        <button onclick="choose('overstimulated')">😵‍💫 I feel overstimulated</button>
        <button onclick="comfortNow()">🧸 Just comfort me</button>
    `;
}

function sendCheckIn(feeling) {
  fetch("https://love-checkin-backend.vercel.app/api/notify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      feeling: feeling
    })
  });
=======
function choose(option) {
    const text = document.getElementById("text");
    const buttons = document.getElementById("buttons");

    if (option === "school") {
        document.body.className = "school-bg";

        text.innerText =
        "My Future Nurse... I know nursing school feels heavy right now, but pressure creates diamonds. You're becoming who you prayed to be.";

        buttons.innerHTML = `
            <button onclick="sayMessage('proud')">Tell me you're proud of me</button>
            <button onclick="sayMessage('why')">Remind me why I'm doing this</button>
            <button onclick="sayMessage('break')">Help me calm down</button>
            <button onclick="sayMessage('extra')">💗 Extra love</button>
            <button onclick="restart()">Back</button>
        `;
    }

    else if (option === "bad") {
        document.body.className = "bad-bg";

        text.innerText =
        "Come here Love... rough days happen. You're still doing better than you think.";

        buttons.innerHTML = `
            <button onclick="sayMessage('comfort')">Comfort me</button>
            <button onclick="sayMessage('laugh')">Make me smile</button>
            <button onclick="restart()">Back</button>
        `;
    }

    else if (option === "overstimulated") {
        document.body.className = "overstimulated-bg";

        text.innerText =
        "Pause for a second Love. Breathe!";

        buttons.innerHTML = `
            <button onclick="sayMessage('breathe')">Breathe with me</button>
            <button onclick="sayMessage('okay')">Tell me I'm okay</button>
            <button onclick="restart()">Back</button>
        `;
    }
}

function sayMessage(type) {
    const text = document.getElementById("text");

    if (type === "proud") {
        text.innerText =
        "I'm so proud of you, my Future Nurse. Most people would quit, but you keep showing up every time.";
    }

    else if (type === "why") {
        text.innerText =
        "Because one day someone's healing will start with you. Keep going Baby Love.";
    }

    else if (type === "break") {
        text.innerText =
        "Close the books for a minute. Drink water. Stretch. Breathe. Then come back stronger. Keep that phone on DND!";
    }

    else if (type === "extra") {
        text.innerText =
        "Extra love activated 💗 Forehead kiss. Tight hug. I'm rooting for you always, Baby Love.";
    }

    else if (type === "comfort") {
        text.innerText =
        "You are loved, supported, and never alone in this.";
    }

    else if (type === "laugh") {
        text.innerText =
        "Even on rough days you're still fine as hell. Annoying sometimes... but fine. OOOwwweeeee Baby Love!";
    }

    else if (type === "breathe") {
        text.innerText =
        "Breathe in... hold... breathe out. Again. I'm right here.";
    }

    else if (type === "okay") {
        text.innerText =
        "You're okay Baby Love. One thing at a time. Brick by brick baby";
    }
}

function comfortNow() {
    document.getElementById("text").innerText =
    "Come here Love... relax your shoulders, fix your face, and breathe. I got you.";
}

function restart() {
    document.body.className = "";

    document.getElementById("text").innerText =
    "Hey Baby Love...you straight?.";

    document.getElementById("buttons").innerHTML = `
        <button onclick="choose('school')">📚 Nursing school is stressing me</button>
        <button onclick="choose('bad')">😞 I had a rough day</button>
        <button onclick="choose('overstimulated')">😵‍💫 I feel overstimulated</button>
        <button onclick="comfortNow()">🧸 Just comfort me</button>
    `;
>>>>>>> 3b170abe8776047d6e526dd7a113033a4e4ba1f8
}