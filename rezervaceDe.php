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
    "message" => 'Ihre Unterkunftsanfrage auf den Namen ' . $_POST['name'] . ' wurde erstellt. Wir werden Sie bald kontaktieren. Mit freundlichen Grüßen Pension Gerta.'
  ];
} else {
  $response = [
    "status" => "error",
    "message" => "Leiden ein Fehler war baim Absenden des Formulars aufgetreten. Bitte füllen Sie das noch einmall. Danke schön",
  ];
}

echo json_encode($response);