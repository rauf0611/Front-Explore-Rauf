
if ($(".key").length > 0) {
  $(".key").mouseover(function () {
    $("#mySpan").text("CLICK ME")
  });

  $(".key").mouseout(function () {
    $("#mySpan").text("GO EXPLORE NOW")

  });

}


var a = document.querySelectorAll(".wrapper button");

for(var i = 0; i < a.length;i++){
  a[i].addEventListener("click" , function(){
    var active = document.querySelector(".active");
    this.classList.add("active");
    
    if(active){
      active.classList.remove("active");
    }

    
  })
}

$(document).ready(function () {
  $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
         
          $('#myBtn').fadeIn();
      } else {
          $('#myBtn').fadeOut();
      }

  });
  $('#myBtn').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 1000);
      return false;
  });


});








