Webcam.set({
    width:350,
    height:200,
    image_format:"png",
    png_quality:90
});

camerupt = document.getElementById("camera");

Webcam.attach("#camera");

function Fotinha() {
 Webcam.snap(function (url) {
    document.getElementById("foto").innerHTML = "<img id = 'fotch' src = '" + url +"'>";
    console.log("Fotinha");
 })
}
console.log("versão ml5 :" + ml5.version);
classifica = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/P0N_rZnZm/model.json", modelOkey);

function modelOkey() {
console.log("modelo foi carregado.")
}
function verificar() {
    img = document.getElementById("fotch");
    classifica.classify(img, recive) 
}
function recive(error,results) {
    if (error) {
    console.log(error);
    }
    else{
        console.log(results)
        document.getElementById("resultado-nome").innerHTML = results[0].label;
        document.getElementById("resultado-precisão").innerHTML = results[0].confidence.toFixed(2);
    }
}