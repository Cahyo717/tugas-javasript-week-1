//membuat penjumlahan array

function arraySum (array){
    const arrayResult = []; //array kosong untuk menampung hasil penjumlahan
    let sum = 0

    //menjumlahkan keseluruhan array
    for(let i = 0; i < array.length; i++){
       sum += array[i];
    }

    //mengurangi jumlah tersebu dengan nilai array dari index ke i, kemudian menambahkan hasilnya ke arrayResult = []
    for(let n = 0; n < array.length; n++){
        let currentSum = sum - array[n];
        arrayResult.push(currentSum);
        console.log(arrayResult);

    }

    //mencari nilai maksimal dan minimal dari arraySum
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



