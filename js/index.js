/*
 * @Author: nghiemtv.com
 */
$("#login-button").click(function (event) {
    var userName = document.getElementById("userName").value;
    var pwd = document.getElementById("pwd").value;
    if (userName == "ThanhNhac" && pwd == "22042002") {
      event.preventDefault();
      $("form").fadeOut(500);
      $(".wrapper").addClass("form-success");
      setTimeout(function () {
        location.href = "BirthdayCake.html";
      }, 2000);
    } else {
      alert("Wrong Password");
    }
  });
