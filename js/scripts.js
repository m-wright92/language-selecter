$(document).ready(function() {
  $(".images").submit(function(event){
    event.preventDefault();
    const name = $("input#users-name").val().trim();
    const color = $("select#question2").val();

    const img = ""
      


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
    });
  });

  function imageSelect() {
    if (this === $("#img1")) {
      let img = "apple";
    } else if (this === $("#img2")) {
      let img = "microsoft";
    }
  }
});

  
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






// for finding value of users name
// const name = $("input#users-name").val();