/**
 * Created by Gil Su on 2017-01-09.
 */
var doc = document;
var main = doc.getElementById('main');
var listImg =main.getElementsByTagName('img');
var viewer = doc.getElementById('viewer');
var holdImg = doc.getElementById('holdImg');


var listLen = listImg.length;
for (var i = 0; i < listLen; i++){
    listImg[i].onclick = function () {
        viewer.style.display = 'block';
        console.log(this.nodeName)
        var imgSrc = this.getAttribute('src');
        holdImg.setAttribute('src' , imgSrc)
    }
}


var galgalE = {
    closeView : function () {
    viewer.addEventListener('click', function () {
        viewer.style.display = 'none'
    }, true)
    holdImg.addEventListener('click', function () {
        viewer.style.display = 'block'
    }, true)
    }
}
galgalE.closeView()