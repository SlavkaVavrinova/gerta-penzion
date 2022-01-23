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
    "message" => 'Vaše poptávka ubytování na jméno ' . $_POST['name'] . ' byla vytvořena. Budeme Vás brzy kontaktovat. Krásný zbytek dne, Pension Gerta'
  ];
} else {
  $response = [
    "status" => "error",
    "message" => "Při odesílání formuláře doslo k chybě. Prosíme vyplňte znovu.",
  ];
}

echo json_encode($response);