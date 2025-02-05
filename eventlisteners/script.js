const click=document.getElementById("click-btn");
const hbox = document.getElementById("hover-box");
const iField = document.getElementById("input-field");
const oField = document.getElementById("output-text");

click.addEventListener("click", function() {
  alert("Button clicked!");
})

hbox.addEventListener("mouseover", function (){
  this.style.backgroundColor = "lightblue";
})

hbox.addEventListener("mouseleave", function (){
  this.style.backgroundColor = "lightgray";
})

iField.addEventListener("keydown", function(){
  oField.textContent = "You typed: "+ this.value;
})

hbox.addEventListener("dblclick", function(){
  this.style.backgroundColor="red"
})