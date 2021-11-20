const texts = document.querySelector(".texts");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continous = false;

recognition.lang = "en-US";

recognition.interimResults = false;

recognition.maxAlternative = 1;

const synth = window.speechSynthesis;


const star = document.querySelector("#star");

star.addEventListener("click", () => {
  recognition.start();
});

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
  p.innerText = text;
});
const op = ["opening", "plswait"]

let fc = op[Math.floor(Math.random() * op.length)]

const jo = ["joke1", "joke2", "joke3"]

let joke = jo[Math.floor(Math.random() * jo.length)]


recognition.onresult = (e) => {
  let utter = new SpeechSynthesisUtterance("alex");

  utter.onend = () => {
    recognition.start();
  };

  const transcript = e.results[e.results.length - 1][0].transcript.trim();

  if (transcript.includes("hello")) {
    recognition.stop();
    utter.text = "Hi! What can I do for you?";
    synth.speak(utter);

  } else if (transcript.includes("namaste")) {
    recognition.stop();
    utter.text = "Namaste, Is there anything you want?";
    synth.speak(utter);

  } else if (transcript === "bye") {
    recognition.stop();
    utter.text = "Bye! Have a nice day";
    synth.speak(utter);
  } else if (transcript.includes("open YouTube")) {
    recognition.stop();
    utter.text = "Opeaning Youtube please wait";
    synth.speak(utter);
    window.open(`https://www.youtube.com/`)
  } else if (transcript.includes("open Facebook" || "Facebook khola" || "Facebook kholo")) {
    recognition.stop();
    window.open(`https://www.facebook.com/`)
    utter.text = "Opeaning Facebook";
    synth.speak(utter);
  } else if (transcript.includes("Facebook khola")) {
    recognition.stop();
    window.open(`https://www.facebook.com/`)
    utter.text = "Opeaning Facebook";
    synth.speak(utter);
  } else if (transcript.includes("Facebook kholo")) {
    recognition.stop();
    window.open(`https://www.facebook.com/`)
    utter.text = "Opeaning Facebook";
    synth.speak(utter);
  } else if (transcript.includes("open Tiktok")) {
    recognition.stop();
    window.open(`https://www.tiktok.com/`)
    utter.text = "Opeaning Tiktok";
    synth.speak(utter);
  } else if (transcript.includes("open Instagram")) {
    recognition.stop();
    window.open(`https://www.instagram.com/`)
    utter.text = "Open Instagram";
    synth.speak(utter);
  } else if (transcript.includes("open discord")) {
    recognition.stop();
    window.open(`https://discord.com/channels/@me`)
    utter.text = "Opeaning Discord";
    synth.speak(utter);
  } else if (transcript.includes("open Twitter")) {
    recognition.stop();
    window.open(`https://www.twitter.com`)
    utter.text = "Opeaning Twitter";
    synth.speak(utter);
  } else if (transcript === "open Google") {
    recognition.stop();
    window.open(`https://www.google.com`)
    utter.text = "Opeaning Google";
    synth.speak(utter);
  } else if (transcript.includes("open reddit")) {
    recognition.stop();
    window.open(`https://www.reddit.com`)
    utter.text = "Opeaning Reddit";
    synth.speak(utter);
  } else if (transcript.includes("open messenger")) {
    recognition.stop();
    window.open(`https://www.messenger.com/t/`)
    utter.text = "Messenger uis opeaning";
    synth.speak(utter);
  } else if (transcript.includes("open Gmail")) {
    recognition.stop();
    window.open(`https://www.gmail.com/`)
    utter.text = "Opeaning Gmail";
    synth.speak(utter);
  } else if (transcript.includes("open Google Drive")) {
    recognition.stop();
    window.open(`https://drive.google.com/`)
    utter.text = "Google Drive is opeaning";
    synth.speak(utter);
  } else if (transcript.includes("namaskar")) {
    recognition.stop();
    utter.text = "Namaste";
    synth.speak(utter);
  }
  else if (transcript.includes("khabar")) {
    recognition.stop();
    utter.text = "I am find what about you?";
    synth.speak(utter);
  } else if (transcript.includes("how are you")) {
    recognition.stop();
    utter.text = "Fine and You";
    synth.speak(utter);
  } else if (transcript.includes("am fine")) {
    recognition.stop();
    utter.text = "I am glad to here it. Is there anything I can help you?";
    synth.speak(utter);
  } else if (transcript.includes("Google")) {
    recognition.stop();
    utter.text = "searching";
    synth.speak(utter);
    let input = transcript.split("");
    input.splice(0, 6)
    input = input.join("").split(" ").join("+")
    window.open(`https://www.google.com/search?q=${input}`)
  } else if (transcript.includes("goodbye")) {
    recognition.stop();
    utter.text = "Ok goodbye see you soon";
    synth.speak(utter);
  } else if (transcript.includes("your name")) {
    recognition.stop();
    utter.text = "My name is Nelexa.";
    synth.speak(utter);
  } else if (transcript.includes("Timro Naam")) {
    recognition.stop();
    utter.text = "My name is Nelexa ";
    synth.speak(utter);
  } else if (transcript.includes("made you")) {
    recognition.stop();
    utter.text = "I was made by p2rd team";
    synth.speak(utter);
  } else if (transcript.includes("banaco")) {
    recognition.stop();
    utter.text = "I was made by p2rd team";
    synth.speak(utter);
  } else if (transcript.includes("banaa ko")) {
    recognition.stop();
    utter.text = "I was made by p2rd team";
    synth.speak(utter);
  } else if (transcript === "ok") {
    recognition.stop();
    utter.text = `Is there anything else I can do for you?`;
    synth.speak(utter);
  } else if (transcript.includes("create QR code of")) {
    recognition.stop();
    utter.text = "Here is a result of it.";
    synth.speak(utter);
    let input = transcript.split("");
    input.splice(0, 17)
    input = input.join("").split(" ").join("%20")
    console.log(input)
    window.open(`http://api.qrserver.com/v1/create-qr-code/?data=${input}&size=200x200`)
  } else if (transcript.includes("Wiki")) {
    recognition.stop();
    utter.text = "I have found this result";
    synth.speak(utter);
    let input = transcript.split("");
    input.splice(0, 4)
    input = input.join("").split(" ").join("%20")
    console.log(input)
    window.open(`https://en.wikipedia.org/wiki/${input}`)
  } else if (transcript.includes("Nepali song")) {

    const son = ["https://www.youtube.com/watch?v=kEbcHhNsRoU", "https://www.youtube.com/watch?v=ClxCoHx5VxE", "https://www.youtube.com/watch?v=Y3bDy6FTgMY", "https://www.youtube.com/watch?v=GBu54m0cEvg", "https://www.youtube.com/watch?v=qRUsBrlhptw", "https://www.youtube.com/watch?v=ubkwRMq50p8", "https://www.youtube.com/watch?v=-kVUygjWVG4", "https://www.youtube.com/watch?v=94QXQvxPnzo"]
    let song = son[Math.floor(Math.random() * son.length)]
    recognition.stop();
    utter.text = "Playing";
    synth.speak(utter);
    window.open(song)
  } else if (transcript.includes("Nepali geet")) {

    const son = ["https://www.youtube.com/watch?v=kEbcHhNsRoU", "https://www.youtube.com/watch?v=ClxCoHx5VxE", "https://www.youtube.com/watch?v=Y3bDy6FTgMY", "https://www.youtube.com/watch?v=GBu54m0cEvg", "https://www.youtube.com/watch?v=qRUsBrlhptw", "https://www.youtube.com/watch?v=ubkwRMq50p8", "https://www.youtube.com/watch?v=-kVUygjWVG4", "https://www.youtube.com/watch?v=94QXQvxPnzo"]
    let song = son[Math.floor(Math.random() * son.length)]
    recognition.stop();
    utter.text = "Playing";
    synth.speak(utter);
    window.open(song)
  } else if (transcript.includes("birthday")) {
    recognition.stop();
    const music = new Audio(`./audio/hbd.mp3`);
    music.play();
  } else if (transcript.includes("Boston College kata")) {
    recognition.stop();
    utter.text = "Here it is";
    synth.speak(utter);
    window.open(`https://www.google.com/maps/place/Boston+International+College/@27.6664522,84.4329055,17z/data=!3m1!4b1!4m5!3m4!1s0x3994fad385999d37:0x1526751505ceecb2!8m2!3d27.6664522!4d84.4350942`)
  } else if (transcript.includes("Where is boston college")) {
    recognition.stop();
    utter.text = "Here it is";
    synth.speak(utter);
    window.open(`https://www.google.com/maps/place/Boston+International+College/@27.6664522,84.4329055,17z/data=!3m1!4b1!4m5!3m4!1s0x3994fad385999d37:0x1526751505ceecb2!8m2!3d27.6664522!4d84.4350942`)
  } else if (transcript.includes("where is Boston College")) {
    recognition.stop();
    utter.text = "Here it is";
    synth.speak(utter);
    window.open(`https://www.google.com/maps/place/Boston+International+College/@27.6664522,84.4329055,17z/data=!3m1!4b1!4m5!3m4!1s0x3994fad385999d37:0x1526751505ceecb2!8m2!3d27.6664522!4d84.4350942`)
  } else if (transcript !== "open" || "hi") {
    recognition.stop();
    fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(transcript)}&botname=nelexa&ownername=P2RD Team&birthplace=nepal`, {

    })
      .then(res => res.json())
      .then(data => {

        utter.text = data.message;
        synth.speak(utter);
      })
  }
};

