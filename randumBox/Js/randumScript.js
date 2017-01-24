/**
 * Created by Gil Su on 2017-01-24.
 */
var doc = document,
    btn = doc.getElementById('btn'),
    main = doc.getElementById('main'),
    tdTag = main.getElementsByTagName('td');

btn.onclick = function () {
    var i = 0, len = tdTag.length,
        randumNumber = Math.floor(Math.random()*tdTag.length);
    for (; i<len; i++) {
        tdTag[i].setAttribute('class', '');
    }
    tdTag[randumNumber].setAttribute('class', 'colorBox')
}
