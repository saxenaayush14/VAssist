let btn=document.querySelector("#btn");
let content=document.querySelector("#content");
let voice=document.querySelector("#voice");

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishme(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<=12){
        speak("Good Morning")
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon")
    }
    else{
        speak("Good Evening")
    }
}
// window.addEventListener('load',()=>{
//     wishme()
// })
let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recog=new speechRecognition()
recog.onresult=(event)=>{
    let curridx=event.resultIndex
    let transcript=event.results[curridx][0].transcript
    content.innerText=transcript
    takecommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recog.start();
    btn.style.display="none"
    voice.style.display="block"
})
function takecommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")||(message.includes("hey"))){
        speak("hello,what can i help you?")
    }
    else if(message.includes("who are you")||message.includes("hu r u")){
        speak("I am a virtual assisstant, created by Ayush sir")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube..")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("open google")){
        speak("opening google..")
        window.open("https://www.google.com")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("open telegram")){
        speak("opening telegram..")
        window.open("telegram://")
    }
    else if(message.includes("open vs code")){
        speak("opening vs code..")
        window.open("vscode://")
    }
    else if(message.includes("open spotify")){
        speak("opening spotify..")
        window.open("spotify://")
    }
    else if(message.includes("open calendar")){
        speak("opening calendar..")
        window.open("calendar://")
    }
    else if(message.includes("current time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("current date")||message.includes("today's date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else{
        let finaltxt="this is what i found on internet regarding"+message.replace("vassist","")|| message.replace("vashisht","")
        speak(finaltxt)
        window.open(`https://www.google.com/search?q=${message.replace("vashisht","")}`)
    }
}
