// JavaScript30 Project 1 – Drum Kit
// Name: Abdelhafidh Mahouel
// Date: June 20, 2025

console.log("🎧 Welcome to Abdel's Custom Drum Kit!");

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();

  // Flash background briefly
  document.body.style.backgroundColor = '#111';
  setTimeout(() => {
    document.body.style.backgroundColor = '';
  }, 100);
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
