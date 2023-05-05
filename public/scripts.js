// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

var isClassicGame = true;
var isAgainstOpponent = false;

function setToRPS() {
  var lizard = document.getElementsByClassName("rpsls")[0];
  var spock = document.getElementsByClassName("rpsls")[1];
  var rps_button = document.getElementsByClassName("rps-button")[0];
  var rpsls_button = document.getElementsByClassName("rpsls-button")[0];

  lizard.style.display = 'none';
  spock.style.display = 'none';
  rps_button.style.opacity = '100%';
  rpsls_button.style.opacity = '50%';
  isClassicGame = true;
};

function setToRPSLS() {
  var lizard = document.getElementsByClassName("rpsls")[0];
  var spock = document.getElementsByClassName("rpsls")[1];
  var rps_button = document.getElementsByClassName("rps-button")[0];
  var rpsls_button = document.getElementsByClassName("rpsls-button")[0];

  lizard.style.display = 'inline';
  spock.style.display = 'inline';
  rps_button.style.opacity = '50%';
  rpsls_button.style.opacity = '100%';
  isClassicGame = false;
};

function setChoice() {
  var game = document.getElementsByClassName("choice-dropdown")[0];
  
  if (game.style.display == 'inline') {
    game.style.display = 'none';
    isAgainstOpponent = false;
  } else {
    game.style.display = 'inline';
    isAgainstOpponent = true;

  }
}

function openRules() {
  var pop_up = document.getElementsByClassName("rules-pop-up")[0];

  pop_up.style.display = 'inline';
}

function closeRules() {
  var pop_up = document.getElementsByClassName("rules-pop-up")[0];

  pop_up.style.display = 'none';
}

function reset() {
  location.reload();
}

function closeResults() {
  var pop_up = document.getElementsByClassName("results-pop-up")[0];

  pop_up.style.display = 'none';
}

async function play() {
  var e = document.getElementById("choices");
  var shot = e.value;

  var player = document.getElementById("player");
  var opponent = document.getElementById("opponent");
  var result = document.getElementById("result");
  var pop_up = document.getElementsByClassName("results-pop-up")[0];
  
  if (isClassicGame) {
    if (isAgainstOpponent && shot) {
      const response = await fetch(`/app/rps/play/${shot}`);
      const data = await response.json();

      player.innerHTML = `Player: ${data.player}.`
      opponent.innerHTML = `Opponent: ${data.opponent}.`
      result.innerHTML = `Result: ${data.result}.`
      pop_up.style.display = 'inline'
      console.log(data);
    } else {
      const response = await fetch(`/app/rps/play`);
      const data = await response.json();
      console.log(data);
    }
  } else {
    if (isAgainstOpponent && shot) {
      const response = await fetch(`/app/rpsls/play/${shot}`);
      const data = await response.json();
      console.log(data);
    } else {
      const response = await fetch(`/app/rpsls/play`);
      const data = await response.json();
      console.log(data);
    }
  }    
}