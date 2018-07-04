<?php
ob_start();
define('APP', 1);

$page = preg_replace('$^\/index\.php\/?$', '', $_SERVER['PHP_SELF']);

if (empty($page) || $page == 'index') {
    header('Location: /index.php/home');
}

?>
<html>
<head>
<style>
body { background-color: #AA0000; color: white; font-size: 300%;}
</style>
</head>
<body>

<nav>
    <a href="/index.php/home">집</a>
    |
    <a href="/index.php/instructions">명령</a>
</nav>

<hr />

<?php

include($page . '.php');

?>

</body>
</html>