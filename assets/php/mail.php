<?php
//get data from form  
$name = $_POST['firstName'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "seofreerange@gmail.com";
$subject = "¡Nuevo contacto de reseñas!";
$txt ="$name\n\n$email\n\n$message";
$headers = "From: reseñas@gmail.com" . "\r\n" .
"CC: ";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("../pages/thankyou.html");
?>