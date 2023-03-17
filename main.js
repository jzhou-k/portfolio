import './style.css'
import javascriptLogo from './javascript.svg'

import anime from 'animejs/lib/anime.es.js';
import barba from '@barba/core';
import jQuery from 'jquery';

import * as THREE from 'three/src/Three.js';

window.$ = jQuery;

var hamMenu = document.getElementById("menu");
var hamMenuItems = document.getElementById("menu-items");
var hamMenuToggle = document.getElementById("menu-toggle");
const listItems = document.querySelectorAll(".content-list li");
var projectBg = $("#animateBg");
var i = 0;
var sec = "";
var menuOpen = true;
var animateName = "none";


// if(document.readyState === 'complete')
// {
//     console.log("complete");
// }

// window.onload = function()
// {
//     document.getElementById("loadOverlay").style.display = "none";
//     console.log(document.readyState);
// }



$("#projects .content").css("opacity", "100%");
$("#projects .content").css("filter", "blur(0px)");


//get the menu out of the way on start 
//Onstart 
//     transform: translate(0,-800px);
// transition: all 0s;
$(".expand-menu").css("transform", "translate(0,1000px)")


hamMenuToggle.addEventListener("change", () => {
    i = 0;

    animateHam();
});

function animateHam() {
    hamMenu.classList.toggle("openHam");
    hamMenuItems.classList.toggle("expand-menu-open")
    $(".mainPlayground").toggleClass('behind')

    if (menuOpen) {

        $('.mainPlayground').attr('style', 'opacity: 0;');
        $(".expand-menu").css({ "transform": "" });

        for (const item of listItems) {
            i += 100;
            sec = i.toString() + "ms";
            item.setAttribute('style',
                'animation-name: menuAnimate;animation-delay:' + sec);


        }


        $(".content-list").children().css("animation-name", "menuAnimate");


        $(".contact").children().css("animation-delay", "0.5s");
        $(".contact").children().css("animation-name", "menuAnimate");

        menuOpen = false;
    } else {
        menuOpen = true;
        $('.mainPlayground').attr('style', 'opacity: 1;');


        $(".contact").children().css("animation-delay", "0s");
        $(".contact").children().css("animation-name", "menuAnimateReverse");
        $(".content-list").children().css("animation-delay", "0s");
        $(".content-list").children().css("animation-name", "menuAnimateReverse");

        // $(".expand-menu").css("transform","translate(0,-800px)")

    }

}


function closeHam() {
    if (!menuOpen) {
        menuOpen = true;

        hamMenu.classList.toggle("openHam");
        hamMenuItems.classList.toggle("expand-menu-open")
        $(".contact").children().css("animation-delay", "0s");
        $(".contact").children().css("animation-name", "menuAnimateReverse");
        $(".content-list").children().css("animation-delay", "0s");
        $(".content-list").children().css("animation-name", "menuAnimateReverse");

        // $(".expand-menu").css("transform","translate(0,-800px)")

    }
}


//this code assigns the actual text over to the animation div 
$("li a").hover(
    function () {

        $(this).attr('data-before', $(this).text());
    }, function () {

        $(this).attr('data-before', "");
    }
);

// $("#content1").css("background-color", "#fff");


// #############################################################################WHAT THE FUCK 
// $(document).on('hover', '#projects #content1', function () {
//     console.log("hello");
// });

// DYNAMICALLY LOADED ELEMENT ###fix for javascript ONLY loading after REFRESH
$(document).on('mouseenter', '#projects .content', function () {
    console.log("FUCKING WORK BITCH");
    console.log($(this));
    // get id 
    var Aname = "hehe"
    Aname = $(this).attr("id");
    console.log(Aname);
    $("." + Aname)
        .addClass("bg-open")
        .removeClass(Aname);


    $(".content").css("filter", "blur(2.5px)");
    $(this).css("filter", "blur(0)");


    $(".content").css("opacity", "70%");
    $(this).css("opacity", "100%");

    var top = $(this).position().top;
    var height = 0;
    height = $(this).outerHeight(true);


    $(".bg-open").css("top", top);
    $(".bg-open").css("height", height);
    $(".bg-open").css("background-color", "#e6e2de");



});

