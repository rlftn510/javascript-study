/**
 * Created by Gil Su on 2017-01-09.
 */
var doc = document;
var ulList = doc.getElementById('ulList');
var list = ulList.getElementsByTagName('li');
console.log(ulList.firstChild.nextSibling)
console.log(ulList.lastChild.previousSibling)
console.log('asd')
var prevBtn = doc.getElementById('prevBtn');
var nextBtn = doc.getElementById('nextBtn');


prevBtn.onclick = function () {
    ulList.appendChild(list[0])
}
nextBtn.onclick = function () {
    ulList.push(list[list.length - 1])
}


