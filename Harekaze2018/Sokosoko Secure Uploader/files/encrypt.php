<?php
include 'functions.php';

die('this function is disabled');

if (!file_exists($_FILES['file']['tmp_name']) || !is_uploaded_file($_FILES['file']['tmp_name'])) {
  die('no file was uploaded');
}

if ($_FILES['file']['size'] > 10000) {
  die('uploaded file is too large');
}

$data = file_get_contents($_FILES['file']['tmp_name']);
$uuid = uuid4();
$key = bin2hex(random_bytes(16));

$pdo = new PDO('sqlite:key.db');
$pdo->query("INSERT INTO decryption_key VALUES ('$uuid', '$key')");

$filename = basename($_FILES['file']['name']) . '.encrypted';
$encrypted = base64_encode(arcfour($data, $key));

echo "UUID: $uuid<br>";
echo "<a href='data:application/octet-stream;base64,$encrypted' download='$filename'>download encrypted file</a>";