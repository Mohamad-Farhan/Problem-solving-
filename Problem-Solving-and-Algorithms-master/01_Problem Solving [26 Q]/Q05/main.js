console.log('Problem Solving Q: 5 ');

/* Find Intersection */

/*  
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
*/

function findIntersection(strArr) {
 let firstString = strArr[0]
  let secondString = strArr[1]

  let firstElementArray = []
  let secondElementArray = []
  firstString.split(',').map((oneNumber) => {
    firstElementArray.push(Number(oneNumber))
  })
  secondString.split(',').map((oneNumber) => {
    secondElementArray.push(Number(oneNumber))
  })
  let myAnswer = (secondElementArray.filter(e =>      
   firstElementArray.includes(e))).toString()
return myAnswer
  
}

/* 
Examples:
findIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']); // => '1,4,13'
findIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']); // => '1,9,10'
*/

