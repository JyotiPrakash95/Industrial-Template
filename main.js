// navigation
$(document).ready(function () {
    $(".fa-bars").click(function () {
        $(".navlinks").css("display", "block").slideDown(2000);
    });
    $(".fa-times").click(function () {
        $(".navlinks").css("display", "none").slideUp(2000);
    });
});