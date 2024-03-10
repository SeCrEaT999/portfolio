// popup.js

document.addEventListener('DOMContentLoaded', function() {
    // "item" 클래스나 "item_color" 클래스를 가진 요소를 클릭했을 때 팝업을 열도록 설정
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('item') || event.target.classList.contains('item_color') || event.target.classList.contains('image')) {
            openPopup();
        }
    });

    // 팝업 닫기 버튼에 이벤트 리스너 추가
    document.getElementById('popup').addEventListener('click', function(event) {
        if (event.target.classList.contains('popup-close')) {
            closePopup();
        }
    });
});

// 팝업 열기 함수
function openPopup() {
    document.getElementById('popup').classList.add('active');
}

// 팝업 닫기 함수
function closePopup() {
    document.getElementById('popup').classList.remove('active');
}
