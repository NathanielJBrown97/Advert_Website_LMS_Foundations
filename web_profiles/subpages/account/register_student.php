<?php
session_start();

// Set initial cookie and session values if they don't exist
if (!isset($_COOKIE['userPreferences'])) {
    setcookie('userPreferences', '', time() + (86400 * 30), "/"); // 30-day cookie
}

if (!isset($_SESSION['registration'])) {
    $_SESSION['registration'] = '';
}

// Process the form when submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $studentName = htmlspecialchars($_POST['studentName']);
    $subjects = $_POST['subjects'] ?? [];

    // Store user preferences in a cookie
    setcookie('userPreferences', serialize($subjects), time() + (86400 * 30), "/"); // searlized array for cookie storage; found online.

    // Store registration data in a session
    $_SESSION['registration'] = "Registration completed for $studentName with subjects: " . implode(", ", $subjects);

    // Redirect to refresh the page and show the cookie/session data
    header('Location: ' . $_SERVER['PHP_SELF']);
    exit;
}

// Retrieve subjects from cookie if available
$storedSubjects = isset($_COOKIE['userPreferences']) ? unserialize($_COOKIE['userPreferences']) : [];

// Message to display stored session data
$registrationStatus = $_SESSION['registration'] ?? '';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parent Portal Home</title>
    <link href="../../css/register_student.css" type="text/css" rel="stylesheet">
    <link href="../../css/index.css" type="text/css" rel="stylesheet">
    <link href="../../css/parentHome.css" type="text/css" rel="stylesheet">
    
    
    <!-- Jquery and Related JS, Load at start for latency -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>window.jQuery || document.write('<script src="../../js/jquery-3.6.0.min.js"><\/script>')</script>
    <script src="../../js/countdown.js"></script>
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

    <h1>Student Registration</h1>
    <?php if ($registrationStatus) echo "<p>$registrationStatus</p>"; ?>

    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
        <label for="studentName">Student Name:</label>
        <input type="text" id="studentName" name="studentName" required><br>

        <label for="subjects">Select Subjects (multiple):</label>
        <select id="subjects" name="subjects[]" multiple required size="4">
            <option value="ACT">ACT Prep</option>
            <option value="SAT">SAT Prep</option>
            <option value="AP">AP Tutoring</option>
            <option value="Math">Math Tutoring</option>
        </select>
        <br>

        <button type="submit">Register</button>
    </form>

    <!-- Optionally show retrieved cookie data -->
    <div>
        <h2>Stored Preferences (For Grading Output):</h2>
        <?php if (!empty($storedSubjects)) echo implode(", ", $storedSubjects); ?>
    </div>
    <!-- JavaScript -->
    <script src="../../js/countdown.js"></script>
</body>
</html>
