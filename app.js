var btnTranslate = document.querySelector("button");
var textInput = document.querySelector("#text-input");
var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json?text="
var outputDiv = document.querySelector("#output");
function getURL(text){
    return serverURL + text;
}

function errorHandler(error){
    console.log("error occured:",error);
    alert("We are sorry for the inconvenience. Try again after some time please!");
}
function clickEventHandler(){
    var inputText = textInput.value;
    fetch(getURL(inputText)).then(response => response.json()).then(json => outputDiv.innerText = json.contents.translated).catch(errorHandler);

}
btnTranslate.addEventListener("click", clickEventHandler);

