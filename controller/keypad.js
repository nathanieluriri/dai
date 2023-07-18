let number_of_clicks= 0 ;
const kill = document.getElementById("kill")
const first =document.getElementById("1")
const second=document.getElementById("2")
const third=document.getElementById("3")
const fourth=document.getElementById("4")

const tbodyContainer = document.getElementById("tbody-container")

function indicator (noc){
  const first =document.getElementById("1")
  const second=document.getElementById("2")
  const third=document.getElementById("3")
  const fourth=document.getElementById("4")
  switch(noc)

  {
    case 0:
      first.setAttribute("empty",true)
      second.setAttribute("empty",true)
      third.setAttribute("empty",true)
      fourth.setAttribute("empty",true)
     
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


let uniqueRandomIntegers = generateUniqueRandomIntegers(0, 9, 4);
convertListToStringsInPlace(uniqueRandomIntegers) 


function guessing_result (code){


  // console.log(uniqueRandomIntegers); 
}



// Generate a list of unique random integers within a given range
function generateUniqueRandomIntegers(min, max, count) {
  var result = [];
  
  while (result.length < count) {
    var randomInteger = Math.ceil(Math.random() * (max - min + 1)) + min - 1;
    
    if (!result.includes(randomInteger)) {
      result.push(randomInteger);
    }
  }
  
  return result;
}

// Convert a list of integers to a list of strings
function convertListToStringsInPlace(list) {
  for (var i = 0; i < list.length; i++) {
    list[i] = list[i].toString();
  }
}
        

function guessingResult(PlayersGuess, OpponentsCode) {
  
  let dead = 0;
  let injured = 0;

  for (let i = 0; i < 4; i++) {


    if (PlayersGuess[i] === OpponentsCode[i]) {
      dead += 1;
     
     
    }
    if (PlayersGuess[i] === OpponentsCode[0] && PlayersGuess[i] !== OpponentsCode[i]) {
      injured += 1;
    } else if (PlayersGuess[i] === OpponentsCode[1] && PlayersGuess[i] !== OpponentsCode[i]) {
      injured += 1;
    } else if (PlayersGuess[i] === OpponentsCode[2] && PlayersGuess[i] !== OpponentsCode[i]) {
      injured += 1;
    } else if (PlayersGuess[i] === OpponentsCode[3] && PlayersGuess[i] !== OpponentsCode[i]) {
      injured += 1;
    }
    if (dead === 4) {
      alert("You won congratulations")
      
    }
  }

    return { dead, injured };
}






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
    alert("Bakkaaa")
  }

 
}


//function for number button eventhandlind

function eventhandler (event) {







  if (number_of_clicks<4 && number_of_clicks >=0)
  {
    var buttonContent = event.target.textContent;
     addToUniqueList(buttonContent)
  
   
  
  
    
    number_of_clicks +=1
    
    indicator(number_of_clicks)

  }





    if (number_of_clicks===4)
  {
      // alert("click on guess to begin")
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

  const tbodyContainer = document.getElementById("tbody-container")

if(guess.length<4)
{
 alert("Incomplete digits")

}
else
{
  let result =guessingResult(guess, uniqueRandomIntegers)
  // console.log( "unique number",uniqueRandomIntegers)
  let dead = result.dead
  let injured = result["injured"]
  console.log("dead:",dead,"injured:",injured)

  let tr = document.createElement("tr")
  let gtd = document.createElement("td")
  let dtd = document.createElement("td");

  let itd = document.createElement("td");
  dtd.innerHTML=dead;
  itd.innerHTML=injured;

  gtd.innerHTML= guess.join("");
  tr.appendChild(gtd);
  tr.appendChild(dtd);
  tr.appendChild(itd);
  tbodyContainer.appendChild(tr)
  guess=[];
  number_of_clicks=0;
  indicator(number_of_clicks);

}

  }