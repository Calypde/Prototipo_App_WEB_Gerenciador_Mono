<?php
// Permite requisições de qualquer origem (*)
header("Access-Control-Allow-Origin: *");

// Permite métodos específicos (POST, GET, OPTIONS, etc.)
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

// Permite cabeçalhos personalizados (Content-Type, Authorization, etc.)
header("Access-Control-Allow-Headers: Content-Type");

header('Content-Type: application/json');
require_once 'conexao.php';

// Verifica se há dados no corpo da requisição
$json = file_get_contents('php://input');
if (empty($json)) {
    echo json_encode([
        'success' => false,
        'error' => 'Nenhum dado recebido'
    ]);
    exit;
}

// Tenta decodificar o JSON
$dados = json_decode($json, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode([
        'success' => false,
        'error' => 'JSON inválido: ' . json_last_error_msg()
    ]);
    exit;
}

// Verifica se os campos necessários existem
if (!isset($dados['nome']) || !isset($dados['descricao']) || !isset($dados['visibilidade'])) {
    echo json_encode([
        'success' => false,
        'error' => 'Campos nome, descrição e visibilidade são obrigatórios'
    ]);
    exit;
}

try {
    $stmt = $pdo->prepare("INSERT INTO proposta (nome, descricao, visibilidade) VALUES (?, ?, ?)");
    $stmt->execute([$dados['nome'], $dados['descricao'], $dados['visibilidade']]);
    
    echo json_encode(['success' => true]);
} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'error' => 'Erro no banco de dados: ' . $e->getMessage()
    ]);
}
?>