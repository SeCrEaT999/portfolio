window.addEventListener('scroll', function() {
    var header = document.getElementById('top-bar');
    var profileImg = document.getElementById('profile-img');

    if (window.scrollY > 0) { // 스크롤이 내려갈 때
        header.style.padding = '10px 10px'; // 상단바 패딩 축소
        profileImg.style.marginLeft = '10px'; // 이미지 왼쪽 마진 설정
    } else { // 상단에 위치할 때
        header.style.padding = '20px 20px'; // 상단바 패딩 확대
        profileImg.style.marginLeft = '0'; // 이미지 왼쪽 마진 초기화
    }
});

// JavaScript 함수
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTop").style.display = "block";
  } else {
    document.getElementById("scrollToTop").style.display = "none";
  }
}

function scrollToTop() {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  
    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentScroll - currentScroll / 20);
    }
  }
  