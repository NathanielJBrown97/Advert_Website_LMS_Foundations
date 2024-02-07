// ATTENTION LEE TUTOR EMPLOYEE  -- READ THIS //
// Modify thsi section to update the list of dates testing periods in the future.
// Make note that you're editting the appropriate SAT or ACT entry below.
// Simply modify the date in a "Year-MM-DD" format. Dashes are important. Quotation is important.
var testDates = [
    // SAT Entries below:
    {"TestName": "SAT", "Date": "2024-03-09"},
    {"TestName": "SAT", "Date": "2024-05-04"},
    {"TestName": "SAT", "Date": "2024-06-01"},
    // ACT Entries below:
    {"TestName": "ACT", "Date": "2024-04-13"},
    {"TestName": "ACT", "Date": "2024-06-08"},
    {"TestName": "ACT", "Date": "2024-07-13"}
];

// Takes either ACT or SAT; sets current timestamp. Finds the next testdate that == the given type, and has a datetime greater than current time.
function findNextTestDate(testName) {
    var now = new Date();
    return testDates
        .filter(test => test.TestName === testName && new Date(test.Date) > now)
        .sort((a, b) => new Date(a.Date) - new Date(b.Date))[0];
}

// Takes either ACT or SAT; then an elementID to modify (SAT or ACT countdown id)
function initiateCountdown(testName, elementId) {
    var nextTestDate = findNextTestDate(testName);
    // if the next date exists; set countdown date to the targeted time.
    if (nextTestDate) {
        var countDownDate = new Date(nextTestDate.Date).getTime();
        // Update the Countdown Every Second.
        var x = setInterval(function() {
            var now = new Date().getTime();
            // distance from now, until target.
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // Countdown Display Text
            document.getElementById(elementId).innerHTML = "Next " + testName + ": " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
            
            if (distance < 0) {
                clearInterval(x);
                document.getElementById(elementId).innerHTML = testName + " Test Today!";
            }
        }, 1000);
    // Otherwise; display No Upcoming Test ( Update testdates at top)
    } else {
        document.getElementById(elementId).innerHTML = "No upcoming " + testName + " test dates.";
    }
}

// Initiate countdowns for SAT/ACT countdowns
initiateCountdown("SAT", "SATcountdown");
initiateCountdown("ACT", "ACTcountdown");