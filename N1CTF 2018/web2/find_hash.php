<?php
$str = trim(readline());

$chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_ []{}<>~`+=,.;:/?|';
$n = strlen($chars);

for($i=0; $i < $n; $i++)
	for($j=0; $j < $n; $j++)
		for($k=0; $k < $n; $k++){
			if(substr(md5($chars[$i].$chars[$j].$chars[$k]), 0, 5) == $str){
				echo $chars[$i].$chars[$j].$chars[$k].PHP_EOL;
				die();
			}
		}


// for($i=0; $i < 255; $i++)
// 	for($j=$i; $j < 256; $j++)
// 		for($k=$j; $k < 256; $k++){
// 			if(substr(md5(chr($i).chr($j).chr($k)), 0, 5) == $str){
// 				echo chr($i).chr($j).chr($k).PHP_EOL;
// 				die();
// 			}
// 		}


