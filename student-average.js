// Array of student objects with name, age, and an array of scores
let students = [
  { name: 'Alice', age: 22, scores: [78, 85, 92] },
  { name: 'Bob', age: 20, scores: [88, 90, 76] },
  { name: 'Charlie', age: 21, scores: [95, 80, 85] }
];

// Function to find the student with the highest average score
function averageScores(students) {
  let topStudent = null;       // Will store the student with the highest average
  let highestAverage = 0;      // Keeps track of the highest average score found so far

  // Iterate over each student in the array
  students.forEach(student => {
    // Step 1: Calculate total of all scores for the current student
    let sum = student.scores.reduce((total, score) => total + score, 0);

    // Step 2: Calculate the average score
    let average = sum / student.scores.length;

    // Step 3: Compare with the highest average found so far
    if (average > highestAverage) {
      highestAverage = average;   // Update the highest average
      topStudent = student;       // Update the top student
    }
  });

  // Step 4: Output the top student's name and average score (rounded to 2 decimal places)
  console.log(`Top Student: ${topStudent.name} with an average score of ${highestAverage.toFixed(2)}`);
}

// Call the function with the students array
averageScores(students);
