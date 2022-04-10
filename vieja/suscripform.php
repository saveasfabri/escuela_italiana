<?php
	$dest = "ale@graphicdesignweb.com.ar, newsletter@escuelaitaliana.com";
	$mail = $_POST["mail"];
	
	$headers = 'From: '.$mail."\r\n".
				 
				'Reply-To: '.$mail."\r\n".
				 
				'X-Mailer: PHP/' . phpversion();

	$headers .= "Content-Type: text/html;charset=utf-8"."\r\n";

	
	$asunto = "Escuela Italiana. Suscripcion Newsletters de ".$mail;
	$cuerpo = "Nueva suscripción de newsletters";
	$cuerpo .= "Email: ".$mail."\n";


	// resp auto
	$subject_resp_auto= "Suscripción Escuela Italiana";
	$cont_resp_auto = "Hola! "."\n"."Tu suscripción a la web de la escuela fue exitosa. "."\n"."Muchas gracias!";
	$headers_resp_auto = 'From: '.$mail."\r\n".
				 
				'Reply-To: '.$mail."\r\n".
				 
				'X-Mailer: PHP/' . phpversion();
	$headers_resp_auto .= "Content-Type: text/html;charset=utf-8"."\r\n";

	

	if (isset($mail)){
		echo "Correcto";
		mail($dest,$asunto,$cuerpo,$headers); //ENVIAR!
		mail($mail,$subject_resp_auto,$cont_resp_auto,$headers_resp_auto);
		$fi = fopen("suscripciones.txt", "a") or die("problemas al crear el archivo");
		fwrite($fi, $mail.", ");
		fclose($fi);
	}else{
		echo "Incorrecto";
	}

	ini_set("log_errors" , "1");
	ini_set("error_log" , "Errors.log.txt");
	ini_set("display_errors" , "0");
?>