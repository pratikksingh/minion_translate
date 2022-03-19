var btntranslate = document.querySelector("#btn-translate");

var inputText = document.querySelector("#txt-input");

var output = document.querySelector("#txt-output");

var url = "https://api.funtranslations.com/translate/minion.json";

function getTranslation(text) {
  return url + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something went wrong! Please try again.");
}

function clicked() {
  var inputTxt = inputText.value;
  fetch(getTranslation(inputTxt))
    .then((response) => response.json())
    .then((json) => {
      var translated = json.contents.translated;
      output.innerText = translated;
    })
    .catch(errorHandler);
}
btntranslate.addEventListener("click", clicked);
