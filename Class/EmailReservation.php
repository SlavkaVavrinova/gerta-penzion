<?php

class EmailReservation
{

  private string  $emailTo;

  public function __construct(string $emailTo)
  {
    $this->emailTo = $emailTo;
  }

  public function sendFormToEmail(): bool
  {
    $subject = 'Nová rezervace!';

    $message = '<html>
                <head>
                  <title>Rezervace</title>
                </head>
                <body>
                  <p>Nová rezervace!</p>
                  <table>';
    foreach ($_POST as $key => $value) {
      $message .= '<tr><th>' . htmlentities($key) . '</th><td>' . htmlentities($value) . '</td></tr>';
    }
    $message .= '</table>
                </body>
                </html>';

    $headers = [
      'X-Mailer' => 'PHP/' . phpversion(),
      'MIME-Version' => '1.0',
      'Content-type' => 'text/html; charset=iso-8859-1',
      'From' => 'Rezervace <pension.gerta@seznam.cz>',
      'Reply-To' => $_POST['email'],
    ];

    try {
      mail($this->emailTo, $subject, $message, $headers);

      return true;
    } catch (Exception $e) {
      file_put_contents(__DIR__ . '/log_' . date("j.n.Y") . '.log', $e->getMessage() . 'Data: ' . implode(', ', $_POST), FILE_APPEND);
    }

    return false;
  }
}