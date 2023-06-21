$(document).ready(function() {
    $('.radio-option').click(function () {
        $(this).not(this).removeClass('click');
        $(this).toggleClass("click");
    });
});
