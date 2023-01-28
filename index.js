function speak() {
    var inputText = document.getElementById("input").value;
    var speech = new SpeechSynthesisUtterance(inputText);
    window.speechSynthesis.speak(speech);
  }
  