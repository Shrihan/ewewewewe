var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition();
function start1(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript
    console.log(content)
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie");
    {
       speak();
 setTimeout(() => {
    takesnapshot1()
    save()
 }, 3000);
 setTimeout(() => {
    takesnapshot2()
    save()
 }, 6000);
 setTimeout(() => {
    takesnapshot3()
    save()
 }, 9000);
    }
    
}

camera=document.getElementById("camera")
Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
})
function speak(){
var synth=synth=window.speechSynthesis;
speak_data=document.getElementById("textbox").value;
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);
}
function takesnapshot1(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfieimage1").src=data_uri
    })
}
function takesnapshot2(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfieimage2").src=data_uri
    })
}
function takesnapshot3(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfieimage3").src=data_uri
    })
}