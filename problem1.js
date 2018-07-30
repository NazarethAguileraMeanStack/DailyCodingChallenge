
/*
Good morning! Here's your coding interview problem for today.

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?



*/

function problem1(arr, k){
    let objProblem = {
    };

    for (let i = 0; i < arr.length; i++){
        objProblem[arr[i]] = arr[i];
    }
    for (let j = 0; j < arr.length; j++){
        let testItem = k - arr[j];
        testItem.toString();
        if (objProblem.hasOwnProperty(testItem)){
            return true;
        }
    }

    return false;
}


console.log(problem1([10,15,3,7], 17));
console.log(problem1([2,3,4,5], 7));
console.log(problem1([10,15,3,7], 17));




