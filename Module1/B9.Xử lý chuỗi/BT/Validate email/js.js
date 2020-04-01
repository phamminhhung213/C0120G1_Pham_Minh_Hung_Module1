function checkValidateMail(mail) {
    var regexp=/^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if(regexp.test(mail)){
        alert("email đúng cú pháp");
    }else {
        alert("email sai cú pháp");
    }
}