 else if(transcript !== "open")
    {
        recognition.stop();
           fetch(`https://p2rd.capitalclubapi.repl.co/?message=${encodeURIComponent(transcript)}`, {
        
    })
        .then(res => res.json())
        .then(data => {
              
        utter.text = data.message;
        synth.speak(utter);
        })
    }