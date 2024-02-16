$(document).ready(function(e) {
    $("#name").keyup(function(e) {
        e.preventDefault();
        validateUserName();
    })
    $("#email").keyup(function(e) {
        validateEmailId();
    })
    $("#pwd").keyup(function(e) {
        validatePwd();
    })
    $("#rpwd").keyup(function(e) {
        checkPwd();
    })

    let pwd = document.querySelector("#pwd")
    let rpwd = document.querySelector("#rpwd")
    let icon1 = document.querySelector(".password1 img")
    let icon = document.querySelector(".password img")
    let eyeicon = document.querySelector("#eye-icon")
    let eyesplashicon=document.querySelector("#eye-slash-icon")
    icon.addEventListener("click", () => {
        if (pwd.type == "password") {
            eyeicon.src = "eye-regular.svg"
            pwd.type = "text"
        }
        else {
            pwd.type = "password"
            eyeicon.src = "eye-slash-regular.svg"
        }
    })

    icon1.addEventListener("click", () => {
        if (rpwd.type == "password") {
            eyesplashicon.src = "eye-regular.svg"
            rpwd.type = "text"
        }
        else {
            rpwd.type = "password"
            eyesplashicon.src = "eye-slash-regular.svg"
        }
    })
})


    function validateUserName() {
        let str = "";
        str = $("#name").val();
        if (!/^[A-Za-z]+$/.test(str)) {
            $("#name").val("");
        }
        if (str.length == 0) {
            $(".msg").html("")
            $(".msg").removeClass("error")
        }
        else if (str.length < 3 || str.length > 10) {
            $(".msg").addClass("error")
            $(".msg").html("**The length of username must be between 3 and 10")
        }
        else {
            $(".msg").html("")
            $(".msg").removeClass("error")
        }

    }

    function validateEmailId() {
        let str1 = $("#email").val();

        if (str1.length == 0) {
            $(".msg1").html("")
            $(".msg1").removeClass("error")
        }

        else if (/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/.test(str1)) {
            $(".msg1").html("")
            $(".msg1").removeClass("error")

        }
        else {
            $(".msg1").addClass("error")
            $(".msg1").html("**Invalid Username")
        }
    }

    function validatePwd() {
        let str2 = $("#pwd").val();
        if (str2.length == 0) {
            $(".msg2").html("")
            $(".msg2").removeClass("error")
        }
        else if (str2.length < 6) {
            $(".msg2").addClass("error")
            $(".msg2").html("**Length of password must be greater than 6 characters.")
        }
        else {
            $(".msg2").html("")
            $(".msg2").removeClass("error")
        }
    }

    function checkPwd() {
        let str3 = $("#rpwd").val();
        let str2 = $("#pwd").val()
        if (str2.length == 0) {
            alert("Please enter the password first.")
            $("#rpwd").val("")
            $(".msg3").html("")
            $(".msg3").removeClass("error")
        }
        else if (str2 != str3) {
            $(".msg3").html("**Password didn't match")
            $(".msg3").addClass("error")
        }
        else {
            $(".msg3").html("")
            $(".msg3").removeClass("error")
        }
        if (str3.length == 0) {
            $(".msg3").html("")
            $(".msg3").removeClass("error")
        }
    }