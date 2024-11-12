<?php
$command = 'php -S localhost:8000 -t D:\Project_ku\TUGAS\UTS_WEB';
$output = [];
$return_var = 0;

exec($command, $output, $return_var);
?>