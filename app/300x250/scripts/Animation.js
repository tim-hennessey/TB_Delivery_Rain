var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax({repeat:-1, paused: true});
    var tl2 = new TimelineMax({repeat:-1, paused: true});
    var tl3 = new TimelineMax({repeat:-1, paused: true});
    var tl4 = new TimelineMax({repeat:-1, paused: true});
    var tl5 = new TimelineMax({repeat:-1, paused: true});

    var tltxt = new TimelineMax();

    var pin1 = document.getElementById('pin1');
    var pin2 = document.getElementById('pin2');
    var pin3 = document.getElementById('pin3');
    var pin4 = document.getElementById('pin4');

    var txt1 = document.getElementById('txt1');
    var txt2 = document.getElementById('txt2');
    var txt3 = document.getElementById('txt3');

    var cta = document.getElementById('cta');
    var cta_bg = document.getElementById('cta_bg');

    var buttonExit = document.getElementById('button-exit');

    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {



        t.set(banner, {opacity: 1});
        t.set("#container", {perspective: 600});
        t.set(pin1, {transformOrigin: "50% 100%"});
        t.set(pin2, {transformOrigin: "50% 100%"});
        t.set(pin3, {transformOrigin: "50% 100%"});
        t.set(pin4, {transformOrigin: "50% 100%"});
        t.set(pin5, {transformOrigin: "50% 100%"});

        buttonExit.addEventListener('mouseover', function () {
            t.to(cta_bg, .25, {backgroundColor: "rgba(211, 78, 255, 1)"});

        });
        buttonExit.addEventListener('mouseout', function () {
            t.to(cta_bg, .25, {backgroundColor: "rgba(0, 11, 56, 1)"});

        });



    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {

        var total = 650;
        var container = document.getElementById("container"), w = window.innerWidth, h = window.innerHeight;

        for (var i = 0; i < total; i++) {
            var Div = document.createElement('div');
            t.set(Div, {
                attr: {class: 'dot'},
                x: R(-50, w + 50),
                y: R(-200, -150),
                z: R(-100, 100),
                opacity: R(.25, 1)
            });
            container.appendChild(Div);
            animm(Div);
        }

        function animm(elm) {
            t.to(elm, R(5, 6.5), {y: h, ease: Linear.easeNone, repeat: -1, delay: -15});
            t.to(elm, R(5, 7), {x: '+=100', repeat: -1, yoyo: true, ease: Sine.easeInOut});
        }

        function R(min, max) {
            return min + Math.random() * (max - min)
        }


        t.from(pin1, .6, {y:"-=200",  ease: Sine.easeIn, onComplete:tl1go, delay:2.1});
        function tl1go() {
            tl1.play();
        }

        t.from(pin2, .6, {y:"-=200",  ease: Sine.easeIn, onComplete:tl2go, delay:2.2});
        function tl2go() {
            tl2.play();
        }

        t.from(pin3, .6, {y:"-=200",  ease: Sine.easeIn, onComplete:tl3go, delay:2.3});
        function tl3go() {
            tl3.play();
        }

        t.from(pin4, .6, {y:"-=200",  ease: Sine.easeIn, onComplete:tl4go, delay:2.4});
        function tl4go() {
            tl4.play();
        }

        t.from(pin5, .6, {y:"-=200",  ease: Sine.easeIn, onComplete:tl5go, delay:2.5});
        function tl5go() {
            tl5.play();
        }

        tltxt.to(txt1, .5, {opacity:1}, "+=.5")
            .from(txt1, .5, {scale:.8}, "-=.5")

            .to(txt2, .5, {opacity:1}, "+=1")
            .from(txt2, .5, {scale:.8}, "-=.5")

            .to(txt3, .25, {opacity:1}, "+=1")
            .from(txt3, .25, {scale:.8}, "-=.25")

            .to(cta, .25, {opacity:1}, "+=.5");


        tl1.to(pin1, .35, {scaleX: '-=.1', scaleY:"+=.1", ease: Sine.easeInOut}, "+=.1")
            .to(pin1, .35, {y:'-=10',  ease: Sine.easeInOut}, "-=.2")
            .to(pin1, .35, {y:'+=10',  ease: Sine.easeInOut}, "+=.15")
            .to(pin1, .2, {scaleX: '+=.1', scaleY:"-=.1", ease: Sine.easeInOut}, "-=.2");

        tl2.to(pin2, .35, {scaleX: '-=.1', scaleY:"+=.1", ease: Sine.easeInOut}, "+=.1")
            .to(pin2, .35, {y:'-=10',  ease: Sine.easeInOut}, "-=.2")
            .to(pin2, .35, {y:'+=10',  ease: Sine.easeInOut}, "+=.15")
            .to(pin2, .2, {scaleX: '+=.1', scaleY:"-=.1", ease: Sine.easeInOut}, "-=.2");

        tl3.to(pin3, .35, {scaleX: '-=.1', scaleY:"+=.1", ease: Sine.easeInOut}, "+=.1")
            .to(pin3, .35, {y:'-=10',  ease: Sine.easeInOut}, "-=.2")
            .to(pin3, .35, {y:'+=10',  ease: Sine.easeInOut}, "+=.15")
            .to(pin3, .2, {scaleX: '+=.1', scaleY:"-=.1", ease: Sine.easeInOut}, "-=.2");

        tl4.to(pin4, .35, {scaleX: '-=.1', scaleY:"+=.1", ease: Sine.easeInOut}, "+=.1")
            .to(pin4, .35, {y:'-=10',  ease: Sine.easeInOut}, "-=.2")
            .to(pin4, .35, {y:'+=10',  ease: Sine.easeInOut}, "+=.15")
            .to(pin4, .2, {scaleX: '+=.1', scaleY:"-=.1", ease: Sine.easeInOut}, "-=.2");

        tl5.to(pin5, .35, {scaleX: '-=.1', scaleY:"+=.1", ease: Sine.easeInOut}, "+=.1")
            .to(pin5, .35, {y:'-=10',  ease: Sine.easeInOut}, "-=.2")
            .to(pin5, .35, {y:'+=10',  ease: Sine.easeInOut}, "+=.15")
            .to(pin5, .2, {scaleX: '+=.1', scaleY:"-=.1", ease: Sine.easeInOut}, "-=.2");


    }

    // --------------------------------------------------------------------------------------
    // Stops the animation
    function stop() {
        console.log("stopping animation");
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return {
        initialize: initialize,
        start: start,
        stop: stop
    }


})();
