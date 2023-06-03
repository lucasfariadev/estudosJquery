$(document).ready(function () {
  $("#botao1").click(
    function () {
      $("p").hide("fast");
    },
  );
  $("#botao2").click(
    function () {
      $("p").show("slow");
    },
  );
});
