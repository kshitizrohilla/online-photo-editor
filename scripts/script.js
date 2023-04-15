document.getElementById('previewImage').ondragstart = function() { return false; };

imageInput.onchange = event => 
{
  const [file] = imageInput.files;
  if(file) previewImage.src = URL.createObjectURL(file);
  document.getElementById("imageInputLabel").style.display = "none";
}

var brightness = document.getElementById("brightness");
var brightnessValue = brightness.value;

var contrast = document.getElementById("contrast");
var contrastValue = contrast.value;

var saturation = document.getElementById("saturation");
var saturationValue = saturation.value;

var hue = document.getElementById("hue");
var hueValue = hue.value;

brightness.oninput = function()
{
  brightnessValue = this.value;
  document.getElementById("previewImage").style.filter = 
  "brightness(" + brightnessValue + "%)" + 
  "contrast(" + contrastValue + "%)" + 
  "saturate(" + saturationValue + "%)" + 
  "hue-rotate(" + hueValue + "deg)";
}

contrast.oninput = function()
{
  contrastValue = this.value;
  document.getElementById("previewImage").style.filter = 
  "brightness(" + brightnessValue + "%)" + 
  "contrast(" + contrastValue + "%)" + 
  "saturate(" + saturationValue + "%)" + 
  "hue-rotate(" + hueValue + "deg)";
}

saturation.oninput = function()
{
  saturationValue = this.value;
  document.getElementById("previewImage").style.filter = 
  "brightness(" + brightnessValue + "%)" + 
  "contrast(" + contrastValue + "%)" + 
  "saturate(" + saturationValue + "%)" + 
  "hue-rotate(" + hueValue + "deg)";
}

hue.oninput = function()
{
  hueValue = this.value;
  document.getElementById("previewImage").style.filter = 
  "brightness(" + brightnessValue + "%)" + 
  "contrast(" + contrastValue + "%)" + 
  "saturate(" + saturationValue + "%)" + 
  "hue-rotate(" + hueValue + "deg)";
}
  