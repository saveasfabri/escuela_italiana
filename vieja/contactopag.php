<?php
	$dest = "administracion@escuelaitaliana.com";
	$nombre = $_POST["namecontacto"];
	$mail = $_POST["emailcontacto"];
	$mensaje = $_POST["mensajecontacto"];
	
	$headers = 'From: '.$mail."\r\n".
				 
				'Reply-To: '.$mail."\r\n".
				 
				'X-Mailer: PHP/' . phpversion();

	$headers .= 'Content-type: text/html; charset=iso-8859-1'."\r\n";
	$asunto = "Escuela Italiana. Consulta de ".$nombre;
	$cuerpo = "Nombre: ".$nombre."\n";
	$cuerpo .= "Email: ".$mail."\n";
	$cuerpo .= "Mensaje: ".$mensaje."\n";

	if (isset($nombre) && isset($mail) && isset($mensaje)){
		echo "Correcto";
		mail($dest,$asunto,$cuerpo,$headers); //ENVIAR!
	}else{
		echo "Incorrecto";
	}
	
	ini_set("log_errors" , "1");
	ini_set("error_log" , "Errors.log.txt");
	ini_set("display_errors" , "0");
?>