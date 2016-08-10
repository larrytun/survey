$(document).ready(function() {
  $("form#scam").submit(function(event) {
    event.preventDefault();
    $("#scam").toggle();
    $(".results").toggle();
    $("#ibirth").text($("#born").val());
    $("#iname").text($("#name").val());
    $("#ifood").text($("input:radio[name=food]:checked").val());
    $("#icolor").text($("#color").val());
    $("#inumber").text($("#creditnumber").val());

  });
});
