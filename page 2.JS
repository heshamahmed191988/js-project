var usname_error = document.getElementById('err1');
var pass_error = document.getElementById('err2');

function login() {
    var uname = document.getElementById("email").value;
    var pwd = document.getElementById("pwd1").value;
    var filter = /[A-Za-z]\w{4,10}$/;
    var filter2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/
    if (filter.test(uname) && filter2.test(pwd)) {
        window.location = "page 3.html";
    }
    else if (!filter.test(uname)) {
        usname_error.style.display = "block";
    }
    else if (!filter2.test(pwd) && filter.test(uname)) {
        usname_error.style.display = "none";
        pass_error.style.display = "block";
    }
    else if (!filter2.test(pwd)) {
        pass_error.style.display = "block";
    }
    else {
        usname_error.style.display = "block";
    }
}

//Reset Inputfield
function clearFunc() {
    document.getElementById("email").value = "";
    document.getElementById("pwd1").value = "";
    document.getElementById("in-gender").value = "";
}

//show and hide
var myButton = document.getElementById('show-p'),
    myInput = document.getElementById('pwd1');
myButton.onclick = function (on) {
    on.preventDefault();
    if (this.textContent == 'Show') {
        this.textContent = 'Hide';
        myInput.setAttribute('type', 'text');
    } else {
        this.textContent = 'Show';
        myInput.setAttribute('type', 'password');
    }
};

