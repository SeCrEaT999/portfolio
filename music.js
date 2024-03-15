const cdPlayer = document.getElementById('cd-player');
const startButton = document.getElementById('start-button');
const music = document.getElementById('music');

// Function to start music and CD animation
function startMusic() {
    music.play();
    cdPlayer.style.animationPlayState = 'running';
    startButton.disabled = true; // Disable the start button once music starts
}

// Event listener for the start button
startButton.addEventListener('click', startMusic);