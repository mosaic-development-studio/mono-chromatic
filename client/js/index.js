'use strict';

(function() {
    const STAR_COUNT = 1000;
    const Z_INDEX_CAP = 1000;

    const body = document.querySelector('body');

    const generateRandomNumber = multiple => Math.round(Math.random(Math.floor()) * multiple);

    const createStars = count => {
        for (let i = 0; i < count; i++) {
            const div = document.createElement('div');

            div.classList.add('star');

            div.setAttribute(
                'style',
                `transform: translateZ(${generateRandomNumber(Z_INDEX_CAP)});`
                + `left: ${generateRandomNumber(window.visualViewport.width)}px;`
                + `top: ${generateRandomNumber(window.visualViewport.height)}px;`
            );

            body.appendChild(div);
        }
    };

    createStars(STAR_COUNT);

    window.addEventListener('mousemove', (e) => {
        body.setAttribute('style', 'transform: rotateX(0deg) rotateY(0deg);');

        var rotate_X;
        var rotate_Y;
        var invert = false;

        if (invert) {
          rotate_X = e.pageX;
          rotate_Y = e.pageY;
        } else if (!invert) {
          rotate_X = e.pageX;
          rotate_Y = -e.pageY;
        }
        console.log(rotate_X);
        body.setAttribute('style', 'transform: rotateX(' + rotate_Y + 'deg) rotateY(' + rotate_X + 'deg);');
    });
})();