<?php 
if(isset($_POST)){
	$name = $_POST['person_name'];
	$email = $_POST['person_email'];
	$text = $_POST['text'].'\n\nel correo de contacto es: '.$email;
	$asunto = 'Correo de: '.$name;
	$myemail ='supersibaja@gmail.com';
	mail($myemail,$asunto,$text);
}
?>