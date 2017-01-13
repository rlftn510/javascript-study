/**
 * Created by Gil Su on 2017-01-09.
 */
var doc = document;
var main = doc.getElementById('main');
var listImg =main.getElementsByTagName('img');


var listLen = listImg.length;
for (var i = 0; i < listLen; i++){
    listImg[i].onclick = function () {
        galgalE.createShow();
        var show = doc.getElementById('show');
        var holdImg = doc.getElementById('holdImg');
        galgalE.cloneImg();
        var imgSrc = this.getAttribute('src');
        holdImg.setAttribute('src' , imgSrc);
        var viewer = doc.getElementById('viewer');
        galgalE.removeShow()
    }
}


var galgalE = {
        removeShow : function () {
        viewer.onclick = function () {
            var bodyy = doc.getElementsByTagName('body')[0];
            bodyy.removeChild(show)
        }
    },

    createShow : function () {
    var crediv = doc.createElement('div');
    crediv.setAttribute('id', 'show');
    var crediv_1 = doc.createElement('div');
    crediv_1.setAttribute('id', 'viewer');
    var creImg = doc.createElement('img');
    creImg.setAttribute('id', 'holdImg');
    crediv.appendChild(crediv_1);
    crediv.appendChild(creImg);
    var bodyy = doc.getElementsByTagName('body')[0];
    bodyy.appendChild(crediv);
    },

    cloneImg : function () {
        show.style.display = 'block';

    }
}

