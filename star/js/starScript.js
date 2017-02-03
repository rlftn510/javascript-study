/**
 * Created by Gil Su on 2017-02-03.
 */

var doc = document;
var score = doc.getElementById('score');
var btn = doc.getElementById('btn');
var redStar = doc.getElementById('redStar');
btn.onclick =function () {
    if (score.value > 10){
        alert('점수가 초과했습니다')
    } else {
        var scoreValue = parseInt(score.value)*10;
        redStar.style.width = scoreValue + '%';
    }
}