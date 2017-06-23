$(document).ready(function () {
    $(".button-scroll").click(function () {
        $top_scroll = $("footer").position().top;
        moveScroll($top_scroll, 5000);
    });
    $(".nosotros").click(function () {
        $top_scroll = $(".sub-header").position().top;
        moveScroll($top_scroll, 500);
    });
});

function moveScroll($top_scroll, $seg) {
    $('body, html').animate({
        scrollTop: $top_scroll
    }, $seg);
}