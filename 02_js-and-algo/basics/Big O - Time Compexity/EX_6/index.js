const findDuplicates = function (ages) {
    const arr = new Array(ages.length).fill(false);

    for (let i = 0; i < ages.length; i++) {

        for (let j = i + 1; j < ages.length; j++) {
            if(arr[j]) break;
            if (ages[i] === ages[j]) {
                console.log(`${ages[i]} has a duplicate`);
                arr[j] = true;
            }
        }
       
    }
}