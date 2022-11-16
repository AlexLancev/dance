const accordeon = () => {

    const accordeonTitle = document.querySelectorAll('[data-name="accordeon-title"]');

    accordeonTitle.forEach((el) => {
        el.addEventListener('click', () => {

            el.classList.toggle('active');
            let content = el.nextElementSibling;

            if (content.style.maxHeight) {

                content.style.maxHeight = '';

            } else {

                content.style.maxHeight = content.scrollHeight + 'px';

            };
        });
    });

}

accordeon();