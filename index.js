
//  1.
const Arr101 = [1,2,3];
const Arr102 = [4,5,6];

const Arr103 = Arr101.concat(Arr102);

console.log(Arr103);


//   2.

const Arr201 = [10,20,30,40,50];

const Arr202 =  Arr201.filter((value) => value > 30 );

console.log(Arr202);


//   3. 

const Arr301 = [5,6,7,2,4];

Arr301[2] = Arr301[4];
Arr301.pop();

console.log(Arr301);


//   4.

function RomanToInt (roman)  {

const RomanNum = {

    I: 1 ,
    V: 5 ,
    X: 10 ,
    L: 50 ,

    };

let result = 0; 
let preValue = 0;

for (let i = roman.length - 1; i >= 0 ; i--){  // 3 - 1 ; i = 2 ; 
    const curValue = RomanNum[roman[i]];    //1/ curVal = X  //2/ curVal = I //3/ curVal  = V

    if (curValue >= preValue){          
        result += curValue ;               //1/ result + 10  //3/ result + 5
    } else {
        result -= curValue ;               //2/ result - 1 
    }
    preValue = curValue ;                  //1/ preval = 10   //2/ preval = 1 
    }
return result;                             //3l result = 14 
}

const RomanNum = 'XIV'

const Final = RomanToInt(RomanNum);
console.log(Final);



//   5.
//output : [1,2,3,4,5]

const Arr501 = [1,2,1,4,5,2,3,4,1,4];

const Arr502 = Arr501.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

function compareNum (x,y){
    return x - y ; 
}
 Arr502.sort(compareNum);


console.log(Arr502);




//    6. Rotate Array 
//  dec : ขยับ array to right n ครั้ง 
// array [1,2,3,4,5] input : 3 output : [3,4,5,1,2]

const Arr601 = [1,2,3,4,5];

const input06 = 3 ;

function movenum(Arr601,x){

x = (x % (Arr601.length)) - 1 ;  // mod length ของ Arr601

for (let i = 0; i < x ; i++){
     Arr601.push(Arr601[i]);     // [1,2,3,4,5,1,2] after loop
}

Arr601.splice(0,x);      // Splice 2 elements first 

console.log(Arr601);
}

movenum(Arr601,input06);