<?php
$name = $_POST['name'];
$email = $_POST['email'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$name = urldecode($name);
$email = urldecode($email);
$name = trim($name);
$email = trim($email);


if( mail("onika164604@gmail.com", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$email ,"From: example2@mail.ru \r\n")){
  echo "сообщение успешно отправлено";
}
else {
    echo "при отправке сообщения возникли ошибки";
};

?>