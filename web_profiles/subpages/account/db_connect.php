<?php
// connection settings
$type = 'mysql';
$server = '192.185.2.183';
$DB = 'nathanie_a12';
$port = 3306;
$charset = 'utf8mb4';

// Database credentials
$username = 'nathanie_admin';
$password = 'AdminLogin1!';

// DSN
$dsn = "$type:host=$server;dbname=$DB;port=$port;charset=$charset";

// PDO options
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, // Error mode to exceptions
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, // Fetch mode to associative array
    PDO::ATTR_EMULATE_PREPARES => false, // Use native prepared statements
    PDO::ATTR_STRINGIFY_FETCHES => false // Fetch integers as integers
];

// Attempt to create a new PDO
try {
    $pdo = new PDO($dsn, $username, $password, $options);
    // Success Message
    echo "Connected successfully to the database.";
} catch (PDOException $e) {
    // Exception Message
    throw new PDOException("Database connection failed: " . $e->getMessage(), (int)$e->getCode());
}
?>
