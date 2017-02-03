/**
 * Created by Gil Su on 2017-02-03.
 */
var doc = document;
var inputText = doc.getElementById('inputText');
var textSec = doc.getElementById('textSec');
inputText.onkeyup = function () {
    galgalE.cloneText()
}


var galgalE = {
    cloneText : function () {
        var textVal = inputText.value;
        textSec.innerHTML = textVal
    }
}
