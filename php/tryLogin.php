<?php
// Permite requisições de qualquer origem (*)
//header("Access-Control-Allow-Origin: *");

// Permite métodos específicos (POST, GET, OPTIONS, etc.)
//header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

// Permite cabeçalhos personalizados (Content-Type, Authorization, etc.)
//header("Access-Control-Allow-Headers: Content-Type");

//header('Content-Type: application/json');
require_once 'conexao.php';

print_r($_REQUEST)
?>