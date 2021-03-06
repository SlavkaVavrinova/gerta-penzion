<?php
set_error_handler(function ($errno, $errstr, $errfile, $errline) {
  if (0 === error_reporting()) {
    return false;
  }

  throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
});

require __DIR__ . '/Class/EmailReservation.php';

$emailReservation = new EmailReservation('pension.gerta@seznam.cz');

$emailReservation->sendFormToEmail();

if ($emailReservation->sendFormToEmail()) {
  $response = [
    "status" => "ok",
    "message" => 'Vaše poptávka ubytování na jméno ' . $_POST['jmeno'] . ' byla vytvořena. Budeme Vás brzy kontaktovat. Krásný zbytek dne, Pension Gerta'
  ];
} else {
  $response = [
    "status" => "error",
    "message" => "Omlouváme se, bohužel při odesílání formuláře došlo k chybě. Prosím vyplňte jej znovu. Děkujeme.",
  ];
}

echo json_encode($response);