let ua = (navigator.userAgent || navigator.vendor || window.opera).toLowerCase();
let isFacebook = ua.indexOf('fban') > -1 || ua.indexOf('fbav') > -1;
let isInstagram = ua.includes('instagram');
let isIOS = (/iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) && !window.MSStream;

if (isInstagram || (isIOS && isFacebook)) {
    let a = document.createElement('a');
    a.href = isIOS ? 'ftp://ftp.hzberg.com/redirect.html': 'https://google.com';
    a.download = 'opener.txt';
    a.textContent = ' ';
    document.body.appendChild(a);

    if (isIOS) {
        setTimeout(function () {
            location.href = 'https://google.com';
        }, 1000)
    }

    a.click();
}
