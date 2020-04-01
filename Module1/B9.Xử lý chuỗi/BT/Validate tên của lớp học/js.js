function checkValidateClass(class1) {
    var regexp=/^[CAP][/.,*&%!@$()||]{0}[0-9]{4}[GHIKLM]$/;
    if(regexp.test(class1)){
        alert("Yes");
    }else {
        alert("No");
    }
}