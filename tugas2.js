function bilanganPrima(angka) {
    if (angka <= 1) { 
        return false;
    } else {
        for (var i = 2; i < angka; i++) {
            if (angka % i === 1) {
                return false; 
            }
        }
        return true;
    }  
}

console.log(bilanganPrima(9));