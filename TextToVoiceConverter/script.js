let speech = new SpeechSynthesisUtterance();
let selectVoice = document.querySelector("select");
let voices = [];
let btn = document.querySelector("button");

window.speechSynthesis.onvoiceschanged = function(){
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach(function(voice,i){
        selectVoice.options[i] = new Option(voice.name , i);
    });
    // voices.forEach(function(voice,i){
    //     var option = document.createElement('option');
    //     option.textContent = voice.name + ' (' + voice.lang + ')';
    //     selectVoice.appendChild(option);  
    // });
}

selectVoice.addEventListener("change",() => {
    speech.voice = voices[selectVoice.value];
});

btn.addEventListener("click" , function(){
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})


