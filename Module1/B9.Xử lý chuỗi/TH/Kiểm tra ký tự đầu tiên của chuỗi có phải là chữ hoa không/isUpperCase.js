function isFirstLetterUpperCase(str) {
    var c = /^[A-Z]/;
    if (c.test(str)) {
        alert("chuỗi có kí tự đầu là chữ hoa");
    } else {
        alert("chuỗi không có kí tự đầu là chữ hoa");
    }

}