$(document).on('mouseleave', '#projects .content', function () {
    var Aname = "hehe";
    Aname = $(this).attr('id');
    $(".bg-open").addClass(Aname).removeClass("bg-open");


    $(".content").css("opacity", "100%");
    $(".content").css("filter", "blur(0px)");
});


$(document).on("click", '#sendBtn', function () {
    var name = $("#name").val();
    var email = $("#weirdEmail").val();
    var msg = $("#message").val();
    var body = "Name:" + name + "<br/>Email:" + email + "<br/>Message:" + msg;
    alert(email);

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "wokeupbrooao@gmail.com",
        Password: "C8BC2632F40CFE3EC6FCD2D0B4F74DAC5A03sdada",
        To: 'wokeupbrooao@gmail.com',
        From: email,
        Subject: "Form submitted from website",
        Body: body
    }).then(
        message => alert(message)
    );
});

var historyName = "#playgroundContent";
$(document).on("click", '.mainPlayground ul li', function () {

    // closes previous tab 
    $(historyName).css("opacity", "0");

    var playgroundName = $(this).text().toLowerCase().substring(2);

    console.log(playgroundName);
    // if (playgroundName == "playground")
    // {
    //     playgroundFuncton();
    //     historyName = "#playgroundContent"; 
    // }


    switch (playgroundName) {
        case "playground":
            // block of code to execute if expression matches value1
            playgroundFuncton();
            historyName = "#playgroundContent";
            break;
        case "inverse kinematics":
            inverseKinematics()
            historyName = "#inverseKinematics";
            // block of code to execute if expression matches value2
            break;

        default:
        // block of code to execute if expression does not match any of the cases
    }



});

function playgroundFuncton() {
    //this just displays playground div, in the future this function can do other things 
    $('#playgroundContent').css("opacity", "1");
}

function inverseKinematics() {
    $('#inverseKinematics').css("opacity", "1");
}


$("#email").click(function () {

    var text = $(this).text();
    copyToClipboard(text);
    console.log(text);

})



function copyToClipboard(text) {

    navigator.clipboard.writeText(text);
    //replacing ugly alert with nice looking tooltip 
}


//#############TRANSITION ANIMATIONS#####################

function pageTransition(page, finished) {
    //page is the page we are going into 

    // Target the word element
    const word = document.getElementById("text");

    word.innerHTML = page;
    if (page == "PLAYGROUND") {
        word.style.fontSize = "12vw";
    }
    // Split the word into an array of letters
    const letters = word.innerHTML.split("");

    // Replace the word with spans for each letter
    word.innerHTML = letters.map((letter) => `<span>${letter}</span>`).join("");

    console.log("function is called");
    //time line to link animation togehter
    var tl = anime.timeline({
        easing: "easeOutExpo",
        // loop: true,
        duration: 750

    });

    tl.set(".page-transition ", {
        translateY: function () {
            return 0;
        }
    });

    tl.add({
        targets: ".page-transition",
        // translateX: 100, //if you want to get the height use javascript functions

        keyframes: [
            {

                height: function () {
                    return 0;
                },
                duration: 0
            },
            {
                height: function () {
                    return $(window).height();
                    // return -($(".bg").height());
                }
            }
        ],

        duration: 1000,
        easing: "cubicBezier(0.645, 0.045, 0.355, 1.000)"
    });

    tl.add(
        {
            targets: "#text span",
            opacity: [0, 1],
            // translateX: 100, //if you want to get the height use javascript functions
            translateY: function () {
                return $(".page-transition .text-container").height();
            },
            duration: 500,
            easing: "cubicBezier(0.645, 0.045, 0.355, 1.000)",
            delay: anime.stagger(60)
        },
        "-=100"
    );

    tl.add({
        targets: "#text span",
        opacity: [1, 0],
        // translateX: 100, //if you want to get the height use javascript functions
        translateY: function () {
            return $(".page-transition .text-container").height() * 2;
        },
        duration: 400,
        easing: "cubicBezier(0.575, 0.095, 0.855, 0.060)",
        delay: anime.stagger(80, { direction: 'reverse' }),
        // complete: function(anim, finished) {
        //     finished();
        // }
    });
    tl.finished.then(finished);




}

