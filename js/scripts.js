$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var personnameInput = $("input#personname").val();
    var beverage = $("#beverage").val();
    var starttimeInput = $("input#starttime").val();
    var endtimeInput = $("input#endtime").val();
    var favoriteColor = $("#color").val();


    $(".personname").text(personnameInput);
    $(".starttime").text(starttimeInput);
    $(".endtime").text(endtimeInput);
    $(".beverage").text(beverage);



    $("#bookinginfo").show();



    event.preventDefault();
  });
});
