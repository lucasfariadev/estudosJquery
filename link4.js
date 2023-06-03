$(document).ready(function () {
  $("#lista_teste").hover(
    function () {
      $(this).addClass("fundo");
    },
    function () {
      $(this).removeClass("fundo");
    }
  );

  $("#lista_teste2").hover(
    function () {
      $(this).addClass("fundo2");
    },
    function () {
      $(this).removeClass("fundo2");
    }
  );
});
