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
});

function surveyResult(name, question1, question2, question3, question4) {
  if (name !== "" && question1 === "Red" && question2 === "Pizza" && question3 === "chocolate" && question4 === "city" && $(".images").hasClass("hidden2")) {
      $("#ruby, .name").removeClass("hidden");
      $(".name").text(name);
  // }else {
  //   $(".name").text(name)
  }
}




  
  // $("button#img1").click(function() {
  //     let fired_button = $("#img1").val();
  //     alert(fired_button);
  //   });
  
  // $("button#img2").click(function() {
  //     let fired_button = $("#img2").val();
  //     alert(fired_button);
  //   });

  // $("button#img3").click(function() {
  //     let fired_button = $("#img3").val();
  //     alert(fired_button);
  //   });

  // $("button#img4").click(function() {
  //     let fired_button = $("#img4").val();
  //     alert(fired_button);
  //   });