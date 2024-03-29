"use strict";
// Find the Average Grade: Given a list of grades, calculate the average grade.
// Alist of grades
let gradeList = [88, 94, 72, 99, 53, 77, 65, 34];
// calculate the average grade
let averageGrade = gradeList.reduce((total, grade) => total + grade, 0) / gradeList.length;
// Show the average grade
console.log(averageGrade);
