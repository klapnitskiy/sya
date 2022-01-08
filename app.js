window.addEventListener('load', () => {
    "use strict";
    const bgContainer = document.querySelector('.background');
    const bgClasses = ['background background--bg1', 'background background--bg2', 'background background--bg3'];
    const COOKIE_NAME = 'bgName';
    const COOKIE_INTERVAL = 10000;
    const COOKIE_EXP = 10000;

    function setCookie(cName, cValue, expSecs) {
        let date = new Date();
        date.setTime(date.getTime() + expSecs);
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    }

    function getCookie(name) {

        let cookies = '';

        if (document.cookie) {
            document.cookie.split(';').forEach(item => {
                const [cookieName, cookieValue] = item.split('=');
                if (cookieName === name) {
                    cookies = cookieValue;
                }
            });
        }

        return cookies;
    }

    function initialImg() {
        const bgClass = getCookie('bgName');


        if (bgClass) {
            setClassAnim(bgClass);
        } else {
            setImg();
        }
    }

    function setClassAnim(bgClassName) {
        bgContainer.classList.add('fadeOut');
        bgContainer.addEventListener('transitionend', () => {
            bgContainer.className = bgClassName;
        }, {once: true});
    }

    function setImg() {
        const getPic = bgClasses[Math.floor(Math.random() * bgClasses.length)];
        setCookie(COOKIE_NAME, getPic, COOKIE_EXP);
        setClassAnim(getPic);
    }

    initialImg();

    setInterval(() => {
        const cookieValue = getCookie(COOKIE_NAME);
        if (!cookieValue) {
            setImg();
        }
    }, COOKIE_INTERVAL);
});