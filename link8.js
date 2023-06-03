$(document).ready(function () {
  $("#bot1").click(function () {
    if ($("#campo1").val() != $("#campo2").val()) {
      alert("valores diferentes");
    } else {
      alert("valores iguais");
    }
  });
});
