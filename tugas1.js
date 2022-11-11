//membuat penjumlahan array

function arraySum (array){
    const arrayResult = [];
    let sum = 0

    for(let i = 0; i < array.length; i++){
       sum += array[i];
    }

    for(let n = 0; n < array.length; n++){
        let currentSum = sum - array[n];
        arrayResult.push(currentSum);
        console.log(arrayResult);

    }

    let min = arrayResult[0],max = arrayResult[0]
    for(let a = 0; a < arrayResult.length; a++){
        if (arrayResult[a] < min){
            min = arrayResult[a];
        }
        if (arrayResult[a] > max){
            max = arrayResult[a];
        }

        
    }
    return [min,max];
     

}

array1 = [1,2,3,4,5]
console.log(arraySum(array1));



