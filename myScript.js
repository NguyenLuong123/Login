const user = {acount: "Luong", passWord: 123};
function loginSucess() {
    if(document.getElementById("mk").value == user.passWord && document.getElementById("tk").value == user.acount ) {
        alert("Đăng nhập thành công");
    } else {
        alert("Đăng nhập không thành công");
    }
}