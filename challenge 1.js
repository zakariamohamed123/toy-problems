// Prompts user to input students marks
function StudentGrade(mark){
   //condtional statement to execute the grade
 if (mark >= 79 && mark <= 100) {
    return 'A';
 } if (mark >= 60 && mark <= 78) {
    return 'B';
 } if (mark >= 49 && mark <= 59) {
    return 'C';
 } if (mark >= 40 && mark <= 48) {
    return 'D';
 } if (mark >= 0 && mark <= 39) {
    return 'E';
 } else {
    return 'Sorry thats invalid. Please enter a mark between 0 and 100.';
 }
}

console.log(StudentGrade(34));
