$(document).ready(function() {
  $("#begin").click(function() {
    $(".intro").addClass("hidden");
    $(".colors").removeClass("hidden");
  })
  
  $("#q1").click(function() {
    $(".colors").addClass("hidden");
  })
})