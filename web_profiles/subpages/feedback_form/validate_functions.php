<?php

// Check if string length of text is within min/max (inclusive).
function validateText($text, $min, $max) {
    return strlen($text) >= $min && strlen($text) <= $max;
}

// Check if number is within given range (inclusive).
function validateNumber($number, $min, $max) {
    return filter_var($number, FILTER_VALIDATE_INT, ["options" => ["min_range" => $min, "max_range" => $max]]);
}

// Check if the option is within the array of valid options.
function validateOption($option, $validOptions) {
    return in_array($option, $validOptions);
}

// Protection against XSS attacks.
function escapeHtml($html) {
    return htmlspecialchars($html, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}
