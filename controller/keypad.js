
var number_of_clicks= 0 ;
var kill = document.getElementById("kill")
var first =document.getElementById("1")
var second=document.getElementById("2")
var third=document.getElementById("3")
var fourth=document.getElementById("4")
function indicator (noc){
  switch(noc)
  {
    case 0:
      first.setAttribute("empty",true)
      second.setAttribute("empty",true)
      third.setAttribute("empty",true)
      fourth.setAttribute("empty",true)
      console.log("ssome")
      break;

    case 1:
      first.setAttribute("empty",false)
      second.setAttribute("empty",true)
      third.setAttribute("empty",true)
      fourth.setAttribute("empty",true)
      break;

    case 2:
      second.setAttribute("empty",false)
      third.setAttribute("empty",true)
      fourth.setAttribute("empty",true)

      break;
    case 3:
     third.setAttribute("empty",false)
     fourth.setAttribute("empty",true)
      break;
    case 4:
      fourth.setAttribute("empty",false)
      break;

  }
}

function redox (noc){
  
  
  if(noc>=1 && noc<=4){
    number_of_clicks-=1
    indicator (number_of_clicks)
  }
  else if (noc===0){
    alert("nigga")
  }
  console.log(noc)
 
}


var btns =document.getElementsByClassName('k-pdbtn');

  // Get a reference to the button element





         // Get the button element
    var button1 = document.getElementById('one');
    var button2 = document.getElementById('two');
    var button3 = document.getElementById('three');
    var button4 = document.getElementById('four');
    var button5 = document.getElementById('five');
    var button6 = document.getElementById('six');
    var button7 = document.getElementById('seven');
    var button8 = document.getElementById('eight');
    var button9 = document.getElementById('nine');
    var button0 = document.getElementById('zero');

// Add a click event listener to the button

function btnremover (noc){
  if (noc<4){
    console.log("nothing suspicious going on")
  }
  else if (noc===4){
    button0.removeEventListener('click',eventhandler)
    button1.removeEventListener('click',eventhandler)
    button2.removeEventListener('click',eventhandler)
    button3.removeEventListener('click',eventhandler)
    button4.removeEventListener('click',eventhandler)
    button5.removeEventListener('click',eventhandler)
    button6.removeEventListener('click',eventhandler)
    button7.removeEventListener('click',eventhandler)
    button8.removeEventListener('click',eventhandler)
    button9.removeEventListener('click',eventhandler)
  }
}

function eventhandler () {
  if (number_of_clicks<4 && number_of_clicks >=0){
  var buttonContent = event.target.textContent;
  console.log('Button content:', buttonContent);
  
  number_of_clicks +=1
}
  indicator(number_of_clicks)
  if (number_of_clicks===4){
    btnremover (number_of_clicks)
    alert("you have entered 4 digits \nAnd you cant enter more than 4 digits ")
}
}





const b0 = document.getElementById("zero");

// Attach an event listener to the window object to detect key presses
window.addEventListener("keydown", function(event) {
  // Check if the pressed key is the desired key ('1' key with code 49)
  if (event.keyCode === 48 || event.key === "0") {
    // Trigger a click event on the button
    b0.click();
  }
});
const b1 = document.getElementById("one");


window.addEventListener("keydown", function(event) {

  if (event.keyCode === 49 || event.key === "1") {
    
    b1.click();
    
  }
});
const b2 = document.getElementById("two");


window.addEventListener("keydown", function(event) {

  if (event.keyCode === 50 || event.key === "2") {
    
    b2.click();
  }
});
const b3 = document.getElementById("three");


window.addEventListener("keydown", function(event) {

  if (event.keyCode === 51 || event.key === "3") {
    
    b3.click();
  }
});
const b4 = document.getElementById("four");


window.addEventListener("keydown", function(event) {

  if (event.keyCode === 52 || event.key === "4") {
    
    b4.click();
  }
});

const b5 = document.getElementById("five");


window.addEventListener("keydown", function(event) {

  if (event.keyCode === 53 || event.key === "5") {
    
    b5.click();
  }
});
const b6 = document.getElementById("six");


window.addEventListener("keydown", function(event) {

  if (event.keyCode === 54 || event.key === "6") {
    
    b6.click();
  }
});
const b7 = document.getElementById("seven");


window.addEventListener("keydown", function(event) {

  if (event.keyCode === 55 || event.key === "7") {
    
    b7.click();
  }
});
const b8 = document.getElementById("eight");


window.addEventListener("keydown", function(event) {

  if (event.keyCode === 56 || event.key === "8") {
    
    b8.click();
  }
});
const b9 = document.getElementById("nine");


window.addEventListener("keydown", function(event) {

  if (event.keyCode === 57 || event.key === "9") {
    
    b9.click();
  }
})


