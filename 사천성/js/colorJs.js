/**
 * Created by Gil Su on 2017-01-06.
 */
var doc = document;
var td = doc.getElementsByTagName('td');
for (var i = 0; i < td.length; i++){
    td[i].onclick = function () {
        this.setAttribute('class', 'on');
        var test = [];
        for (var j = 0; j < td.length; j++){
            if (td[j].className == 'on'){
                var sss = td[j]
                test.push(sss)
                if (test.length === 2){
                    td[j].style.color = 'red'

                }
            }
        }

    }
    // var ddd = td[i].getAttribute('class');
    // console.log(ddd)

}