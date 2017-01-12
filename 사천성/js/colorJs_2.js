/**
 * Created by Gil Su on 2017-01-12.
 */
var doc= document;
var tdList = doc.getElementsByTagName('td');
for (var i = 0; i < tdList.length; i++){
    tdList[i].onclick = function () {
        this.setAttribute('class', 'test1')
        ddd()

    }
}

function ddd() {
    var classLen = []
    for (var j = 0; j < tdList.length; j++){
        if (tdList[j].className == 'test1'){
            classLen.push(tdList[j])
            if (classLen.length === 2){
                if (classLen[0].style.backgroundColor == classLen[1].style.backgroundColor){
                    for (var k = 0; k < classLen.length; k++){
                        classLen[k].style.backgroundColor = 'white';
                        classLen[k].setAttribute('class', '')
                    }
                } else {
                    alert('틀렸습니다.')
                    for (var o = 0; o < classLen.length; o++){
                        classLen[o].setAttribute('class', '')
                    }
                }
            }
        }
    }
}
