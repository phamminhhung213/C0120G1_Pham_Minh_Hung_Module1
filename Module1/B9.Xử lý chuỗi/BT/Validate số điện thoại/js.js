function checkValidatePhone(sdt) {

   var regexp=/^[(][0-9]{2}[)][-][(][0-9]{8}[)]$/;
    if(regexp.test(sdt)){
        alert("Yes!");
    }else
        alert("No!");
}