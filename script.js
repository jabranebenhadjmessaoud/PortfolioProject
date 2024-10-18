// animation form
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
// end 


// animation level bar
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
// end


// animation user image in home
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
// end


// animation image in about
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
// end


var elemen = document.getElementById('right1')
function slide5(){
var pos = elemen.getBoundingClientRect().top;
var screenpos = window.innerHeight;
if (pos<screenpos){
    elemen.classList.add('visible');
}
}
window.addEventListener('scroll', slide5);
slide5();
// 

function slide6(){
    var elemen = document.getElementById('right2')
var pos = elemen.getBoundingClientRect().top;
var screenpos = window.innerHeight;
if (pos<screenpos){
    elemen.classList.add('visible');
}
}
window.addEventListener('scroll', slide6);
slide6();


function slide7(){
    var elemen = document.getElementById('tople')
var pos = elemen.getBoundingClientRect().top;
var screenpos = window.innerHeight;
if (pos<screenpos){
    elemen.classList.add('visible');
}
}
window.addEventListener('scroll', slide7);
slide7();

function slide8(){
    var elemen = document.getElementById('butle')
var pos = elemen.getBoundingClientRect().top;
var screenpos = window.innerHeight;
if (pos<screenpos){
    elemen.classList.add('visible');
}
}
window.addEventListener('scroll', slide8);
slide8();
