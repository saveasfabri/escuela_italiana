    
$(document).ready(function($){

    var $contactform = $("#contact_form");
    var meth = $contactform.attr("method");
    var act = $contactform.attr("action");
    var $divstatus = $("#statusx");
    $divstatus.hide();
    console.log("Action: "+act);
    console.log("method: "+meth);
    $("div[id^='xerror-']").hide();
    $divstatus.fadeOut("slow");

        $contactform.submit(function(event){ 
            event.preventDefault();

            var error = false;

            var nombre = $("input#nombre_contacto").val();
            if ( nombre == "" || nombre == " "){
                error = true;
                $("#xerror-nombre").fadeIn("slow");

            }else{
                $("#xerror-nombre").hide();
            }

            var email_compare = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/; // Syntax to compare against input
            var email = $('input#mail_contacto').val(); // get the value of the input field
            if (email == "" || email == " ") { // check if the field is empty                    
              $("#xerror-mail").fadeIn('slow'); // error - empty
              error = true;
            }else if (!email_compare.test(email)) { // if it's not empty check the format against our email_compare variable
              $("#xerror-emailInvalido").fadeIn('slow'); // error - not right format
              error = true;
            }else{
                $("#xerror-mensaje").hide();
                $("#xerror-emailInvalido").hide();
            }

            var mensaje = $("textarea#mensaje_contacto").val();
            console.log("length del mensaje es: "+mensaje.length);
            if(mensaje == "" || mensaje == " "){
                $("#xerror-mensaje").fadeIn("slow");
                error = true;
            }else if (mensaje.length < 20){
                error = true;
                $("#xerror-mensajeinvalido").fadeIn("slow");
            }else{
                $("#xerror-mensaje").hide();
                $("#xerror-mensajeinvalido").hide();
            }

            if(error == true) {
              $divstatus.slideDown('slow');

              return false;
            }
            console.log("error es: "+error);

            var data_string = $contactform.serialize();
            $.ajax({
                type: meth,
                url: act,
                data: data_string,
                success: function(resp){
                    if (resp == "Correcto"){
                        console.log(resp);
                        $("div[id^='error']").fadeOut("slow");
                        $divstatus.html("<strong>Tu mensaje se envió correctamente. Gracias!</strong>").fadeIn(500);

                    }else{
                        console.log(resp);
                    }
                },
                error: function(request,estado){
                    console.log("error- jqXHR:"+request);
                    console.log("error- estado: "+estado);
                    $divstatus.html("<strong>Algo salió mal!</strong>").slideToggle(500);
                },
                complete: function(jqXHR,estado){
                    console.log("complete- jqXHR:"+jqXHR);
                    console.log("complete- estado: "+estado);
                    $("#contact_form")[0].reset();
                    $("div[id^='xerror']").fadeOut("slow");
                }

            });

        //return false; // stops user browser being directed to the php file
        }); 
});