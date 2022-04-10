<?php 

$file = fopen("aranceles.txt", "a");
fwrite($file, $_POST['nombre_contacto'] . ' ' .$_POST['mail_contacto']  . PHP_EOL);


fclose($file);

header('Location: archivos/aranceles.pdf');

?>
	

