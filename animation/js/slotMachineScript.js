/**
 * Created by Gil Su on 2017-01-05.
 */

var doc = document;
var btn = doc.getElementById('btn');

btn.onclick = function () {
    var score = doc.getElementById('score');
    var scLi= score.getElementsByTagName('li');
    for (var i = 0; i < scLi.length; i++){
        scLi[i].innerHTML = galglaE.randumNum()
    }
    score.style.display = 'block'
};


var galglaE = {
    restart : function () {
    var restart = doc.getElementById('restart');
    var score = doc.getElementById('score');
        restart.onclick= function () {
            score.style.display = 'none'
        }
    },
    randumNum : function () {
        var slot_1 = doc.getElementById('slot_1');
        var slotLi = slot_1.getElementsByTagName('li');
        var randumNum = Math.floor(Math.random()*slotLi.length);
        var test =  slotLi[randumNum].innerHTML;
        return test
    }
};
galglaE.restart();