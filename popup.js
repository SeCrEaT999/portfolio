document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('item') || event.target.classList.contains('item_color') || event.target.classList.contains('image')) {
            openPopup();
        }
    });
    document.getElementById('popup').addEventListener('click', function(event) {
        if (event.target.classList.contains('popup-close')) {
            closePopup();
        }
    });
});

function openPopup() {
    document.getElementById('popup').classList.add('active');
}

function closePopup() {
    document.getElementById('popup').classList.remove('active');
}