function contentAnimation(pageName) {
    $(".content").css("pointer-events", "none");
    var tl = anime.timeline({
        easing: "easeOutExpo",
        // loop: true,
        duration: 750

    });


    tl.set(".page-transition ", {
        translateY: function () {
            return 0;
        },
        height: function () {
            return ($(window).height());
        }
    });


    tl.set("#hero", {
        translateY: function () {
            return (-$("#hero").height());
        }
    });


    //offset all project tiles 
    tl.set("#projects .content", {
        translateY: function () {
            return (-$("#projects .content").height() / 2);
        }
    });


    tl.add({
        targets: ".page-transition",

        translateY: function () {
            return ($(window).height());
        },
        height: 0,
        duration: 1000,
        easing: "cubicBezier(0.645, 0.045, 0.355, 1.000)"
    });

    tl.add({
        targets: ".animate",
        opacity: [0, 1],
        duration: 1000
    });

    if (pageName == "home" || pageName == null) {
        tl.add({
            targets: "#hero",
            translateY: function () {
                return (-($("#hero").height() / 2));
            },
            duration: 2000,

        }, "-=1000");
    }

    if (pageName == "projects") {
        tl.add({
            targets: ".content",
            opacity: [0, 1],
            translateY: function () {
                return 0;
            },
            duration: 900,
            delay: anime.stagger(100)
        }, "-=1100");

    }

    tl.finished.then(
        function () {
            $(".content").css("pointer-events", "auto");
        }
    );
}

function firstPageTransition(page, finished) {
    //page is the page we are going into 

    // Target the word element
    const word = document.getElementById("text");
    word.innerHTML = page;
    // Split the word into an array of letters
    const letters = word.innerHTML.split("");

    // Replace the word with spans for each letter
    word.innerHTML = letters.map((letter) => `<span>${letter}</span>`).join("");
    //time line to link animation togehter
    var tl = anime.timeline({
        easing: "easeOutExpo",
        // loop: true,
        duration: 750

    });

    tl.set(".page-transition ", {
        translateY: function () {
            return 0;
        }
    });

    tl.add({
        targets: ".page-transition",
        // translateX: 100, //if you want to get the height use javascript functions

        keyframes: [
            {

                height: function () {
                    return 0;
                },
                duration: 0
            },
            {
                height: function () {
                    return $(window).height();
                    // return -($(".bg").height());
                }
            }
        ],

        duration: 1500,
        easing: "cubicBezier(0.645, 0.045, 0.355, 1.000)"
    });

    tl.add(
        {
            targets: "#text span",
            opacity: [0, 1],
            // translateX: 100, //if you want to get the height use javascript functions
            translateY: function () {
                return $(".page-transition .text-container").height();
            },
            duration: 500,
            easing: "cubicBezier(0.645, 0.045, 0.355, 1.000)",
            delay: anime.stagger(60)
        },
        "-=100"
    );

    tl.add({
        targets: "#text span",
        opacity: [1, 0],
        // translateX: 100, //if you want to get the height use javascript functions
        translateY: function () {
            return $(".page-transition .text-container").height() * 2;
        },
        duration: 400,
        easing: "cubicBezier(0.575, 0.095, 0.855, 0.060)",
        delay: anime.stagger(80, { direction: 'reverse' }),
        // complete: function(anim, finished) {
        //     finished();
        // }
    });

    tl.add({
        targets: ".page-transition",

        translateY: function () {
            return ($(window).height());
        },
        height: 0,
        duration: 1000,
        easing: "cubicBezier(0.645, 0.045, 0.355, 1.000)"
    });

    tl.add({

        targets: "#loadOverlay",
        opacity: [1, 0],
        duration: 1000,
    }, "-=600");


    tl.finished.then(finished);




}




