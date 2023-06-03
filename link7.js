$(document).ready(function () {
  $("body").find("p").each(
    function () {
      $(this).html($(this).html() + "olá");
    },
  );

});
