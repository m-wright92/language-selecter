$(document).ready(function() {
  const name = $("input#users-name").val().trim();
  const color = $("select#question2").val();

  $("#begin").click(function() {
    $(".intro").addClass("hidden");
    $(".name").removeClass("hidden");
  })
  
  $("#q1").click(function() {
    $(".name").addClass("hidden");
    $(".colors").removeClass("hidden");
  })

  $("#q2").click(function() {
    $(".colors").addClass("hidden");
    $(".food").removeClass("hidden");
  })

  $("#q3").click(function() {
    $(".food").addClass("hidden");
    $(".flavor").removeClass("hidden");
  })

  $("#q4").click(function() {
    $(".flavor").addClass("hidden");
    $(".vacation").removeClass("hidden");
  })

  $("#q5").click(function() {
    $(".vacation").addClass("hidden");
    $(".images").removeClass("hidden");
  })

  $(function() {
    $(".images").click(function() {
      let fired_button = $("button").val();
      alert(fired_button);
    // $(".images").addClass("hidden");
    // $(".results").removeClass("hidden");
    });
  });


});




// for finding value of users name
// const name = $("input#users-name").val();