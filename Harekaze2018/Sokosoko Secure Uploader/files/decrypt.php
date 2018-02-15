<?php
include 'functions.php';

if (!file_exists($_FILES['file']['tmp_name']) || !is_uploaded_file($_FILES['file']['tmp_name'])) {
  die('no file was uploaded');
}

if ($_FILES['file']['size'] > 10000) {
  die('uploaded file is too large');
}

if (!isset($_POST['uuid']) || empty($_POST['uuid'])) {
  die('no UUID was provided');
}

$uuid = $_POST['uuid'];
if (!is_string($uuid) || !is_uuid($uuid)) {
  die('invalid UUID');
}

$data = file_get_contents($_FILES['file']['tmp_name']);

$pdo = new PDO('sqlite:key.db');
$stmt = $pdo->query("SELECT key FROM decryption_key WHERE id = '$uuid'");
$res = $stmt->fetch();

if ($res === false) {
  die('key not found');
}

$filename = basename($_FILES['file']['name'], '.encrypted');
$decrypted = arcfour($data, $res['key']);
header('Content-Disposition: attachment; filename="' . $filename . '";');
header('Content-Length: ' . strlen($decrypted));
header('Content-Type: application/force-download');
echo $decrypted;