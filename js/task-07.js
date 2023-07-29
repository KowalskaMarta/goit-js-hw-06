const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

function handleFontSizeChange() {
  const fontSizeValue = fontSizeControl.value;
  textSpan.style.fontSize = fontSizeValue + "px";
}

fontSizeControl.addEventListener("input", handleFontSizeChange);


handleFontSizeChange();
