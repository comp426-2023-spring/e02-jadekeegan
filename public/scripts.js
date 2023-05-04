// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function setToRPS() {
  var lizard = document.getElementsByClassName("rpsls")[0];
  var spock = document.getElementsByClassName("rpsls")[1];
  var rps_button = document.getElementsByClassName("rps-button")[0];
  var rpsls_button = document.getElementsByClassName("rpsls-button")[0];

  lizard.style.display = 'none';
  spock.style.display = 'none';
  rps_button.style.opacity = '100%';
  rpsls_button.style.opacity = '50%';
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
};

function setChoice() {
  var game = document.getElementsByClassName("choice-dropdown")[0];
  
  if (game.style.display == 'inline') {
    game.style.display = 'none';
  } else {
    game.style.display = 'inline';
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