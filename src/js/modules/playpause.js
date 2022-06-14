const playpause = (playpauseBtnSelector, progressbarSelector) => {
    const playpauseBtn = document.querySelector(playpauseBtnSelector);
    const progressbar = document.querySelector(progressbarSelector);

    playpauseBtn.addEventListener('click', () => {
        if (!progressbar.classList.contains('progressbar-active')) {
            playpauseBtn.classList.add('playing');
            progressbar.classList.add('progressbar-active');
            // playpauseBtn.classList.add('hide');
        }
    });
};

export default playpause;