/**
 * Created by Gil Su on 2017-01-23.
 */
var mainLi = $('#main').find('li');
$(mainLi).click(function () {
    var subSrc = $(this).find('img').attr('src');
    console.log(subSrc)
    var subUl =$('#main').find('ul');
    $('#main').css('display', 'none');
    $('#gallery').css('display', 'block');
    $('#gallery').find('#subImg').append(subUl);
    $('#mainImg').find('img').attr('src', subSrc);

    var btn = $('#gallery').find('button');
    $(btn).click(function () {
        $('#gallery').css('display', 'none');
        $('#main').css('display', 'block');
        $('#main').append(subUl)
    })
})
