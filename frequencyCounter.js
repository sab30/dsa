
// on2 quadratic time 1 * n times for every index
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    for(var i=0;i<arr1.length;i++){
        // IndexOf iterates ove the array, nested loops
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if(correctIndex === -1){
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1);
    }

    return true;
}


// Re factored. o(3n) = o(n), only n * 3 times
function sameRefactored(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    let frequencyCounter1= {};
    let frequencyCounter2= {};

    for (let val of arr1){
        // Push the values to obbject with the count of the occurence
        frequencyCounter1[val]= (frequencyCounter1[val] || 0) + 1;

    }

    for (let val of arr2){
        // Push the values to obbject with the count of the occurence
        frequencyCounter2[val]= (frequencyCounter2[val] || 0) + 1;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    // Compare the key values with squared
    for(let key in frequencyCounter1){
        // Check if the key exists in Object
        // any sqaure root of frequencyCounter1[key] exists in frequencyCounter2
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }
        console.log('comapre : ' + frequencyCounter2[key ** 2 ] + ' - ' + frequencyCounter1[key]);
        // returns 1 if matched else return false, 9 == times occured in frequencyCounter1
        if(frequencyCounter2[key ** 2 ] !== frequencyCounter1[key]){
            return false;
        }
    }

    return true;
}
// console.log(sameRefactored([1,2,3,2], [9,4,1,4]));

// anagram of string comaprision with same occurrence



function anagram (str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    let frequencyCounter1= {};
    let frequencyCounter2= {};

    for (let val of str1){
        frequencyCounter1[val]= (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of str2){
        frequencyCounter2[val]= (frequencyCounter2[val] || 0) + 1;
    }
    // console.log(frequencyCounter1);
    // console.log(frequencyCounter2);

    for(let key in frequencyCounter1){

        if (! ( key in frequencyCounter2)){
            return false;
        }

        // console.log('frequencyCounter1 :' + frequencyCounter1[key] );
        // console.log('frequencyCounter2 :'  + frequencyCounter2[key] );
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false;
        }

    }
    return true;
}


console.log(anagram("", ""));
console.log(anagram("aaz", "zza"));
console.log(anagram("anagram", "nagaram"));
console.log(anagram("rat", "car"));
console.log(anagram("awesomw", "awesome"));
console.log(anagram("timewithtext", "textwithtime"));