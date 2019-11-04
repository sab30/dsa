// // 1st approach
// function charCount(str){
// // Make object and return at the end
//     var result= {};
//     // loop over string for each charachter
//     for (var i=0 ; i< str.length; i++){
//         var char = str[i].toLowerCase();
//         //if key exists inctrement the count
//         if(result[char] > 0){
//             result[char] ++;
//         }else{
//             result[char] =1;
//         }
//     }

//     return result;
// }


// function charCount(str){
//     // Make object and return at the end
//         var result= {};
//         // loop over string for each charachter
//         for (var i=0 ; i< str.length; i++){
//             var char = str[i].toLowerCase();
//             //if key exists inctrement the count
//             // regular expression to check only alpha numeric values
//             if(/[a-z0-9]/.test(char)){
//                 if(result[char] > 0){
//                     result[char] ++;
//                 }else{
//                     result[char] =1;
//                 }
//             }
//         }
//         return result;
// }


function charCount(str){
    // Make object and return at the end
        var result= {};
        // loop over string for each charachter
        for (var char of str){
            var char = char.toLowerCase();
            //if key exists inctrement the count
            // regular expression to check only alpha numeric values
            if(/[a-z0-9]/.test(char)){
                // ternarry 
                //result[char] =  result[char] > 0 ?result[char] ++ : 1;
                // boolean simplified 
                result[char] = ++result[char] || 1;
            }
        }
        return result;
}






console.log(charCount("Hi there!"));


