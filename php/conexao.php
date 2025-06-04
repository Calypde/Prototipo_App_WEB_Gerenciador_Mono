<?php
$host = "localhost";
$dbname = "gerenciadorMonografia";
$username = "postgres";
$password = "root123";

try {
    $pdo = new PDO(dsn: "pgsql:host=$host;dbname=$dbname", username: $username, password: $password);
    $pdo->setAttribute(attribute: PDO::ATTR_ERRMODE, value: PDO::ERRMODE_EXCEPTION);
    //echo "Conexão bem-sucedida!";
} catch (PDOException $e) {
    die("Erro na conexão: " . $e->getMessage());
}

?>