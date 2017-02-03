/**
 * Created by Gil Su on 2017-02-03.
 */
var doc =document;

(function lineOn() {
    var imgSec = doc.getElementById('imgSec');
    var imgList = imgSec.getElementsByTagName('img');
    var rigthBtn = doc.getElementById('rightBtn');
    var leftBtn = doc.getElementById('leftBtn');
    var slider = doc.getElementById('slider');
    for (var i = 0; i < imgList.length; i++){
        imgList[i].onclick = function () {
            lineOff();
            this.style.borderColor = "red";
            if (this.style.borderColor == 'red'){
                var href = this.getAttribute('src');
                var mainVisual = doc.getElementById('mainVisual');
                mainVisual.setAttribute('src', href)
            }
            if (this.getAttribute('src') == "img/비밥.jpg"){
                leftBtn.style.display = "none";
                slider.style.marginLeft = "108px";
            } else {
                leftBtn.style.display = 'block';
                slider.style.marginLeft = "10px";
            }
            if (this.getAttribute('src') == "img/아기팬더.jpg"){
                rigthBtn.style.display = 'none'
            } else {
                rigthBtn.style.display = 'block';
            }
        }
    }
})();

(function rollBtn() {
    var rigthBtn = doc.getElementById('rightBtn');
    var imgSec = doc.getElementById('imgSec');
    var imgList = imgSec.getElementsByTagName('img');
    var leftBtn = doc.getElementById('leftBtn');
    var slider = doc.getElementById('slider');
    var mainVisual = doc.getElementById('mainVisual');

    imgSec.style.position = 'absolute';
    imgSec.style.left = 0;
    rigthBtn.onclick = function (e) {
        for (var i = 0; i < imgList.length; i++){
            if (imgList[i].style.borderColor !== 'red') continue;
            i++;
            if (i < imgList.length){
                lineOff();
                imgList[i].style.borderColor = "red";
                var btnSrc = imgList[i].getAttribute('src');
                mainVisual.setAttribute('src', btnSrc);
                var test = parseInt(imgSec.style.left, 10);
                imgSec.style.left = (test - 70) + 'px';
                if (i == imgList.length - 1 || parseInt(imgSec.style.left, 10) == 550 ){
                    rigthBtn.style.display = 'none'
                }
                else{
                    leftBtn.style.display = 'block';
                    slider.style.marginLeft = "10px";
                }
            }
        }
        return false
    };


    leftBtn.onclick = function (e) {
        for (var i = 0; i < imgList.length; i++) {
            if (imgList[i].style.borderColor !== 'red') continue;
            lineOff();
            i--;
            if (i > -1) {
                imgList[i].style.borderColor = "red";
                var btnSrc = imgList[i].getAttribute('src');
                mainVisual.setAttribute('src', btnSrc);
                var test = parseInt(imgSec.style.left, 10);
                imgSec.style.left = (test + 70) + 'px';
                if (i == 0 || parseInt(imgSec.style.left, 10) == -490) {
                    leftBtn.style.display = 'none';
                    slider.style.marginLeft = "108px";
                }
                else{
                    rigthBtn.style.display = 'block';
                }
            }
        }
        return false
    }
})();

function lineOff() {
    var imgSec = doc.getElementById('imgSec');
    var imgList = imgSec.getElementsByTagName('img');
    for (var i = 0; i < imgList.length; i++){
        imgList[i].style.borderColor = "gray";
    }
}
