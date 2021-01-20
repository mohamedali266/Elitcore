
function test () {
    'use strict';
    //Adjist slider height 
    var winH   = window.height,
        upperH = ('.upper-bar').innerHeight,
        navH   = ('.navbar').innerHeight;
        document.querySelector('.slider').height = winH -  upperH + navH ;
};
test();
/*

function test () {
    "use strict";
    var  winH = window.height,
        upperH = document.querySelector('.upper-bar').innerHeight,
        navH = document.querySelector('.navbar').innerHeight,
        slid = document.querySelector('.slider');

        slid.height = winH - ( upperH + navH);
}
test();
*/


$(' .features-work ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
});