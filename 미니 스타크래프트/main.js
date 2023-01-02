let hp = 3;

$("#drone").click(function () {
  console.log("침 발사!!!!");
  $("#spit").fadeIn();
  $("#spit").animate({ left: "+=230" });
  $("#spit").fadeOut(function () {
    hp = hp - 1;
    $("#hp").text(`HP : ${hp}`);
    if (hp == 0) {
      $("#bunker").fadeOut();
    }
  });
  $("#spit").css({ left: "150px" });
});
