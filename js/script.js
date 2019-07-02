$(document).ready(function(){

  $("#myProjects").fadeIn();
  $("#experience").css("display", "none");
  $("#social").css("display", "none");
  $('#aboutMe').css("display", "none");

  $("#social_btn").click(function(){
    $("#myProjects").fadeOut(0);
    $("#experience").fadeOut(0);
    $("#aboutMe").fadeOut(0);
    $('#social').fadeIn(700);

    $("#experience_btn, #projects_btn, #about_btn").css("box-shadow", "none");
    $("#social_btn").css("box-shadow", "0px 3px 4px rgba(0,0,0,.4)");
  });

  $("#about_btn").click(function(){
    $("#myProjects").fadeOut(0);
    $("#experience").fadeOut(0);
    $('#social').fadeOut(0);
    $("#aboutMe").fadeIn(700);

    $("#social_btn, #projects_btn, #experience_btn").css("box-shadow", "none");
    $("#about_btn").css("box-shadow", "0px 3px 4px rgba(0,0,0,.4)");
  });

  $("#experience_btn").click(function(){
    $("#myProjects").fadeOut(0);
    $("#aboutMe").fadeOut(0);
    $('#social').fadeOut(0);
    $("#experience").fadeIn(700);

    $("#social_btn, #projects_btn, #about_btn").css("box-shadow", "none");
    $("#experience_btn").css("box-shadow", "0px 3px 4px rgba(0,0,0,.4)");
  });

  $("#projects_btn").click(function(){
    $("#experience").fadeOut(0);
    $("#aboutMe").fadeOut(0);
    $('#social').fadeOut(0);
    $("#myProjects").fadeIn(700);

    $("#social_btn, #experience_btn, #about_btn").css("box-shadow", "none");
    $("#projects_btn").css("box-shadow", "0px 3px 4px rgba(0,0,0,.4)");

  });

});
