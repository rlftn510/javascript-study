/**
 * Created by Gil Su on 2017-01-24.
 */
var doc = document;
var menu = doc.getElementById('menu');
var menuLink = menu.getElementsByTagName('a');

for (var i = 0; i < menuLink.length; i++){
    menuLink[i].onclick = function () {
        galgalE.menuOff()
        this.setAttribute('class', 'active')
        var href = this.getAttribute('href').split('#').join('');

        var tabMenu = doc.getElementById('tabMenu');
        var tabList = tabMenu.getElementsByTagName('div');
        console.log(tabList)
        for (var j = 0; j < tabList.length; j++){
            if (href == tabList[j].id){
                tabList[j].setAttribute('class', 'show')
            }else if(href !== tabList[j].id){
                tabList[j].setAttribute('class', 'hide')
            }
        }
    }
}

var container = doc.getElementById('container');
var conList = container.getElementsByTagName('a');

for (var i = 0; i < conList.length; i++){
    conList[i].onclick = function () {
        galgalE.menuOff()
        var href = this.getAttribute('href').split('#').join('');
        var tabMenu = doc.getElementById('tabMenu');
        var tabList = tabMenu.getElementsByTagName('div');

        for (var j = 0; j < tabList.length; j++){
            if (href == tabList[j].id){
                tabList[j].setAttribute('class', 'show')
            }else if(href !== tabList[j].id){
                tabList[j].setAttribute('class', 'hide')
            }
        }
    }
}


var galgalE = {
    menuOff :function () {
        for (var i = 0; i < menuLink.length; i++) {
            menuLink[i].setAttribute('class', '')
        }
    }
}



