<?php

// Student Class with private variables of a student name, and a student's list of grades.
class Student {
    private $name;
    private $grades = [];

    // Constructor
    public function __construct($name, $grades) {
        $this->name = $name;
        $this->grades = $grades;
    }

    // Getter for the student's name
    public function getName() {
        return $this->name;
    }

    // Getter for the student's grades
    public function getGrades() {
        return $this->grades;
    }

    // Method to calculate the average grade
    public function getAverageGrade() {
        $sum = array_sum($this->grades);
        return $sum / count($this->grades);
    }
}

// Parent Account class; with private list of students associated with their account, and a private variable tracking remaining sessions for the parent to use.
class ParentAccount {
    private $students = [];
    private $remainingSessions;

    // Constructor - Takes number of sessions the parental account has booked.
    public function __construct($remainingSessions) {
        $this->remainingSessions = $remainingSessions;
    }

    // Method to add a student to the ParentAccount's students list
    public function addStudent(Student $student) {
        $this->students[] = $student;
    }

    // Getter for remaining sessions
    public function getRemainingSessions() {
        return $this->remainingSessions;
    }

    // Method to output Student's and their grades that are attached to the parent.
    public function displayStudentInfo() {
        echo "<h2>Student's Grades:</h2>";
        foreach ($this->students as $student) {
            echo "<p>".$student->getName().": Average Grade: ".$student->getAverageGrade()."</p>";
        }
    }
}

// Two students for display purposes
$student1 = new Student("Thrall Realperson", [92, 95, 98]);
$student2 = new Student("Zappy-Boi Realperson", [76, 80, 85]);

// Creating a parent account and adding students
$parentAccount = new ParentAccount(6); //giving the parental account 6 sessions (3 per student)
$parentAccount->addStudent($student1); //adding previously declared students
$parentAccount->addStudent($student2);

?>

<!DOCTYPE html>
<html>
<head>
    <title>Parental View</title>
    <link href="style.css" rel="stylesheet" type="text/css">
</head>
<body>
    <h1>Parental Dashboard</h1>
    <div>
        <?php 
            // Displaying student information
            $parentAccount->displayStudentInfo(); 

            // Displaying remaining tutoring sessions
            echo "<p>Remaining Tutoring Sessions: ".$parentAccount->getRemainingSessions()."</p>"; 
        ?>
    </div>
</body>
</html>
