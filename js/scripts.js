var array = [];
$(document).ready(function(){
  $("#new").hide();
  $("#chicken").hide();
  $("#cliff").hide();
  $("#beach").hide();
  console.log("jQuery is working");
  $("#fortune_generator").submit(function(event){
    event.preventDefault();
    $("#response").show();



    $("input:checkbox[name=gather_fortune]:checked").each(function(){
      console.log($(this).val());
      var gatherfortune = $(this).val();
      array.push(gatherfortune);
      if (array.includes("1") && array.includes("3" )) {
        $("#new").show();
      } else if (array.includes("1") && array.includes("4")) {
        $("#chicken").show();
      } else if (array.includes("2") && array.includes ("3")) {
        $("#cliff").show();
      } else if (array.includes("2") && array.includes("4"))    {
        $("#beach").show();
      }
    });

    $("#fortune_generator").hide();
  }); //Submit
}); //jQuery

// console.log("hello");
// console.log(array);
// console.log($(this).val())
