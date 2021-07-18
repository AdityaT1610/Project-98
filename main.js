var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition(); 
function start() 
{ 
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start(); 
}
var Content = event.results[0][0].transcript; 
document.getElementById("textbox").innerHTML = Content; 
console.log(Content);