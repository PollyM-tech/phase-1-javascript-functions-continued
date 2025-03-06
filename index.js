// code your solution here
function saturdayFun(activity= 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  console.log(saturdayFun()); 
  console.log(saturdayFun("watch football")); 
  
  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
console.log(mondayWork())
console.log(mondayWork("freelance"));
  
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  