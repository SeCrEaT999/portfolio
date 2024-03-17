document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        if (!document.getElementById('popup').classList.contains('active')) {
            if (event.target.closest('.item') || event.target.closest('.item_color')) {
                var clickedElement = event.target.closest('.item') || event.target.closest('.item_color');
                openPopup(clickedElement);
            }
        } else {
            if (!event.target.closest('.popup-container')) {
                closePopup();
                Swal.fire({
                    icon: "error",
                    title: "이런!",
                    html: "이미 열려있는 팝업창이 있어요! 제가 닫아드릴테니 다시 시도해보세요!",
                    onClose: () => {
                        openPopup(event.target);
                    }
                });
            }
        }
    });
    document.getElementById('popup').addEventListener('click', function(event) {
        if (event.target.classList.contains('popup-close')) {
            closePopup();
        }
    });
});

function openPopup(clickedElement) {
    var title = clickedElement.querySelector('h2').textContent;
    var imageSrc = clickedElement.querySelector('.image').getAttribute('src');

    document.getElementById('popup').classList.add('active');
    document.querySelector('.popup-title').textContent = title;
    document.querySelector('.popup-content').innerHTML = `<img class="popup-image" src="${imageSrc}" alt="${title}">`;
}

function closePopup() {
    document.getElementById('popup').classList.remove('active');
}
