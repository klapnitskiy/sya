const bgContainer = document.querySelector('.form')

const bgClasses = ['form form--bg1', 'form form--bg2', 'form form--bg3']

if (!document.cookie) {
    bgContainer.classList = bgClasses[Math.floor(Math.random()*bgClasses.length)];
}

console.log(document.cookie)

let cookieName = 'isActive';
// Set a Cookie
function setCookie(cName, cValue) {
    let date = new Date();
    date.setTime(date.getTime() + (8 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}
// Apply setCookie
setCookie('bgChange', cookieName);