const containerShow = document.querySelectorAll('.container-show');

containerShow.forEach(function(item) {
    item.addEventListener('click', function() {
        this.classList.add('container-show--active');
    })
})