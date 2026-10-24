<?php
declare(strict_types=1);
session_start();

function finish(string $status) {
    header('Location: index.php?' . $status . '=1#contacto', true, 303);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Método no permitido.');
}

$name = trim((string)($_POST['name'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));
$apiUrl = trim((string)(getenv('NODE_API_URL') ?: ''));

if (mb_strlen($name) < 2 || mb_strlen($name) > 100 || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 254 || mb_strlen($message) < 10 || mb_strlen($message) > 5000 || !filter_var($apiUrl, FILTER_VALIDATE_URL)) {
    finish('error');
}

$payload = json_encode(['name' => $name, 'email' => $email, 'message' => $message], JSON_UNESCAPED_UNICODE);
$ch = curl_init($apiUrl);
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'Accept: application/json'],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 5,
    CURLOPT_TIMEOUT => 12,
]);
$response = curl_exec($ch);
$statusCode = (int)curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
curl_close($ch);

if ($response !== false && $statusCode >= 200 && $statusCode < 300) finish('enviado');
finish('error');
