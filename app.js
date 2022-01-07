const bgContainer = document.querySelector('.background')

bgClasses = ['background background--bg1', 'background background--bg2', 'background background--bg3']

// Set a Cookie
function setCookie(cName, cValue, expSecs) {
    let date = new Date();
    date.setTime(date.getTime() + expSecs);
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function initialImg() {
    if (document.cookie) {
        bgContainer.className = getCookie('bgName')
    } else {
        console.log('document.cookie')
        const getPic = bgClasses[Math.floor(Math.random() * bgClasses.length)];
        setCookie('bgName', getPic, 10000);
        bgContainer.className = getPic
        console.log(document.cookie);
    }
}

initialImg()

setInterval(() => {
    const cookieValue = getCookie('bgName')

    if (!cookieValue) {
        console.log('document.cookie')
        const getPic = bgClasses[Math.floor(Math.random() * bgClasses.length)];
        setCookie('bgName', getPic, 10000);
        bgContainer.className = getPic
        console.log(document.cookie);
    }
}, 2000)



