<?php

header('Content-Type: text/html; charset=utf-8');

$json = json_decode(
    file_get_contents('./data/jurusan.json'),
    true
);

$key = $_GET['page'] ?? '';

if(isset($json[$key]))
{
    echo file_get_contents($json[$key]);
}
else
{
    echo "<h3>Data tidak ditemukan</h3>";
}
