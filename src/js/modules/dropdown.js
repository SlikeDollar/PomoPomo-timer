const dropdown = (btnSelector, dropdownContentSelector) => {
    const dropdownButton = document.querySelector(btnSelector),
        dropdownContent = document.querySelector(dropdownContentSelector);

    dropdownButton.addEventListener('click', (e) => {
        if (e.target) {
            e.preventDefault();
        }
        if (dropdownContent.classList.contains('show-flex')) {
            dropdownContent.classList.remove('show-flex');
            dropdownContent.classList.add('hide');
        } else {
            dropdownContent.classList.add('show-flex');
            dropdownContent.classList.remove('hide');
        }   
    });
};

export default dropdown;