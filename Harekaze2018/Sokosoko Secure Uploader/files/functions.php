<?php
function swap(&$arr, $i, $j) {
  list($arr[$i], $arr[$j]) = array($arr[$j], $arr[$i]);
}

// cryptographic functions
function ksa($key) {
  $state = [];
  for ($i = 0; $i < 256; $i++) {
    $state[$i] = $i;
  }
  $j = 0;
  for ($i = 0; $i < 256; $i++) {
    $j = ($j + $state[$i] + ord($key[$i % strlen($key)])) % 256;
    swap($state, $i, $j);
  }
  return $state;
}

function prga($state) {
  $i = 0;
  $j = 0;
  while (1) {
    $i = ($i + 1) % 256;
    $j = ($j + $state[$i]) % 256;
    swap($state, $i, $j);
    yield $state[($state[$i] + $state[$j]) % 256];
  }
}

function arcfour($str, $key) {
  $return = '';
  $state = ksa($key);
  $gen = prga($state);
  for ($i = 0; $i < strlen($str); $i++) {
    $return .= chr(ord($str[$i]) ^ $gen->current());
    $gen->next();
  }
  return $return;
}

// utility functions
function is_uuid($str) {
  if (strlen($str) !== 36) {
    return false;
  }
  if ($str[8] !== '-' or $str[13] !== '-' or $str[18] !== '-' or $str[23] !== '-') {
    return false;
  }
  return true;
}

function uuid4() {
  return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
    mt_rand(0, 0xffff),
    mt_rand(0, 0xffff),
    mt_rand(0, 0xffff),
    mt_rand(0, 0xfff) | 0x4000,
    mt_rand(0, 0x3fff) | 0x8000,
    mt_rand(0, 0xffff),
    mt_rand(0, 0xffff),
    mt_rand(0, 0xffff)
  );
}