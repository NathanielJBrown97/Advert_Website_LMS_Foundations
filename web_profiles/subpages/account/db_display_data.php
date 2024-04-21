<?php
include 'db_connect.php'; 

// Fetch Math Handouts datatable
$mathSql = "SELECT * FROM Math Handouts"; 
$mathStmt = $pdo->prepare($mathSql);
$mathStmt->execute();
$mathData = $mathStmt->fetchAll();

// Fetch Reading Quiz Datatable
$readSql = "SELECT * FROM Reading Quiz"; 
$readStmt = $pdo->prepare($readSql);
$readStmt->execute();
$readData = $readStmt->fetchAll();

if (!$mathData && !$readData) {
    echo "No data found.";
} else {
    // Output HTML for this page.
    echo "<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Admin Dashboard</title>
    <link href="../../css/index.css" type="text/css" rel="stylesheet">
    
</head>
<body>
    
    <!-- NAVIGATION -->
    <div class="top-bar">
        <a href="../../index.html" class="logo"><img src="../../images/LeeTutoringLogoTransparentSmall.webp" alt="Tutoring Company Logo"></a>
        <div class="countdown" id="SATcountdown">SAT</div>
        <div class="countdown" id="ACTcountdown">ACT</div>
        <div class="navigation">
            <a href="../about.html">About Us</a>
            <div class="dropdown">
                <span>Services</span>
                <div class="dropdown-content">
                    <a href="../services/act.html">ACT Prep</a>
                    <a href="../services/sat.html">SAT Prep</a>
                    <a href="../services/math.html">Math Tutoring</a>
                    <a href="../services/ap.html">AP Tutoring</a>
                </div>
            </div>
            <a href="../contact.html">Contact</a>
            <a href="../../index.html" class="login-button">Sign Out</a>
        </div>
    </div>
    
    
    <h1>Admin Dashboard</h1>
    <div class='content'>";

    // Display Math Handouts Data
    foreach ($mathData as $grade) {
        echo "<div class='admin-section'>";
        echo "<h2>" . htmlspecialchars($grade['section_title']) . "</h2>";
        echo "<p>" . htmlspecialchars($grade['description']) . "</p>";
        echo "</div>";
    }

    // Display Reading Quiz Data
    if ($readData) {
        echo "<h2>Reading Quizzes</h2>";
        foreach ($readData as $grade) {
            echo "<div class='quiz-section'>";
            echo "<h3>" . htmlspecialchars($grade['quiz_title']) . "</h3>";
            echo "<p>" . htmlspecialchars($grade['description']) . "</p>";
            echo "</div>";
        }
    }

    echo "</div> <!-- Close content div -->
</body>
</html>";
}

?>
