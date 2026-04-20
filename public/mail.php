<?php
error_reporting(0);
ini_set('display_errors', '0');
ob_start();

header('Content-Type: application/json');

function respond($status, $payload) {
    http_response_code($status);
    ob_clean();
    echo json_encode($payload);
    exit;
}

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['error' => 'Method not allowed']);
}

$data = json_decode(file_get_contents('php://input'), true);
if (!$data) {
    respond(400, ['error' => 'Invalid request']);
}

// Honeypot — bots fill this, humans don't see it
if (!empty($data['botField'])) {
    respond(200, ['success' => true]);
}

// Validate required fields
$required = ['firstName', 'lastName', 'phone', 'email'];
foreach ($required as $field) {
    if (empty(trim($data[$field] ?? ''))) {
        respond(400, ['error' => "Missing required field: $field"]);
    }
}

// Sanitize
function clean($val) {
    return htmlspecialchars(strip_tags(trim($val ?? '')));
}

$firstName     = clean($data['firstName']);
$lastName      = clean($data['lastName']);
$childFirst    = clean($data['childFirstName']);
$childLast     = clean($data['childLastName']);
$howHeard      = clean($data['howHeard']);
$fscd          = clean($data['fscd']);
$program       = clean($data['program']);
$phone         = clean($data['phone']);
$email         = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$contactMethod = clean($data['contactMethod']);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, ['error' => 'Invalid email address']);
}

// ── UPDATE THIS when the destination address is decided ──
$to      = 'YOUR_EMAIL@example.com';
$subject = "New Inquiry — $firstName $lastName";

$body  = "New inquiry from the New Family Solutions contact form.\n\n";
$body .= "=== Contact ===\n";
$body .= "Name:               $firstName $lastName\n";
$body .= "Phone:              $phone\n";
$body .= "Email:              $email\n";
$body .= "Preferred contact:  " . ($contactMethod ?: '(not specified)') . "\n";

if ($childFirst || $childLast) {
    $body .= "\n=== Child ===\n";
    $body .= "Name: $childFirst $childLast\n";
}

if ($fscd) {
    $body .= "\n=== FSCD Agreement ===\n";
    $body .= ucfirst($fscd) . "\n";
}

if ($program) {
    $body .= "\n=== Program Interest ===\n";
    $body .= $program . "\n";
}

if ($howHeard) {
    $body .= "\n=== How They Heard About Us ===\n";
    $body .= $howHeard . "\n";
}

$headers  = "From: noreply@newfamilysolutions.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $body, $headers);

respond($sent ? 200 : 500, $sent
    ? ['success' => true]
    : ['error' => 'Failed to send. Please try again.']
);
