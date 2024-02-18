// List of of objects with subject, date, time, and description of appointment.
const tutoringSessions = [
    // ACT Prep sessions
    { subject: "ACT", date: "2023-03-10", time: "10:00 AM - 12:00 PM", description: "ACT Math Focus" },
    { subject: "ACT", date: "2023-03-10", time: "01:00 PM - 03:00 PM", description: "ACT Reading Comprehension" },
    { subject: "ACT", date: "2023-03-12", time: "10:00 AM - 12:00 PM", description: "ACT Science Strategies" },
    { subject: "ACT", date: "2023-03-12", time: "02:00 PM - 04:00 PM", description: "ACT English Grammar" },
    { subject: "ACT", date: "2023-03-14", time: "10:00 AM - 12:00 PM", description: "Full ACT Practice Test" },
    // SAT Prep sessions
    { subject: "SAT", date: "2023-03-15", time: "10:00 AM - 12:00 PM", description: "SAT Math Problem Solving" },
    { subject: "SAT", date: "2023-03-16", time: "01:00 PM - 03:00 PM", description: "SAT Critical Reading" },
    { subject: "SAT", date: "2023-03-17", time: "10:00 AM - 12:00 PM", description: "SAT Writing and Language" },
    { subject: "SAT", date: "2023-03-18", time: "02:00 PM - 04:00 PM", description: "SAT Essay Writing" },
    { subject: "SAT", date: "2023-03-19", time: "10:00 AM - 12:00 PM", description: "Full SAT Practice Test" },
    // Math Tutoring sessions
    { subject: "Math", date: "2023-03-20", time: "10:00 AM - 11:00 AM", description: "Algebra I Fundamentals" },
    { subject: "Math", date: "2023-03-21", time: "11:00 AM - 12:00 PM", description: "Geometry Concepts Review" },
    { subject: "Math", date: "2023-03-22", time: "01:00 PM - 02:00 PM", description: "Trigonometry Basics" },
    { subject: "Math", date: "2023-03-23", time: "02:00 PM - 03:00 PM", description: "Pre-Calculus Introduction" },
    { subject: "Math", date: "2023-03-24", time: "03:00 PM - 04:00 PM", description: "Calculus Problem Solving" },
    // AP Tutoring sessions
    { subject: "AP", date: "2023-03-25", time: "10:00 AM - 11:30 AM", description: "AP Biology Exam Strategies" },
    { subject: "AP", date: "2023-03-26", time: "11:30 AM - 01:00 PM", description: "AP US History Critical Analysis" },
    { subject: "AP", date: "2023-03-27", time: "01:30 PM - 03:00 PM", description: "AP English Literature Composition" },
    { subject: "AP", date: "2023-03-28", time: "03:00 PM - 04:30 PM", description: "AP Physics C Mechanics" },
    { subject: "AP", date: "2023-03-29", time: "10:00 AM - 11:30 AM", description: "AP Calculus AB & BC Review" },
    // Other Specialized
    { subject: "Other", date: "2023-03-30", time: "10:00 AM - 11:00 AM", description: "Study Skills & Organization" },
    { subject: "Other", date: "2023-04-01", time: "11:00 AM - 12:00 PM", description: "Critical Thinking & Logic" },
    { subject: "Other", date: "2023-04-03", time: "01:00 PM - 02:00 PM", description: "Creative Writing Workshop" },
    { subject: "Other", date: "2023-04-05", time: "02:00 PM - 03:00 PM", description: "Advanced STEM Problem Solving" },
    { subject: "Other", date: "2023-04-07", time: "03:00 PM - 04:00 PM", description: "College Application Essays" },
];


// Set dropdown menu by getting element ID
const subjectDropdown = document.getElementById("subjectDropdown");
// Set container for session displays by the sessionList element id
const sessionsList = document.getElementById("sessionsList");
subjectDropdown.addEventListener("change", function() {
    // Clear previous content
    sessionsList.innerHTML = "";
    // Filter sessions based on the selected subject
    const selectedSubject = this.value;
    const filteredSessions = tutoringSessions.filter(session => session.subject === selectedSubject);

    // Loop through filtered sessions and display them
    filteredSessions.forEach(session => {
        const listItem = document.createElement("li");
        const text = document.createTextNode(`${session.date} - ${session.description}`);
        listItem.appendChild(text);
        sessionsList.appendChild(listItem);
    });
});


// Function to create a dropdown for tutor selection
function createTutorDropdown() {
    const select = document.createElement('select');
    select.innerHTML = `<option value="">Select Tutor</option>
                        <option value="Tutor 1">Tutor 1</option>
                        <option value="Tutor 2">Tutor 2</option>
                        <option value="Tutor 3">Tutor 3</option>`; // Add more tutors as needed
    return select;
}


// Function to create a booking link
function createBookingLink() {
    const link = document.createElement('a');
    link.href = "#"; // LINK TO BOOKING PAGE WILL GO HERE
    link.className = "book-session-btn";
    link.innerText = "Book Now";
    return link;
}


// Listens for change on dropdown menu
subjectDropdown.addEventListener("change", function() {
    sessionsList.innerHTML = ""; // Clear previous content
    const selectedSubject = this.value; // Get the value of selected subject
    //Filter the tutoring session list for all sessions that match the given subject
    const filteredSessions = tutoringSessions.filter(session => session.subject === selectedSubject); 

    // loop over the filtered sessions
    filteredSessions.forEach(session => {
        // create new div for each session
        const row = document.createElement("div");
        // assign a class name
        row.className = "session-row";
        // Set inner HTML to be the date,tiem,and description in separate divs
        row.innerHTML = `
            <div class="session-cell">${session.date}</div>
            <div class="session-cell">${session.time}</div>
            <div class="session-cell">${session.description}</div>
        `;
        // Adds column with tutor dropdown menu
        const tutorDropdownCell = document.createElement("div");
        tutorDropdownCell.className = "session-cell";
        tutorDropdownCell.appendChild(createTutorDropdown());
        row.appendChild(tutorDropdownCell);
        // Make booking link -- This will be updated in the future
        const bookingLinkCell = document.createElement("div");
        bookingLinkCell.className = "session-cell";
        bookingLinkCell.appendChild(createBookingLink());
        row.appendChild(bookingLinkCell);

        // add newly built row to the sessionList container
        sessionsList.appendChild(row);
    });
});
