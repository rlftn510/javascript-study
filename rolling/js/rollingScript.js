/**
 * Created by Gil Su on 2017-01-09.
 */
var doc = document;
var ulList = doc.getElementById('ulList');
var list = ulList.getElementsByTagName('li');
console.log(ulList.firstChild.nextSibling);
console.log(ulList.lastChild.previousSibling);
var prevBtn = doc.getElementById('prevBtn');
var nextBtn = doc.getElementById('nextBtn');

ulList.style.width = list[0].offsetWidth * list.length + (list.length*10-10) +"px";

prevBtn.onclick = function () {
    ulList.appendChild(list[0]);
};
nextBtn.onclick = function () {
    ulList.insertBefore(list[list.length - 1], list[0]);
};


