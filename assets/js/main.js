var $ = document.querySelector.bind(document);
var $on = document.addEventListener.bind(document);

var xmouse, ymouse;

$on('mousemove', function (e) {
    xmouse = e.clientX || e.pageX;
    ymouse = e.clientY || e.pageY;
});

var ball = $('#ball');
var x = void 0;
var y = void 0;
var dx = void 0;
var dy = void 0;
var tx = 0;
var ty = 0;
var key = -1;

var followMouse = function followMouse() {
    key = requestAnimationFrame(followMouse);

    if (!x || !y) {
        x = xmouse;
        y = ymouse;
    } else {
        dx = (xmouse - x) * 0.125;
        dy = (ymouse - y) * 0.125;

        if (Math.abs(dx) + Math.abs(dy) < 0.1) {
            x = xmouse;
            y = ymouse;
        } else {
            x += dx;
            y += dy;
        }
    }

    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
};


var textWrapper = document.querySelector(".intro-title");
textWrapper.innerHTML = textWrapper.textContent.replace(/[\p{L}]/gu, "<span class='letter'>$&</span>");

anime.timeline({ loop: false }).add({
    targets: '.intro-title .letter',
    translateY: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: function (el, i) {
        return 300 + 30 * i;
    }
}).add({
    targets: '.intro-title .letter',
    translateY: [0, -40],
    translateZ: 0,
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1200,
    delay: function (el, i) {
        return 100 + 30 * i;
    }
});


var heroWrapper = document.querySelector(".hero-title");
heroWrapper.innerHTML = heroWrapper.textContent.replace(/[\p{L}]/gu, "<span class='letter'>$&</span>");

anime.timeline({ loop: false }).add({
    targets: '.hero-title .letter',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: function (el, i) {
        return 8000 + 30 * i;
    }
});



TweenMax.to(".loading-screen", 2.2, {
    delay: 3.8,
    top: "-100%",
    ease: Expo.easeInOut
});

TweenMax.from(".logo", 2, {
    delay: 5.2,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".year", 2, {
    delay: 5.3,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".bar", 2, {
    delay: 7.2,
    width: "0%",
    ease: Expo.easeInOut
});

TweenMax.from(".project", 2, {
    delay: 5.9,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom(".media ul li", 2, {
    delay: 6.3,
    y: 20,
    opacity: 0,
    ease: Power3.easeInOut
}, 0.2);



