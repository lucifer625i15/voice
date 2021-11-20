const texts = document.querySelector(".texts");

const startBtn = document.querySelector("#start-btn");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continous = false;

recognition.lang = "en-US";

recognition.interimResults = false;

recognition.maxAlternative = 1;

const synth = window.speechSynthesis;

startBtn.addEventListener("click", () =>{
  startBtn.innerText = "Speak Now"
  startBtn.style.backgroundColor = "#febd17"
    setTimeout(() => {
      startBtn.style.backgroundColor = "#5663F7"
      startBtn.innerText = "Turn On"
    }, 5000);
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


recognition.onresult =(e) => {
let utter = new SpeechSynthesisUtterance("alex");

utter.onend = () =>{
    recognition.start();
};

const transcript = e.results[e.results.length-1][0].transcript.trim();

    if(transcript.includes("hello"))
    {
      recognition.stop();
      const music = new Audio('./audio/howcanihelp.mp3');
      music.play();
        
    } else if(transcript.includes("namaste"))
    {
      recognition.stop();
      const music = new Audio('./audio/howcanihelp.mp3');
      music.play();
        
    } else if(transcript === "bye")
    {
     recognition.stop();
        const music = new Audio('./audio/seeusoon.mp3');
      music.play();
   } else if(transcript.includes("open YouTube"))
    {
        recognition.stop();
        const music = new Audio(`./audio/${fc}.mp3`);
      music.play();
      window.open(`https://www.youtube.com/`)
    } else if(transcript.includes("open Facebook" || "Facebook khola" || "Facebook kholo"))
    {
        recognition.stop();
      window.open(`https://www.facebook.com/`)
        const music = new Audio(`./audio/${fc}.mp3`);
      music.play();
    } else if(transcript.includes("Facebook khola"))
    {
        recognition.stop();
      window.open(`https://www.facebook.com/`)
        const music = new Audio(`./audio/${fc}.mp3`);
      music.play();
    } else if(transcript.includes("Facebook kholo"))
    {
        recognition.stop();
      window.open(`https://www.facebook.com/`)
        const music = new Audio(`./audio/${fc}.mp3`);
      music.play();
    } else if(transcript.includes("open Tiktok"))
    {
        recognition.stop();
      window.open(`https://www.tiktok.com/`)
        const music = new Audio(`./audio/${fc}.mp3`);
      music.play();
    } else if(transcript.includes("open Instagram"))
    {
        recognition.stop();
      window.open(`https://www.instagram.com/`)
        const music = new Audio('./audio/opeaning.mp3');
      music.play();
    } else if(transcript.includes("open discord"))
    {
        recognition.stop();
      window.open(`https://discord.com/channels/@me`)
        const music = new Audio(`./audio/${fc}.mp3`);
      music.play();
    } else if(transcript.includes("open Twitter"))
    {
        recognition.stop();
      window.open(`https://www.twitter.com`)
        const music = new Audio('./audio/opeaning.mp3');
      music.play();
    } else if(transcript === "open Google")
    {
        recognition.stop();
      window.open(`https://www.google.com`)
        const music = new Audio(`./audio/${fc}.mp3`);
      music.play();
    } else if(transcript.includes("open reddit"))
    {
        recognition.stop();
      window.open(`https://www.reddit.com`)
        const music = new Audio('./audio/opening.mp3');
      music.play();
    } else if(transcript.includes("open messenger"))
    {
        recognition.stop();
      window.open(`https://www.messenger.com/t/`)
        const music = new Audio(`./audio/${fc}.mp3`);
      music.play();
    } else if(transcript.includes("open Gmail"))
    {
        recognition.stop();
      window.open(`https://www.gmail.com/`)
        const music = new Audio(`./audio/${fc}.mp3`);
      music.play();
    } else if(transcript.includes("open Google Drive"))
    {
        recognition.stop();
      window.open(`https://drive.google.com/`)
       const music = new Audio(`./audio/${fc}.mp3`);
      music.play();
    } else if(transcript.includes("namaskar"))
    {
        recognition.stop();
        const music = new Audio(`./audio/nelexa.mp3`);
      music.play();
    }
   else if(transcript.includes("khabar"))
    {
        recognition.stop();
        const music = new Audio(`./audio/fineu.mp3`);
      music.play();
    } else if(transcript.includes("how are you"))
    {
        recognition.stop();
        const music = new Audio(`./audio/fineu.mp3`);
      music.play();
    } else if(transcript.includes("am fine"))
    {
        recognition.stop();
        utter.text ="I am glad to here it. Is there anything I can help you?";
        synth.speak(utter);
    } else if(transcript.includes("Google"))
    {
        recognition.stop();
        const music = new Audio(`./audio/found.mp3`);
      music.play();
      let input = transcript.split("");
      input.splice(0, 6)
      input = input.join("").split(" ").join("+")
      window.open(`https://www.google.com/search?q=${input}`)
    }  else if(transcript.includes("goodbye"))
   {
     recognition.stop();
        const music = new Audio(`./audio/seeusoon.mp3`);
      music.play();
   } else if(transcript.includes("your name"))
   {
     recognition.stop();
        const music = new Audio(`./audio/nelexa.mp3`);
      music.play();
    } else if(transcript.includes("Timro Naam"))
   {
     recognition.stop();
        const music = new Audio(`./audio/nelexa.mp3`);
        music.play();
   } else if(transcript.includes("made you"))
   {
     recognition.stop();
        const music = new Audio(`./audio/whomade.mp3`);
      music.play();
      } else if(transcript.includes("banaco"))
   {
     recognition.stop();
        const music = new Audio(`./audio/whomade.mp3`);
      music.play();
   } else if(transcript.includes("banaa ko"))
   {
     recognition.stop();
        const music = new Audio(`./audio/whomade.mp3`);
      music.play();
   } else if(transcript === "ok")
   {
     recognition.stop();
        utter.text = `Is there anything else I can do for you?`;
        synth.speak(utter);
   } else if(transcript.includes("create QR code of"))
   {
      recognition.stop();
      utter.text ="Here is a result of it.";
      synth.speak(utter);
      let input = transcript.split("");
      input.splice(0, 17)
      input = input.join("").split(" ").join("%20")
      console.log(input)
      window.open(`http://api.qrserver.com/v1/create-qr-code/?data=${input}&size=200x200`)
   } else if(transcript.includes("Wiki"))
    {
        recognition.stop();
        utter.text ="I have found this result";
        synth.speak(utter);
      let input = transcript.split("");
      input.splice(0, 4)
      input = input.join("").split(" ").join("%20")
      console.log(input)
      window.open(`https://en.wikipedia.org/wiki/${input}`)
    } else if(transcript.includes("jokes"))
    {
      const jo = ["joke", "joke1", "joke2", "joke3", "joke4"]

 let joke = jo[Math.floor(Math.random() * jo.length)]
        recognition.stop();
          const music = new Audio(`./audio/${joke}.mp3`);
      music.play();
    } else if(transcript.includes("joke"))
    {
      const jo = ["joke", "joke1", "joke2", "joke3", "joke4"]

 let joke = jo[Math.floor(Math.random() * jo.length)]
        recognition.stop();
          const music = new Audio(`./audio/${joke}.mp3`);
      music.play();
    } else if(transcript.includes("Nepali song"))
    {
     
 const son = ["https://www.youtube.com/watch?v=kEbcHhNsRoU", "https://www.youtube.com/watch?v=ClxCoHx5VxE", "https://www.youtube.com/watch?v=Y3bDy6FTgMY", "https://www.youtube.com/watch?v=GBu54m0cEvg", "https://www.youtube.com/watch?v=qRUsBrlhptw", "https://www.youtube.com/watch?v=ubkwRMq50p8", "https://www.youtube.com/watch?v=-kVUygjWVG4", "https://www.youtube.com/watch?v=94QXQvxPnzo"]
 let song = son[Math.floor(Math.random() * son.length)]
        recognition.stop();
          const music = new Audio(`./audio/opening.mp3`);
      music.play();
      window.open(song)
    } else if(transcript.includes("Nepali geet"))
    {
     
 const son = ["https://www.youtube.com/watch?v=kEbcHhNsRoU", "https://www.youtube.com/watch?v=ClxCoHx5VxE", "https://www.youtube.com/watch?v=Y3bDy6FTgMY", "https://www.youtube.com/watch?v=GBu54m0cEvg", "https://www.youtube.com/watch?v=qRUsBrlhptw", "https://www.youtube.com/watch?v=ubkwRMq50p8", "https://www.youtube.com/watch?v=-kVUygjWVG4", "https://www.youtube.com/watch?v=94QXQvxPnzo"]
 let song = son[Math.floor(Math.random() * son.length)]
        recognition.stop();
          const music = new Audio(`./audio/opening.mp3`);
      music.play();
      window.open(song)
    } else if(transcript.includes("birthday"))
    {
        recognition.stop();
         const music = new Audio(`./audio/hbd.mp3`);
      music.play();
    }
    else if(transcript.includes("Mesh Rashi"))
    {
        recognition.stop();
         const music = new Audio(`./audio/rashi/mesh.mp3`);
      music.play();
    } else if(transcript.includes("bris Rashi"))
    {
        recognition.stop();
         const music = new Audio(`./audio/rashi/bris.mp3`);
      music.play();
    } else if(transcript.includes("Mithun Rashi"))
    {
        recognition.stop();
         const music = new Audio(`./audio/rashi/mithun.mp3`);
      music.play();
    } else if(transcript.includes("Kanya Rashi"))
    {
        recognition.stop();
         const music = new Audio(`./audio/rashi/kanya.mp3`);
      music.play();
    } else if(transcript.includes("Simha Rashi"))
    {
        recognition.stop();
         const music = new Audio(`./audio/rashi/simha.mp3`);
      music.play();
    } else if(transcript.includes("karkat Rashi"))
    {
        recognition.stop();
         const music = new Audio(`./audio/rashi/karkat.mp3`);
      music.play();
    } else if(transcript.includes("Makar Rashi"))
    {
        recognition.stop();
         const music = new Audio(`./audio/rashi/makar.mp3`);
      music.play();
    } else if(transcript.includes("tula rashi"))
    {
        recognition.stop();
         const music = new Audio(`./audio/rashi/tula.mp3`);
      music.play();
    } else if(transcript.includes("vrishchik Rashi"))
    {
        recognition.stop();
         const music = new Audio(`./audio/rashi/vrish.mp3`);
      music.play();
    } else if(transcript.includes("brishak Rashi"))
    {
        recognition.stop();
         const music = new Audio(`./audio/rashi/vrish.mp3`);
      music.play();
    } else if(transcript.includes("Dhanu Rashi"))
    {
        recognition.stop();
         const music = new Audio(`./audio/rashi/dhanu.mp3`);
      music.play();
    } else if(transcript.includes("Kumbh Rashi"))
    {
        recognition.stop();
         const music = new Audio(`./audio/rashi/kumbh.mp3`);
      music.play();
    } else if(transcript.includes("min Rashi"))
    {
        recognition.stop();
         const music = new Audio(`./audio/rashi/min.mp3`);
      music.play();
    } else if(transcript.includes("mean Rashi"))
    {
        recognition.stop();
         const music = new Audio(`./audio/rashi/min.mp3`);
      music.play();
    } else if(transcript.includes("Meen Rashi"))
    {
        recognition.stop();
         const music = new Audio(`./audio/rashi/min.mp3`);
      music.play();
    }else if(transcript.includes("Boston College kata"))
    {
        recognition.stop();
       window.open(`https://www.google.com/maps/place/Boston+International+College/@27.6664522,84.4329055,17z/data=!3m1!4b1!4m5!3m4!1s0x3994fad385999d37:0x1526751505ceecb2!8m2!3d27.6664522!4d84.4350942`)
    } else if(transcript.includes("Where is boston college"))
    {
        recognition.stop();
       window.open(`https://www.google.com/maps/place/Boston+International+College/@27.6664522,84.4329055,17z/data=!3m1!4b1!4m5!3m4!1s0x3994fad385999d37:0x1526751505ceecb2!8m2!3d27.6664522!4d84.4350942`)
    }
};

