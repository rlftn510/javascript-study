/**
 * Created by Gil Su on 2017-01-05.
 */

var doc = document;
var btn = doc.getElementById('btn');

btn.onclick = function () {
    var score = doc.getElementById('score');
    score.innerHTML = ttt()
}

function ttt() {
    var randumNum = parseInt(Math.floor(Math.random()*1000));
    var randumNum = randumNum + ''; // 왜 이렇게 해야만 길이를 알수 있는지
    var numLen = randumNum.length;
    var test = '';
    if (numLen < 3){
        if (numLen == 2){
            test = randumNum + '0';
            return test
        }
        if (numLen == 1){
            test = randumNum + '00';
            return test
        }
    } else {
        test = randumNum;
        return test
    }
}