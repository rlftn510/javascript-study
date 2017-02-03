/**
 * Created by Gil Su on 2017-02-03.
 */
var doc = document;
var signup = doc.getElementById('signup');
var validationSec = doc.getElementById('validationSec');
var inputList = validationSec.getElementsByTagName('input');


function idValidation() {
    var idVali = doc.getElementById('idVali');
    var idReg = /^[A-za-z]/g;
    if (idVali.value === ""){
        alert('아이디를 입력해주세요');
        idVali.focus();
        return false;
    }
    if (idVali.value.length < 6 || idVali.value.length > 12){
        alert('아이디는 6~12자를 입력해주세요');
        idVali.select();
        return false
    }
    if (!isNaN(idVali.value.substr(0,1))){
        alert('첫 글자는 숫자 일 수 없습니다.');
        idVali.select()
        return false;
    }
    if (!idReg.test(idVali.value)){
        alert('아이디는 영어로 입력해야합니다');
        idVali.select();
        return false;
    }
    return true
}

function emailVali() {
    var email_1 = doc.getElementById('email_1');
    var email_2 = doc.getElementById('email_2');
    var idReg = /^[A-za-z]/g;
    if (email_1.value == '' && email_2.value == ''){
        alert('이메일을 입력해 주세요');
        email_1.focus();
        return false
    }
    if (!idReg.test(email_1.value) && !idReg.test(email_2.value)){
        alert('제대로된 이메일 주소를 입력해 주세요.');
        email_1.select();
        return false
    }
    return true;
}

function nameVali() {
    var nameVali = doc.getElementById('nameVali');
    if (nameVali.value == ''){
        alert('이름을 입력해주세요');
        nameVali.focus();
        return false
    }
    return true;
}
function phoneVali() {
    var phone1 = doc.getElementById('phone1');
    var phone2 = doc.getElementById('phone2');
    if (phone2.value == '' && phone2.value == ''){
        alert('핸드폰 번호를 입력해 주세요');
        phone1.focus();
        return false
    }
    return true;
}

function agreeVali() {
    for (var i = 0; i < inputList.length; i++){
        var typeCheck = inputList[i].getAttribute('type');
        if (typeCheck == 'checkbox'){
            if (!inputList[i].checked){
                alert('이용약관에 동의 해주세요');
                inputList[i].focus();
                return false
            }
        }
    }
    return true
}

function sexVali() {
    var radioCheck = 0;
    for (var i = 0; i < inputList.length; i++){
        var typeRadio = inputList[i].getAttribute('type');
        if (typeRadio == 'radio'){
            if (inputList[i].checked == true){
                radioCheck++;
                break
            }
        }
    }
    if (radioCheck == 0){
        alert('성별을 확인해 주세요');
        return false
    } else {
        return true
    }
}

function passwordVali() {
    var password_1 = doc.getElementById('password_1');
    var password_2 = doc.getElementById('password_2');
    if (password_1.value =='' || password_2.value ==''){
        alert('비밀번호를 입력해주세요');
        password_1.focus();
        return false
    } else if(password_1.value !== password_2.value ){
        alert('비밀번호가 같지 않습니다.');
        password_2.focus();
        return false
    }
    return true
}


signup.onclick = function () {
    event.preventDefault();
    if (!idValidation() || !emailVali() || !passwordVali() || !nameVali() || !phoneVali() || !sexVali() || !agreeVali()){
        return false
    }
    alert('가입이 완료되었습니다.')
}
