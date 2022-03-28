$(document).ready(function() {
  $(".survey").submit(function(event){
    event.preventDefault();

  const name = $("#users-name").val().trim();
  const question1 = $("select#question2").val();
  const question2 = $("select#question3").val();
  const question3 = $("input:radio[name=flavor]:checked").val();
  const question4 = $("input:radio[name=location]:checked").val();

  surveyResult(name, question1, question2, question3, question4);
  });
  

  $("#begin").click(function() {
    $(".intro").addClass("hidden");
    $(".name-input").removeClass("hidden");
  })
  $("#q1").click(function() {
    $(".name-input").addClass("hidden");
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
  });
  $(".images").click(function() {
    $(".images").addClass("hidden2");
  })

  function surveyResult(name, question1, question2, question3, question4) {
    if (name !== "" && question1 !== "Choose one" && question2 !== "Choose one" && question3 !== "chocolate" && question4 !== "city") {
      $("images").addClass("hidden2");
    }else if (name !== "" && question1 === "Red" && question2 === "Pizza" && question3 === "chocolate" && question4 === "city" && $(".images").hasClass("hidden2")) {
        $("#ruby, .name").removeClass("hidden");
        $(".name").text(name);
    }else if (name !== "" && question1 === "Blue" && queestion2 === "Sushi" && question3 === "vanilla" && question4 === "camp" && $(".images").hasClass("hidden2")) {
      $("#ruby, .name").removeClass("hidden");
      $(".name").text(name);
    }else if (name !== "" && question1 === "Green" && queestion2 === "Tacos" && question3 === "rocky" && question4 === "visit" && $(".images").hasClass("hidden2")) {
      $("#c#, .name").removeClass("hidden");
      $(".name").text(name);
    }else if (name !== "" && question1 === "Orange" && queestion2 === "Pasta" && question3 === "mint" && question4 === "camp" && $(".images").hasClass("hidden2")) {
      $("#c#, .name").removeClass("hidden");
      $(".name").text(name);
    }else if (name !== "" && question1 === "Yellow" && queestion2 === "Burgers" && question3 === "mint" && question4 === "home" && $(".images").hasClass("hidden2")) {
      $("#javascript, .name").removeClass("hidden");
      $(".name").text(name);
     }else { 
      $("#javascript, .name").removeClass("hidden");
      $(".name").text(name);
    }
  }
});