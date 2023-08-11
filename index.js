function hasTargetSum(array, target) {
  let numArray = array;
  let num1, num2, num3 = 0, num4 = 1, num5 = numArray.length, num6 = 0;
  
  if (num5 < 2) {
    return false;
  }
  
  num1 = numArray[num6++];
  num2 = numArray[num4++];

  while (num6 < num5 - 1) {
    if (target === num1 + num2) {
      return true;
    } else {
      if (num4 < num5) {
        num2 = numArray[num4++];
      } else {
        num3 = 0;
        num4 = num6 + 1;
        num1 = numArray[num6++];
        num2 = numArray[num4++];
      }
    }
    num3++;
  }
  return false;
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  function
  new var equals array
  for every item in the array
  if the array num x + array num y doesnt = num2
  return false
  else
  return true
*/

/*
defines 4 variables equal to 0, 1 variable equal to 1, and 1 variable equal to the length of the array. All of these are Let
Returns false if the array is smaller then 2 (so it doesnt break)
num1 is set to the first element in the array, and num2 is set to the second. These will be our starting points in the array
While num6 is less then the length of the array, we run an if function followed by an incrementation of num3 by 1, we'll get to the if funciton in a moment
if the while loop completes, then the funciton returns false
going back to the if function, we have a whole bunch of stuff going on. So the first part of the if function checks to see if the first 2 provided numbers of the array add up to the target number.
If they do, then it returns true, no problem. If they dont, then we get to the else, which inside of that has a nested if else statement
This nested if checks to see if we have reached the end of the array by comparing if num4 is less then the length of the array, num5
If it is, num2 is set to the next number in the array and we start the process again. If it isnt, num3 is set to 0, num4 is set to num6 plus 1, and then num1 and num2 get incremented up one and then the cycle checks again

Side Note - Looking back at my code, I realize that num3 is literally useless, it doesnt even do anything. I dont want to mes anthing up, so its going to stay in there, but im pretty sure it doesnt need to be here.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
