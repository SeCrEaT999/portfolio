window.addEventListener('scroll', function() {
    var header = document.getElementById('top-bar');
    var profileImg = document.getElementById('profile-img');

    if (window.scrollY > 0) {
        header.style.padding = '10px 10px';
        profileImg.style.marginLeft = '10px';
    } else {
        header.style.padding = '20px 20px';
        profileImg.style.marginLeft = '0';
    }
});

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
  