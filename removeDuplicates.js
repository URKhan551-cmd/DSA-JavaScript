// Two Pointers (Optimal)

class Solution {
  uniqueSortedElements(arr) {
    // arr: sorted array of numbers
    
    // Modify arr in-place to keep unique elements at the front
      let i = 0;
      for(let j = 1; j < arr.length; j++){
          if(arr[j] !== arr[i]){
              i++;
              arr[i] = arr[j]
              
          }
      }
    // Return length of the unique prefix
    return arr.length === 0 ? 0 : i + 1;
  }
}


// 2nd way by help of Set() which removes duplicates
// Not accepted if interviewer requires in-place.

function dupArr(arr){
    const unique = [...new Set(arr)];  // Set {1,2,3,4}  give us. thats why i keep that inside an array.[]
    for(let i = 0; i < unique.length; i++){
        arr[i] = unique[i];

    }
    return unique.length;
}


// 3rd way to do the same problem by creating new array of non duplicates

function removeDupli(arr){
    if(arr.length === 0) return;
    const result = [arr[0]];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== arr[i + 1]){
            result.push(arr[i])
        }
    }

    for(let i = 0; i < result.length; i++){
        arr[i] = result[i]
    }
    return result.length;
}

// 4th way to do the same algo by help of TWO POINTERS

function twoPointArr(arr){
    if(arr.length === 0) return 0;
    let i=0;
    let j = 1;

    while (j < arr.length){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
        j++;
    }
    return i + 1;
}

//
// By using FILTER METHOD WE CAN ACHIEVE THE SAME THING.

function filterArr(arr){
    const unique = arr.filter((value, index) => {
        index === 0 || value !== arr[index - 1]
    })

    for(let i = 0; i < unique.length; i++ ){
        arr[i] = unique[i];

    }

    return unique.length;
}