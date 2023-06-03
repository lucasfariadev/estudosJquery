$(document).ready(function () {
  $("#bot1").click(function () {
    var v1 = parseInt($("#campo1").val());
    var v2 = parseInt($("#campo2").val());
    var t = v1 + v2;

    alert("O resultado é " + t);
    $("h1").text("Olá! O resultado da soma é " + t + " parabéns.");
  });
});
