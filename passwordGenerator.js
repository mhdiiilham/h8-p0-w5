function changeVocals (str) {
  //code di sini
  var out = ''
  for(var i = 0; i < str.length; i++){
      switch (str[i]){
          case 'a': out += 'b';
          break;
          case 'i': out += 'j';
          break;
          case 'u': out += 'v';
          break;
          case 'e': out += 'f';
          break;
          case 'o': out += 'p';
          break;
          case 'A': out += 'B';
          break;
          case 'I': out += 'J';
          break;
          case 'U': out += 'V';
          break;
          case 'E': out += 'F';
          break;
          case 'O': out += 'P';
          break;
          default: out += str[i]
      }
  }
  return out
}

function reverseWord (str) {
  //code di sini
  var strBaru = changeVocals(str)
  var strOut = ''
  for(var i = strBaru.length - 1; i >= 0; i--){
    strOut += strBaru[i]
  }
  return strOut
}

function setLowerUpperCase (str) {
  //code di sini
  var check = reverseWord(str)
  var checkOut = ''
  for(var i = 0; i < check.length; i++){
    if(check[i] === check[i].toLowerCase()){
        checkOut += check[i] = check[i].toUpperCase()
    }
    else if(check[i] === check[i].toUpperCase()){
        checkOut += check[i] = check[i].toLowerCase() 
    }
  }
  return checkOut
}

function removeSpaces (str) {
  //code di sini
  var spasi = setLowerUpperCase(str)
    var spasOut = ''
    for(var i = 0; i < spasi.length; i++){
        if(spasi[i] !== ' '){
        spasOut += spasi[i]
        }
    }
    return spasOut
}

function passwordGenerator (name) {
  //code di sini
  if(name.length < 5){
      return 'Minimal karakter yang diinput adalah 5 karakter'
  }else return removeSpaces(name)
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'