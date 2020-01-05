/*! Change layout of webpage - 1/01/2020
 * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */


////////////////////////////// Switch from TILE view to TABLE view //////////////////////////////////////

function hidePanels() {
    var x = document.getElementById("tableLayout");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
    var y = document.getElementById("tileLayout");
    if (y.style.display === "block") {
        y.style.display = "none";
    }
    else {
        y.style.display = "none";
    }
}


function hideTable() {
    var x = document.getElementById("tileLayout");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "block";
    }

    var y = document.getElementById("tableLayout");
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "none";
    }
} 

      
//////////////// remove fixed-top class header on small screens //////////////////////////////
$(window).bind("resize",function(){
            console.log($(this).width())
    if($(this).width() < 992){
            $('.sticky').removeClass('fixed-top');
        }
    else{
            $('.sticky').addClass('fixed-top');
        }
});





