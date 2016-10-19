$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var personnameInput = $("input#personname").val();
    var beverage = $("#beverage").val();
    var music = $("input:radio[name=music]:checked").val();



    $(".personname").text(personnameInput);
    $(".music").text(music);
    $(".endtime").text(endtimeInput);
    $(".beverage").text(beverage);
    



    $("#bookinginfo").show();



    event.preventDefault();
  });
});
