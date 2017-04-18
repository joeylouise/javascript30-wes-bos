function playing(e) {
  // Create variable that selects the corresponding audio for the key that has been pressed
  var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // Create variable for the key that has been pressed
  var key = document.querySelector('.key[data-key="' + e.keyCode + '"]');
  // If audio does not exist, return i.e. if a letter is pressed that does not have
  // corresponding element
  if (!audio) return;
  // Add class 'playing' to the relevant key
  key.classList.add('playing');
  // Set audio back to 0 so that key can be pressed multiple times with no problem
  audio.currentTime = 0;
  // Play audio
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') {
    return;
  }
  this.classList.remove('playing');
}

var keys = document.querySelectorAll('.key');
keys.forEach(function(key) {
  key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', playing);
