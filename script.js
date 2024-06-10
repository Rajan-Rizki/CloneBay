document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll('.tiny ul li');

    listItems.forEach(function(item) {
        const dropdownContent = item.querySelector('.dropdown-content');
        item.addEventListener('mouseenter', function() {
            dropdownContent.style.display = 'block';
        });
        item.addEventListener('mouseleave', function() {
            dropdownContent.style.display = 'none';
        });
    });
});
