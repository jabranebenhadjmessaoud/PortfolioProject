var slidebox = document.getElementById('formi')
function checkslide(){
var boxposition = slidebox.getBoundingClientRect().top;
var screenposition = window.innerHeight;
if (boxposition<screenposition){
    slidebox.classList.add('visible');
}
}

window.addEventListener('scroll', checkslide);


checkslide();

var el = document.getElementById('level')
function slide2(){
var pos = el.getBoundingClientRect().top;
var screenpos = window.innerHeight;
if (pos<screenpos){
    el.classList.add('visible');
}
}

window.addEventListener('scroll', slide2);


slide2();

var ele = document.getElementById('user')
function slide3(){
var pos = ele.getBoundingClientRect().top;
var screenpos = window.innerHeight;
if (pos<screenpos){
    ele.classList.add('visible');
}
}

window.addEventListener('scroll', slide3);


slide3();

var eleme = document.getElementById('camputer')
function slide4(){
var pos = eleme.getBoundingClientRect().top;
var screenpos = window.innerHeight;
if (pos<screenpos){
    eleme.classList.add('visible');
}
}

window.addEventListener('scroll', slide4);


slide4();