function checkValidateAccount(account) {
    var regexp=/^[_a-z0-9]{6,}$/;
    if(regexp.test(account)){
        alert("account hơp lệ");
    }else {
        alert("account không hợp lê");
    }
}