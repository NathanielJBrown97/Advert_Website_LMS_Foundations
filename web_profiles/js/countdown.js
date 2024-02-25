// ATTENTION LEE TUTOR EMPLOYEE  -- READ THIS //
// Modify thsi section to update the list of dates testing periods in the future.
// Make note that you're editting the appropriate SAT or ACT entry below.
// Simply modify the date in a "Year-MM-DD" format. Dashes are important. Quotation is important.
$(document).ready(function() {
    var testDates = [
        {"TestName": "SAT", "Date": "2024-03-09"},
        {"TestName": "SAT", "Date": "2024-05-04"},
        {"TestName": "SAT", "Date": "2024-06-01"},
        {"TestName": "ACT", "Date": "2024-04-13"},
        {"TestName": "ACT", "Date": "2024-06-08"},
        {"TestName": "ACT", "Date": "2024-07-13"}
    ];

    // Function to find the next test date; sets current time using Date.
    // Returns filtered testDates that are equal to the given test name i.e. act or sat, and as long as the dat is further in the future than the current point in time.
    function findNextTestDate(testName) {
        var now = new Date();
        return testDates
            .filter(test => test.TestName === testName && new Date(test.Date) > now)
            .sort((a, b) => new Date(a.Date) - new Date(b.Date))[0];
    }

    // Initiate a countdown given a test type and an element ID to modify
    function initiateCountdown(testName, elementId) {
        // Pulls next Test Date Using Helper Above
        var nextTestDate = findNextTestDate(testName);
        // If there is a next test date; 
        if (nextTestDate) {
            // set the countdown timer to the tiem of hte next test.
            var countDownDate = new Date(nextTestDate.Date).getTime();
            // Set current time and run basic math to collect the total time from now until then, then reduce to dayas, hours, ect.
            var countdownFunction = function() {
                var now = new Date().getTime();
                var distance = countDownDate - now;
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                // replace content of given element with countdown timer
                $("#" + elementId).html("Next " + testName + ": " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
                // If today is hte day; display message!
                if (distance < 0) {
                    clearInterval(x);
                    $("#" + elementId).html(testName + " Test Today!");
                }
            };
            countdownFunction(); // Run once immediately to avoid initial delay
            var x = setInterval(countdownFunction, 1000);
            // Otherwise list needs updating; print No upcoming tests.
        } else {
            $("#" + elementId).html("No upcoming " + testName + " test dates.");
        }
    }

    initiateCountdown("SAT", "SATcountdown");
    initiateCountdown("ACT", "ACTcountdown");
});
