// define function calculateWeightedAverage here to calcuate weighted average
function calculateWeightedAverage(assignmentWeight,assignmentScore){
    let assignmentPercentSCore = (assignmentWeight * assignmentScore)/100;
    return assignmentPercentSCore;
}

function calculateOverallPercentage(assignmentPercentageSCore,projectPercentageSCore,quizPercentageSCore,midTerPercentageScore,finalExamPercentageScore){
   let overallPercentage = overallPercentage = assignmentPercentageSCore + projectPercentageSCore + quizPercentageSCore + midTerPercentageScore + finalExamPercentageScore
    return overallPercentage;
}

//calling functions
console.log(`Weighted age  % Value of SCore`);
console.log(`Assignments  :  ${calculateWeightedAverage(10,97)}`);
console.log(`Projects     :  ${calculateWeightedAverage(35,82)}`);
console.log(`Quizzes      :  ${calculateWeightedAverage(10,60)}`);
console.log(`Mid Term     :  ${calculateWeightedAverage(15,75)}`);
console.log(`Final Exam   :  ${calculateWeightedAverage(30,80)}`);
console.log(`The weighted average score is  : ${calculateWeightedAverage(97,82,60,75,80)} %`);


