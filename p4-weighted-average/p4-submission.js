// define function calculateWeightedAverage here to calcuate weighted average
function calculateWeightedAverage(assignmentWeight,assignmentScore){
    let assignmentPercentSCore = (assignmentWeight/100) * assignmentScore;
    return assignmentPercentSCore;
}

function calculateOverallPercentage(assignmentPercentageSCore,projectPercentageSCore,quizPercentageSCore,midTerPercentageScore,finalExamPercentageScore){
   let overallPercentage = overallPercentage = assignmentPercentageSCore + projectPercentageSCore + quizPercentageSCore + midTerPercentageScore + finalExamPercentageScore
    return overallPercentage;
}

//calling functions
console.log(`The weighted average score is : ${calculateWeightedAverage(10,97)}`);
console.log(`The weighted average score is : ${calculateWeightedAverage(35,82)}`);
console.log(`The weighted average score is : ${calculateWeightedAverage(10,60)}`);
console.log(`The weighted average score is : ${calculateWeightedAverage(15,75)}`);
console.log(`The weighted average score is : ${calculateWeightedAverage(30,80)}`);
console.log(`The weighted average score is : ${calculateWeightedAverage(97,82,60,75,80)}`);


