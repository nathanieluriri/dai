

let uniqueRandomIntegers = generateUniqueRandomIntegers(0, 9, 4);
convertListToStringsInPlace(uniqueRandomIntegers) 
let dead, injured =guessingResult(guess, uniqueRandomIntegers)


function guessing_result (code){


  console.log(uniqueRandomIntegers); 
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
  OpponentsCode = OpponentsCode.join('');
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
      console.log(dead)
    }
  }

    return { dead, injured };
}