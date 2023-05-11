function anagram(str1,str2){
    if(str1.length !== str2.length){
        return false
    }
    str1 = str1.toLowerCase().replace(/[^a-z]/g, '');
    str2 =str2.toLowerCase().replace(/[^a-z]/g, '');

    let str1Arr = str1.split('').sort();
    let str2Arr = str2.split('').sort();

    for(let i = 0; i < str1Arr.length; i++){
        if(str1Arr[i] !== str2Arr[i]){
            return false;
        }
    }
    return true;
}
console.log(anagram("Astronomer","Moon starer"));
console.log(anagram("sum","usm"));