function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}




//###############################ANIMATION#####################################

var container;
var camera, controls, scene, renderer;
var cube;
var oCanvas, octx;

var resolution = 0.15;
var processed_width = Math.round(window.innerWidth * resolution);
var processed_height = Math.round(window.innerHeight * resolution);
var fLetterSpacing = 0;
var strFont = "courier new, monospace";
var fFontSize = (3 / resolution);

var stopAnimate = true;

barba.hooks.beforeEnter((data) => {
    console.log(data.next.namespace);
    // console.log(document.querySelector('#menu-items'));
    closeHam();     // get closeHam 
    stopAnimate = true;


});

$(function () {
    barba.init({
        sync: true,

        transitions: [
            {
                async afterLeave(data) {
                    const done = this.async();
                    // contentAnimation();
                    // var html = data.next.container; 

                    // why doesnt id work?
                    // console.log(data.next.container.querySelector(".load-container .page-transition .text-container .text").innerHTML);

                    var page = "gay";
                    page = data.next.container.querySelector(".page-transition .text-container .text").innerHTML;
                    // console.log(page);
                    if (page == "PROJECTS") {
                        data.next.container.querySelector("#projects").style.pointerEvents = "none";
                        console.log(data.next.container);
                    }

                    // $(".content").css("pointer-events","none");
                    pageTransition(page, () => {
                        console.log("done");
                        data.next.container.querySelector("#loadOverlay").style.zIndex = "-999";
                        done();
                    });



                },

                async enter(data) {

                    var pageName = (data.next.namespace).toString();
                    console.log("THis page" + pageName);

                    $(".content").css("opacity", "100%");
                    $(".content").css("filter", "blur(0px)");
                    // $(".content").css("pointer-events","none");
                    if (data.next.container.querySelector("#projects") != null) {
                        data.next.container.querySelector("#projects").style.pointerEvents = "none";
                    }

                    contentAnimation(pageName);


                },

                async once(data) {

                    const done = this.async();
                    // contentAnimation();
                    // var html = data.next.container; 

                    // why doesnt id work?
                    // console.log(data.next.container.querySelector(".load-container .page-transition .text-container .text").innerHTML);

                    var page = "gay";
                    page = data.next.container.querySelector(".page-transition .text-container .text").innerHTML;

                    //use on load to hide everything on first page -> bg cover -> then after everthing loaded, hide it back by shift z index 
                    if (data.next.namespace == "home") {
                        firstPageTransition(page, () => {
                            console.log("done");
                            data.next.container.querySelector("#loadOverlay").style.zIndex = "-999";
                            done();
                        });
                    }

                    // console.log(data.next.container.querySelector("#loadOverlay"));
                    // data.next.container.querySelector("#loadOverlay").style.display = "none";
                    // contentAnimation();
                },


            },
        ],

        views: [
            {
                namespace: 'home',
                async beforeEnter(data) {
                    $('.logo').attr("href", "index.html")
                    $('.content-list #art a').attr("href", "illustrations/art.html")
                    $('.content-list #projects a').attr("href", "projects/projects.html")
                    $('.content-list #about a').attr("href", "about.html")
                    $('.content-list #playground a').attr("href", "playground.html")
                    console.log("before enter home");

                    //CHANGE DOM ELEMENT 


                    stopAnimate = false;
                    init();
                    animate();
                    function init() {
                        console.log("Run animation");
                        scene = new THREE.Scene();
                        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                        renderer = new THREE.WebGLRenderer({
                            canvas: data.next.container.querySelector("#bg"),
                        });
                        renderer.setSize(window.innerWidth, window.innerHeight);
                        renderer.setClearColor(0xe6e2de);


                        // var trump = new AsciiEffect(renderer.domElement); 
                        // trump.printImgData();
                        // oCanvas  = data.next.container.querySelector("#ascii")
                        // octx = oCanvas.getContext("2d"); 



                        oCanvas = data.next.container.querySelector("#ascii")
                        octx = oCanvas.getContext("2d", {
                            willReadFrequently: true,

                        });

                        octx.canvas.width = window.innerWidth;
                        octx.canvas.height = window.innerHeight;

                        camera.position.setZ(5);
                        // camera.position.y = 150;//what is this? 
                        // camera.position.z = 500;
                        var light = new THREE.PointLight(0xe6e2de, 0.8);
                        light.position.set(500, 500, 500);
                        scene.add(light);
                        var light = new THREE.PointLight(0xe6e2de, 0.5);
                        light.position.set(-500, -500, -200);
                        scene.add(light);
                        // var light = new THREE.AmbientLight( 0xe6e2de, 0.5 ); // soft white light
                        // scene.add(light);

                        const geometry = new THREE.BoxGeometry(4, 4, 4);
                        const material = new THREE.MeshLambertMaterial({ color: 0xf0f0f0 });
                        cube = new THREE.Mesh(geometry, material);
                        scene.add(cube);

                        // effect = new THREE.AsciiEffect(renderer); 
                        // effect.setSize(window.innerWidth,window.innerHeight);

                        renderer.render(scene, camera);



                        var processed_width = window.innerWidth * resolution;
                        var processed_height = window.innerHeight * resolution;
                        processed_width = Math.round(processed_width);
                        processed_height = Math.round(processed_height);
                        asciiInit(processed_width, processed_height);


                        printImgData(renderer.domElement, processed_width, processed_height, asciiTable);



                    }

                    function asciiInit(width, height) {


                        var asciiTable = data.next.container.querySelector("#asciiTable");
                        var oStyle = asciiTable.style;

                        oStyle.position = "fixed";
                        oStyle.top = "0";
                        oStyle.left = "0";
                        oStyle.zIndex = "-5";
                        oStyle.display = "inline";
                        oStyle.width = width + "px";
                        oStyle.height = height + "px";
                        oStyle.margin = "0px";
                        oStyle.padding = "0px";
                        oStyle.letterSpacing = 2 + "px";
                        oStyle.fontFamily = strFont; //is ok 
                        oStyle.fontSize = "10px";
                        oStyle.lineHeight = 10 + "px";
                        oStyle.textAlign = "left";
                        oStyle.textDecoration = "none";
                        oStyle.color = "#333333";
                    }


                    function printImgData(renderer, processed_width, processed_height, asciiTable) {
                        // console.log(asciiTable.innerHTML);
                        var aCharList = ('.,:;-)fL8#08@').split("");
                        var strChars = '';

                        var oCanvasImg = renderer;
                        octx.clearRect(0, 0, processed_width, processed_height);
                        octx.drawImage(oCanvasImg, 0, 0, processed_width, processed_height);
                        //printing none elementts 
                        // console.log(octx.getImageData(0,0,processed_width, processed_height).data);

                        var oimgData = octx.getImageData(0, 0, processed_width, processed_height).data
                        // console.log("Width:" + processed_width); 
                        // console.log("Height:" + processed_height);


                        // console.log(oimgData);
                        for (var y = 0; y < processed_height; y++) {

                            for (var x = 0; x < processed_width; x++) {
                                //rgba in single 1 dim string 
                                var startPos = (y * processed_width + x) * 4;
                                // console.log(oimgData[x+1]);
                                var r = oimgData[startPos];
                                var g = oimgData[startPos + 1];
                                var b = oimgData[startPos + 2];
                                var a = oimgData[startPos + 3];

                                // var brightness = (0.2126*r + 0.7152*g + 0.0722*b)/255; 
                                // var brightness = (0.2126*r + 0.7152*g + 0.0722*b)/255; 
                                var brightness = (0.3 * r + 0.59 * g + 0.11 * b) / 255;
                                //char list goes from
                                var iCharIdx = Math.floor((1 - brightness) * (aCharList.length - 1));
                                var strThisChar = aCharList[iCharIdx];
                                if (strThisChar === undefined)
                                    strThisChar = "&nbsp;";


                                strChars += strThisChar;

                                // strChars += strThisChar; 

                            }
                            strChars += "<br/>";

                        }


                        asciiTable.innerHTML = "<tr><td>" + strChars + "</td></tr>";
                    }

                    function animate() {
                        if (!stopAnimate) {
                            // console.log("Animate cube");
                            requestAnimationFrame(animate);
                            cube.rotation.x += 0.003;
                            cube.rotation.y += 0.003;
                            renderer.render(scene, camera);
                            //yay it works! 
                            printImgData(renderer.domElement, processed_width, processed_height, asciiTable);

                            //   printImgData(); 
                        }

                    }

                }

            },
            {
                namespace: 'contact',
                async beforeEnter(data) {
                    $('.logo').attr("href", "index.html")
                    $('.content-list #project a').attr("href", "projects/project.html")
                    $('.content-list #art a').attr("href", "illustrations/art.html")
                    $('.content-list #about a').attr("href", "about.html")
                    $('.content-list #playground a').attr("href", "playground.html")

                    console.log("wtf");
                    data.next.container.querySelector("#loadOverlay").style.zIndex = "-999";
                    contentAnimation("contact");
                }
            },
            {
                namespace: 'projects',
                //change every link to ../ 

                async beforeEnter(data) {
                    // $(".content-list li").each(function(){$(this).css("background-color","black")})
                    // $.map( $('.content-list li a'), function (element) { $(element).attr("href","../about.html")});

                    $('.logo').attr("href", "../index.html")
                    $('.content-list #projects a').attr("href", "projects.html")
                    $('.content-list #art a').attr("href", "../illustrations/art.html")
                    $('.content-list #about a').attr("href", "../about.html")
                    $('.content-list #playground a').attr("href", "../playground.html")
                    console.log("fuck me projects");
                    data.next.container.querySelector("#loadOverlay").style.zIndex = "-999";
                    contentAnimation("projects");
                }
            },
            {
                namespace: 'art',
                async beforeEnter(data) {

                    $('.logo').attr("href", "../index.html")
                    $('.content-list #art a').attr("href", "art.html")
                    $('.content-list #projects a').attr("href", "../projects/projects.html")
                    $('.content-list #about a').attr("href", "../about.html")
                    $('.content-list #playground a').attr("href", "../playground.html")

                    console.log("fuck me ");
                    data.next.container.querySelector("#loadOverlay").style.zIndex = "-999";
                    contentAnimation("art");
                }
            },
            {
                namespace: 'playground',
                async beforeEnter(data) {
                    // $(".content-list li").each(function(){$(this).css("background-color","black")})
                    // $.map( $('.content-list li a'), function (element) { 

                    //     linkName = $(element).text().toLowerCase();
                    //     console.log(linkName);
                    //     newUrl = "../" + linkName + ".html";

                    //     $(element).attr("href",newUrl)});
                    $('.logo').attr("href", "index.html")
                    $('.content-list #art a').attr("href", "illustrations/art.html")
                    $('.content-list #projects a').attr("href", "projects/projects.html")
                    $('.content-list #about a').attr("href", "about.html")
                    $('.content-list #playground a').attr("href", "playground.html")

                    console.log("fuck me ");
                    data.next.container.querySelector("#loadOverlay").style.zIndex = "-999";
                    contentAnimation("art");
                }
            }
            // {
            //     namespace: 'project',
            //     async beforeEnter(data) {





            //     }
            // }
        ]

    });


});

// barba.hooks.enter((data) => {
//     console.log(data.next.namespace);
// }
// )


//use animation time to string transitions together
//configure ease in function
//Scroll effect load in
