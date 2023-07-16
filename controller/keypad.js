
let number_of_clicks= 0 ;
const kill = document.getElementById("kill")
const first =document.getElementById("1")
const second=document.getElementById("2")
const third=document.getElementById("3")
const fourth=document.getElementById("4")

const tbodyContainer = document.getElementById("tbody-container")

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




let guess = []








//function for toggling any attribute

function toggleAttribute(event, attributeName) {
  var element = event.target;
  var attributeValue = element.getAttribute(attributeName);
  if (attributeValue === "true" || attributeValue === null) {
    element.setAttribute(attributeName, "false");
  } else {
    element.setAttribute(attributeName, "true");
  }
}


//function for the kill button

function redox (noc){
  
  
  if(noc>=1 && noc<=4){
    number_of_clicks-=1
    indicator (number_of_clicks)
    guess.pop()
  }
  else if (noc===0){
    alert("nigga")
  }
  console.log(noc)
 
}


//function for number button eventhandlind

function eventhandler (event) {







  if (number_of_clicks<4 && number_of_clicks >=0)
  {
    var buttonContent = event.target.textContent;
     addToUniqueList(buttonContent)
  
    console.log('guess:', guess);
    
    number_of_clicks +=1
    
    indicator(number_of_clicks)

  }





    if (number_of_clicks===4)
  {
      alert("click on guess to begin")
  }
  }
  



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
  

  // function for unique list

  function addToUniqueList(item) {
    if (!guess.includes(item)) {
      guess.push(item);
    }
    else{
      if( number_of_clicks>0){
      number_of_clicks-=1
      alert("You can only enter unique numbers")
      }
      else{
        alert("bakaaaa")
      }
    }
  }


  // function for adding guess to the guess table

  function AddGuess(event)
{



if(guess.length<4)
{
  console.log("Incomplete digits")

}
else
{
  let tr = document.createElement("tr")
  let gtd = document.createElement("td")
  td.innerHTML= guess;
  tr.appendChild(gtd);
  tbodyContainer.appendChild(tr)
  guess=[];
  number_of_clicks=0;
  indicator(number_of_clicks);

}

  }