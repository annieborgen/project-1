// jshint esversion: 6 
//req. 3b
let arrAvg = (arr) => {
  let sum = 0;

  for (var i = 0; i <arr.length; i++){

  }
  return sum/arr.length;
};

//Req. 3c
let arrMax=(arr) => {
  var max =arr[0];
  arr.forEach(x => {
    if (x>max) {
      max=x;
    }
  });
  return max;
};
//Req. 3D
sumEvens = (array) => {
  var sum = 0;
    for(var x of array){
        if(x%2==0){
            sum=sum+x;
        }
    }
    return sum;
};

function alphaPosition(ch){
  return charCodeAt(index);
}
alphaPosition("a") -> 1 ;
alphaPosition("b") -> 2;
alphaPosition("c") -> 3 ;
alphaPosition("d") -> 4 ;
alphaPosition("e") -> 5 ;
alphaPosition("f") -> 6 ;
alphaPosition("g") -> 7 ;
alphaPosition("h") -> 8 ;
alphaPosition("i") -> 9 ;
alphaPosition("j") -> 10;
 alphaPosition("k") -> 11 ;
alphaPosition("l") -> 12;
alphaPosition("m") -> 13;
alphaPosition("n") -> 14;
  alphaPosition("o") -> 15;
  alphaPosition("p") -> 16;
  alphaPosition("q") -> 17;
  alphaPosition("r") -> 18 ;
  alphaPosition("s") -> 19;
  alphaPosition("t") -> 20;
  alphaPosition("u") -> 21;
  alphaPosition("v") -> 22;
  alphaPosition("w") -> 23;
  alphaPosition("x") -> 24;
  alphaPosition("y") -> 25;
  alphaPosition("Z") -> 26 ;
}
