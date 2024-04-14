<?php
include '../feedback_form/validate_functions.php';

// Initialize variables for form data and error messages
$name = $email = $satisfaction = "";
$nameErr = $emailErr = $satisfactionErr = "";
$formErr = "";

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $satisfaction = $_POST['satisfaction'] ?? '';

    // Perform validations and assign error messages if any
    $nameErr = validateText($name, 2, 100) ? '' : 'Name must be between 2 and 100 characters.';
    $emailErr = filter_var($email, FILTER_VALIDATE_EMAIL) ? '' : 'Invalid email format.';
    $satisfactionErr = in_array($satisfaction, ['very_satisfied', 'satisfied', 'neutral', 'dissatisfied', 'very_dissatisfied']) ? '' : 'Please select a valid option.';

    // Check if there are any errors
    if (!$nameErr && !$emailErr && !$satisfactionErr) {
        $formErr = "Thank you for your feedback.";
    } else {
        $formErr = "Please correct the errors and submit again.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parent Portal Home</title>
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

    <h1>We value your feedback!</h1>
    
    <!-- Display form error message; if applicable -->
    <?php if ($formErr) echo "<p>$formErr</p>"; ?>

    <!-- Feedback Form -->
    <form action="parentHome.php" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value="<?php echo htmlspecialchars($name); ?>">
        <span class="error"><?php echo $nameErr;?></span>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value="<?php echo htmlspecialchars($email); ?>">
        <span class="error"><?php echo $emailErr;?></span>

        <label for="satisfaction">Satisfaction Level:</label>
        <select id="satisfaction" name="satisfaction">
            <option value="">Please choose</option>
            <option value="very_satisfied" <?php if ($satisfaction == "very_satisfied") echo "selected"; ?>>Very Satisfied</option>
            <option value="satisfied" <?php if ($satisfaction == "satisfied") echo "selected"; ?>>Satisfied</option>
            <option value="neutral" <?php if ($satisfaction == "neutral") echo "selected"; ?>>Neutral</option>
            <option value="dissatisfied" <?php if ($satisfaction == "dissatisfied") echo "selected"; ?>>Dissatisfied</option>
            <option value="very_dissatisfied" <?php if ($satisfaction == "very_dissatisfied") echo "selected"; ?>>Very Dissatisfied</option>
        </select>
        <span class="error"><?php echo $satisfactionErr;?></span>

        <button type="submit" name="submit">Submit Feedback</button>
    </form>
</body>
</html>
