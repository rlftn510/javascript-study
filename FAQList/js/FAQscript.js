/**
 * Created by Gil Su on 2017-02-03.
 */
$('.allclose').click(function () {
    if ($('.a').css('display') == 'none'){
        $('.a').show(400)
    } else if ($('.a').css('display') == 'block'){
        $('.a').hide(400)
    }
});
var q = $('.q').find('a');
$(q).click(function () {
    if ($(this).parent().next().css('display') == 'none'){
        $(this).parent().next().show(500)
    } else if ($(this).parent().css('display') == 'block'){
        $(this).parent().next().hide(500)
    }
})