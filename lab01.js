// 101512083 Mansi .

// Capitalize the first letter of each word
const capitalLetter = str => {
  let capStr = "";

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      capStr += str[i].toUpperCase();
    } else if (str[i] === " " && i + 1 < str.length) {
      capStr += " ";
      capStr += str[i + 1].toUpperCase();
      i++;
    } else {
      capStr += str[i];
    }
  }

  return capStr;
};
//console.log(capitalLetter("my name is mansi")); 



// Largest of three given integers
const largestNum = (num1, num2, num3) => {
  let largest = num1;

  if (largest < num2) {
    largest = num2;
  }
  if (largest < num3) {
    largest = num3;
  }

  return largest;
};
//console.log(largestNum(10, 34, 28)); 



//move last three character to the start
const moveChar = str =>{
    if(str.length<=3){
       console.log("please enter a number that's greater than 3");
       return;
    }
    let newStr="";
    for(let i=str.length-3; i<str.length; i++ ){
        newStr+=str[i];
    }
    for(let i=0; i<str.length-3; i++ ){
        newStr+=str[i];
    }
    return newStr;
}

//console.log(moveChar(mansi123))



// Find the type of a given angle
const findTheAngle = deg => {
  if (deg > 0 && deg < 90) {
    return deg + "° is an Acute angle.";
  }
  if (deg === 90) {
    return deg + "° is a Right angle.";
  }
  if (deg > 90 && deg < 180) {
    return deg + "° is an Obtuse angle.";
  }
  if (deg === 180) {
    return deg + "° is a Straight angle.";
  }

  return deg + "° is not a supported angle type (only 0–180°).";
};
// console.log(findTheAngle(92))



//maximum possible sum of some of its k consecutive numbers
const sumofK=(arr,k)=>{
    let k= k;
    for(let i=0; i>=k; i++){

    }
}