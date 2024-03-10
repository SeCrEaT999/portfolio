var hw = document.getElementById('hw');
hw.addEventListener('click', function(){
    alert('Hello world');
})

window.addEventListener('load', function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        alert("모바일 기기에서는 화면이 불안정할 수 있습니다.");
    }
});