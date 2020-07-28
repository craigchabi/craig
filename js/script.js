$(document).ready(function(){
   $(".click").click(function(){
      $(".shA").slideToggle(600);
      $(".shA").slideToggle(12000);
      event.preventDefault();
      });
});
$(".load").hide();
$(".flex").hover(function () {
    $(this).show(".load").toggle(600);
});

$("button").click(function (event) {
   var client = document.getElementById('button').value;
   alert('Thanks ' + ' message received successful. ' + '!');
   event.preventDefault();
});

$("button").on('click', function () {
   $('form').each(function () {
       this.reset();
   });
});