function sendCheckIn(feeling) {
  let message = "";

  if (feeling === "school") {
    message = "📚 Nursing school is stressing me";
  }
  else if (feeling === "bad") {
    message = "😔 I had a rough day";
  }
  else if (feeling === "overstimulated") {
    message = "😵 I feel overstimulated";
  }
  else if (feeling === "comfort") {
    message = "🤗 Just comfort me";
  }
  else if (feeling === "sad") {
    message = "😢 I feel sad";
  }
  else if (feeling === "frustrated") {
    message = "😡 I feel frustrated";
  }
  else if (feeling === "lonely") {
    message = "😞 I feel lonely";
  }
  else if (feeling === "tired") {
    message = "😴 I feel tired";
  }
  else if (feeling === "anxious") {
    message = "😰 I feel anxious";
  }
  else if (feeling === "love") {
    message = "💕 Need love";
  }
  else if (feeling === "emergency") {
  message = "🚨 EMERGENCY: I need you now";
  }
  else {
    message = feeling;
  }

  fetch("https://love-checkin-backend.vercel.app/api/notify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      feeling: message
    })
  });
}

function choose(option) {
  sendCheckIn(option);

  const text = document.getElementById("text");
  const buttons = document.getElementById("buttons");

  text.innerHTML = "I got you ❤️";
  buttons.innerHTML = "";

  setTimeout(() => {
    location.reload();
  }, 5000);
}


function sayMessage(type) {
    sendCheckIn(type);
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