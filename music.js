const cdPlayer = document.getElementById('cd-player');
const startButton = document.getElementById('start-button');
const music = document.getElementById('music');
const cdMusicElement = document.querySelector('.header');

function startMusic() {
  music.play();
// CD 플레이어 요소에 애니메이션 효과를 추가하여 CD를 회전시킵니다.
  startButton.disabled = true;
}

window.addEventListener('scroll', function() {
  const rect = cdMusicElement.getBoundingClientRect();
  const isInViewport = (rect.top >= 0 && rect.bottom <= window.innerHeight);
  if (isInViewport) {
    cdPlayer.style.animationPlayState = 'running';
    startMusic();
  }
});

window.addEventListener('wheel', function(event) {
  const isScrollingDown = event.deltaY > 0;

  if (isScrollingDown) {
    const rect = cdMusicElement.getBoundingClientRect();
    const isInViewport = (rect.top >= 0 && rect.bottom <= window.innerHeight);
    if (isInViewport) {
        cdPlayer.style.animationPlayState = 'running';
        startMusic();
    }
  }
});
