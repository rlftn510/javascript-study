/**
 * Created by Gil Su on 2017-01-09.
 */
var doc = document;
var popLink = doc.getElementById('popLink');
popLink.onclick = function () {
    var popOption = 'width = 500, height = 300, left = 300, top = 400, resizable=no';
    window.open('popUp.html', '광고창', popOption)
}