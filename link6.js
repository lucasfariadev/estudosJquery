$(document).ready(function () {
  $("#lista_teste").find("li").each(
    function () {
      $(this).html($(this).html() + "olá");
    },
  );

});
