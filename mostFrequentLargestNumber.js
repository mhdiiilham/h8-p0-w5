function sorting(arrNumber) {
    // code di sini
    for(var i = 0; i < arrNumber.length; i++){
        for(var j = 0; j < arrNumber.length; j++){
            if(arrNumber[j] < arrNumber[j+1]){
                let temp = arrNumber[j]
                arrNumber[j] = arrNumber[j+1]
                arrNumber[j+1] = temp
            }
        }
    }
    return arrNumber
  }

  function getTotal(arrNumber) {
    // code di sini
    var total = []
    for(var i = 0; i < arrNumber.length; i++){
        var hitung = 0;
        for(var j = 0; j < arrNumber.length; j++){
            if(arrNumber[j] === arrNumber[i]){
                hitung += 1
            }
        }
        total.push(hitung)
    }
    if(!arrNumber[0] && !total[0]){
        return 'input invalid'
    }
    return 'angka paling besar adalah ' + arrNumber[0] + ' dan jumlah kemunculan sebanyak ' + total[0] + ' kali'
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''