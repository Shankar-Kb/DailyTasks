/* Do the below programs in anonymous function and IIFE* -> Print odd numbers in an array* 
Convert all the strings to title caps in a string array* 
Sum of all numbers in an array* 
Return all the prime numbers in an array* 
Return all the palindromes in an array* 
Return median of two sorted arrays of same size* 
Remove duplicates from an array* 
Rotate an array by k times and return the rotated array */

//8. Rotate an array by k times and return the rotated array
var arrRotate = [1, 2, 3, 4, 5];

var rotateFun = function(arr, times){
    var arrNew = arr.slice();
    for (var i = 0; i<times; i++){
           temp = arrNew[0];
       for (var j=1; j<arrNew.length; j++){
        arrNew[j-1] = arrNew[j]; 
         }
         arrNew[arrNew.length-1] = temp;
    }
    console.log(arrNew);
}
rotateFun(arrRotate, 2);

(function(arr, times){
    var arrNew = arr.slice();
    for (var i = 0; i<times; i++){
           temp = arrNew[0];
       for (var j=1; j<arrNew.length; j++){
        arrNew[j-1] = arrNew[j]; 
         }
         arrNew[arrNew.length-1] = temp;
    }
    console.log(arrNew);
}
)(arrRotate, 2);


//7. Remove duplicates from an array*
var arrDupes = ['hello', 6, 'cat', 'hello', 50, 'hello'];

var removeDupes = function(arr){
    var arrNew = arr.slice();
    for(var i=0; i<arrNew.length; i++){
        var j = i+1;
        while(arrNew[i]!==arrNew[j] && j<arrNew.length){
            j++;
        }
        if(arrNew[i]===arrNew[j]){
            arrNew.splice(j, 1);
            i--;
        }
    }
    console.log(arrNew);
}
removeDupes(arrDupes);

(function(arr){
    var arrNew = arr.slice();
    for(var i=0; i<arrNew.length; i++){
        var j = i+1;
        while(arrNew[i]!==arrNew[j] && j<arrNew.length){
            j++;
        }
        if(arrNew[i]===arrNew[j]){
            arrNew.splice(j, 1);
            i--;
        }
    }
    console.log(arrNew);
})(arrDupes);


//6. Return median of two sorted arrays of same size* 
var arrUnsorted1 = [8, 19, 7, 5, 12];
var arrUnsorted2 = [11, 21, 6, 9, 15];

var returnMedian = function(arr1, arr2){
    var arrNew = arrUnsorted1.concat(arrUnsorted2);
    arrNew.sort(function(a,b){return a-b});

    var res = arrNew[(arrNew.length/2)-1]+arrNew[arrNew.length/2]
    console.log(res);
}
returnMedian(arrUnsorted1, arrUnsorted2);

(function(arr1, arr2){
    var arrNew = arr1.concat(arr2);
    arrNew.sort(function(a,b){return a-b});

    var res = arrNew[(arrNew.length/2)-1]+arrNew[arrNew.length/2]
    console.log(res);
})(arrUnsorted1, arrUnsorted2);


//5. Return all the palindromes in an array*
var arrStrings = ['hello', 'tenet', 'hola', 'tacocat'];

var checkPalindrome = function(arr){
    var arrNew = arr.slice();
    var arrFinal = [];
    
    for(var i in arrNew){
        temp1 = arrNew[i].split('');
        temp1.reverse();
        temp2 = temp1.join('');
        if(arrNew[i]==temp2){
        arrFinal.push(temp2);
        }
    }
    console.log(arrFinal);
}
checkPalindrome(arrStrings);

(function(arr){
    var arrNew = arr.slice();
    var arrFinal = [];
    
    for(var i in arrNew){
        temp1 = arrNew[i].split('');
        temp1.reverse();
        temp2 = temp1.join('');
        if(arrNew[i]==temp2){
        arrFinal.push(temp2);
        }
    }
    console.log(arrFinal);
})(arrStrings);


//4. Return all the prime numbers in an array*
var  arrayNum = [3, 4, 6, 5, 7, 8];

var arrPrimes = function(arr){
    var arrNew = arr.slice();

    for (var i=0; i<arrNew.length; i++){

        if(arrNew[i]<2){
           arrNew.splice(i, 1);
           i--;
        }
        else if(arrNew[i]>2){
            for(var j=2; j<arrNew[i];j++){
               if(arrNew[i]%j===0){
                arrNew.splice(i, 1);
                i--;
               }
            }
        }
    }
   console.log(arrNew);
};
arrPrimes(arrayNum);

(function(arr){
    var arrNew = arr.slice();

    for (var i=0; i<arrNew.length; i++){

        if(arrNew[i]<2){
           arrNew.splice(i, 1);
           i--;
        }
        else if(arrNew[i]>2){
            for(var j=2; j<arrNew[i];j++){
               if(arrNew[i]%j===0){
                arrNew.splice(i, 1);
                i--;
               }
            }
        }
    }
   console.log(arrNew);
})(arrayNum);


//3. Sum of all numbers in an array*
var arrayNum = [5,6,7,8];
var sumAll = function(arr){
    var totalSum = 0;
    for(var i in arr){
        totalSum += arr[i];
    }
    console.log(totalSum);
};
sumAll(arrayNum);

(function(arr){
    var totalSum = 0;
    for(var i in arr){
        totalSum += arr[i];
    }
    console.log(totalSum);
})(arrayNum);


//2. Convert all the strings to title caps in a string array
var stringArray = ['hello','how','are','you'];
var titleCaps = function(arr){
    var arrayNew = [];
    
    for(var i in arr){
        str = arr[i];
    temp = str[0].toUpperCase() + str.slice(1);
    arrayNew.push(temp);
    }
    console.log(arrayNew);
};
titleCaps(stringArray);

(function(arr){
    var arrayNew = [];
    
    for(var i in arr){
        str = arr[i];
    temp = str[0].toUpperCase() + str.slice(1);
    arrayNew.push(temp);
    }
    console.log(arrayNew);
})(stringArray);


//1. Print odd numbers in an array
var array = [3, 6, 7, 10];
var oddNum = function(arr){
    var res = [];
    for(var i  in arr){
        if(arr[i]%2!==0){
            res.push(arr[i]);
        }
    }
    console.log(res);
};
oddNum(array);

(function(arr){
    var res = [];
    for(var i  in arr){
        if(arr[i]%2!==0){
            res.push(arr[i]);
        }
    }
    console.log(res);
})(array);
