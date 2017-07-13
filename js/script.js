$(document).ready(function () {
    var proyectos = [{name:"IPParking", tipo:"Sistema de Información", descripcion:"Proyécto de gestión de parqueaderos en la ciudad de popayán el cual permite contabilidad, facturación, y gestión de camáras",trabajo:["Análisis","Diseño Web","Diseño Movil", "Programación de aplicaciónes"]}, {name:"Fuxia Store", tipo:"Sistema de Información", descripcion:"Proyécto de control y registro de prendas para mujer, gestion de trabajadores,venta, facturación y contabilidad para el almacén FUXIASTORE del centro de popayán",trabajo:["Análisis","Diseño Web", "Programación de aplicación web"]}, {name:"Muebleria Cali", tipo:"Página Web", descripcion:"Pagína Web informativa para una microempresa de cali, la cual muestra su catalogo de ventas de sus diferentes productos.",trabajo:["Análisis","Diseño Web"]}];

    if(localStorage.getItem("move")){
        var top_scroll = $(".sub-header").position().top;
        moveScroll(top_scroll, 500);
        localStorage.removeItem("move");
    }

    $(".button-menu").click(function(e){
        if($("body").hasClass("nav-close")){
            $("body").removeClass("nav-close");
            $("body").addClass("nav-open");
        }else{
            $("body").removeClass("nav-open");
            $("body").addClass("nav-close");
        }
    });

    $(".button-scroll").click(function () {
        var top_scroll = $("footer").position().top;
        moveScroll(top_scroll, 5000);
    });

    $(".nosotros").click(function () {
        if ($(".sub-header").length) {
            var top_scroll = $(".sub-header").position().top;
            moveScroll(top_scroll, 500);
        } else {
            localStorage.setItem("move",true);
            window.location.href = "index.html";
        }
    });

    $(".button-contacto").click(function(){
        window.location.href = "contacto.html";
    });

    $(".proyect").mouseover(function(){
        var val = $(this).data("id");
        $(".ver-proyect"+val).removeClass("hide");
    });
    $(".proyect").mouseout(function(){
        var val = $(this).data("id");
        $(".ver-proyect"+val).addClass("hide");
    });

    $(".button-proyect").click(function(){
        var val = $(this).data("id");
        $(".mostrar-portafolio").removeClass("hide");
		$("body").css("overflow-y", "hidden");
        $('.data-portafolio').animate({
            scrollTop: 0
        }, 1);

		$(".img1-proyecto").attr('src','assets/img/proyecto'+val+'.png');
		$(".img2-proyecto").attr('src','assets/img/proyecto'+val+'.1.png');
		$(".img3-proyecto").attr('src','assets/img/proyecto'+val+'.2.png');

        var trabajo = "";
        val -= 1;
        for(var i = 0;i<proyectos[val]["trabajo"].length;i++){
            trabajo += "<li>"+proyectos[val]["trabajo"][i]+"</li>";
        }

        $(".titulo-proyecto h3").html(proyectos[val]["name"]);
        $(".titulo-proyecto p").html(proyectos[val]["tipo"]);
        $(".desc-proyecto p").html(proyectos[val]["descripcion"]);
        $(".desc-proyecto ul").html(trabajo);
    });

    $(".mostrar-portafolio, .close-mostrar-portafolio").click(function(){
        $(".mostrar-portafolio").addClass("hide");
        $("body").css("overflow-y", "auto");
    });

    $(".data-portafolio").click(false);

    var enviado = gup("enviado");
    if(enviado != null){
        $(".mostrar-mensaje").removeClass("hide");
        if(enviado == "true"){
            msg = "Su novedad fue enviada exitosamente, se le respondera lo más pronto posible por medio de e-mail o por su número telefonico.";
            img = "fine";
        }else{
            msg = "Hubo un error, por favor intente nuevamente o utilize otro medio para comunicarse con nosotros.";
            img = "error";
        }
        $(".icon-status").css({"background-image": "url(assets/img/"+img+".png)", "background-size": "100% 100%"});
        $(".mensaje-contacto p").html(msg);
    }
    $(".exit-mensaje").click(function(){
        $(".mostrar-mensaje").addClass("hide");
    });
    // $(".button-form-contacto").click(function(e){
    //     $(".button-form-contacto").attr("disabled", true);
    //     $.ajax({
    //         type: "GET",
    //         url: "http://softicol.eshost.com.ar/index.php",
    //         data: {
    //                 nombre: $("#nombre").val(),
    //                 telefono: $("#telefono").val(),
    //                 correo: $("#correo").val(),
    //                 asunto : $("#asunto").val(),
    //                 mensaje : $("#mensaje").val()
    //             },
    //         dataType: "jsonp",
    //         jsonpCallback: "emailStatus"
    //     });
    // });
});

// function emailStatus(data){
//     var msg, img;
//     $(".mostrar-mensaje").removeClass("hide");
//     if(data){
//         msg = "Su novedad fue enviada exitosamente, se le respondera lo más pronto posible por medio de e-mail o por su número telefonico.";
//         img = "fine";
//     }else{
//         msg = "Hubo un error, por favor intente nuevamente o utilize otro medio para comunicarse con nosotros.";
//         img = "error";
//     }
//     $(".icon-status").css({"background-image": "url(assets/img/"+img+".png)", "background-size": "100% 100%"});
//     $(".mensaje-contacto p").html(msg);
//
//     $(".form-contacto")[0].reset();
//     $(".button-form-contacto").attr("disabled", false);
// }

function gup(name){
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp (regexS);
    var tmpURL = window.location.href;
    var results = regex.exec(tmpURL);
    if(results == null)
        return null;
    else
        return results[1];
}

function moveScroll($top_scroll, $seg) {
    $('body, html').animate({
        scrollTop: $top_scroll
    }, $seg);
}
