var ImgBox = document.querySelector('.img-box');
var imgwrap = document.querySelector('.img-wrap');
var originalImg = document.getElementById("originalImg");
var line = document.getElementById("line");


originalImg.style.width = ImgBox.offsetWidth + "px";

var leftSpace = ImgBox.offsetLeft;

ImgBox.onmousemove = function(e){
    var boxWidth = (e.pageX - leftSpace) + "px";
    imgwrap.style.width = boxWidth; 
    line.style.left = boxWidth;
}

ImgBox.onmouseleave = function(){
    var defaultWidth = ImgBox.offsetWidth / 2 + "px";
    imgwrap.style.width = defaultWidth;
    line.style.left = defaultWidth;
}
