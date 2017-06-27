$(document).ready(function () {
    if(localStorage.getItem("move")){
        $top_scroll = $(".sub-header").position().top;
        moveScroll($top_scroll, 500);
        localStorage.removeItem("move");
    }
    
    $(".button-scroll").click(function () {
        $top_scroll = $("footer").position().top;
        moveScroll($top_scroll, 5000);
    });
    
    $(".nosotros").click(function () {
        if ($(".sub-header").length) {
            $top_scroll = $(".sub-header").position().top;
            moveScroll($top_scroll, 500);
        } else {
            localStorage.setItem("move",true);
            window.location.href = "index.html";
        }
    });
    
    $(".button-contacto").click(function(){
        window.location.href = "contacto.html";
    });
    
    $(".proyect").hover(function(e){
        console.log(e.valueOf);
    });
});

function moveScroll($top_scroll, $seg) {
    $('body, html').animate({
        scrollTop: $top_scroll
    }, $seg);
}