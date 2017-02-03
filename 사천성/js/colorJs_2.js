/**
 * Created by Gil Su on 2017-01-12.
 */
var doc= document;
var tdList = doc.getElementsByTagName('td');
for (var i = 0; i < tdList.length; i++){
    tdList[i].onclick = function () {
        this.setAttribute('class', 'compare');
        galgalE.colorCompare()
    }
}

var galgalE = {
    colorCompare : function () {
        var classLen = [];
        for (var j = 0; j < tdList.length; j++){
            if (tdList[j].className == 'compare'){
                classLen.push(tdList[j]);
                if (classLen.length === 2){
                    var firstColor = classLen[0].style.backgroundColor;
                    var secondColor = classLen[1].style.backgroundColor;
                    if (firstColor == secondColor){
                        for (var k = 0; k < classLen.length; k++){
                            classLen[k].style.backgroundColor = 'white';
                            classLen[k].setAttribute('class', '')
                        }
                    } else {
                        alert('땡!!!!!!!!!!!!');
                        for (var p = 0; p < classLen.length; p++){
                            classLen[p].setAttribute('class', '')
                        }
                    }
                }
            }
        }
    }
}
