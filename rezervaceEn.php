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
    "message" => 'Your accommodation request for the name ' . $_POST['name'] . ' has been created. We will contact you soon. A beautiful rest of the day, Pension Gerta'
  ];
} else {
  $response = [
    "status" => "error",
    "message" => "Unfortunately, an error occurred while submitting the form. Please fill in again. Thank you.",
  ];
}

echo json_encode($response);