/**
 * Created by Gil Su on 2017-01-10.
 */
var doc = document;
var ulList = doc.getElementById('ulList');
var list = ulList.getElementsByTagName('li');
var score = doc.getElementById('score');

ulList.style.width = list[0].offsetWidth * list.length + (list.length*10-10) +"px";
console.log(ulList.style.width)
for(var i = 0; i < list.length; i++){
    var rd = Math.floor(Math.random()*1000);
    var randumText = doc.createTextNode(rd);
    list[i].appendChild(randumText)
    list[i].onclick = function () {
        var liScore = doc.createTextNode(this.innerHTML);
        if(score.innerHTML == ''){
            score.appendChild(liScore)
        } else {
            score.innerHTML = "";
            score.appendChild(liScore)
        }
    }
}

