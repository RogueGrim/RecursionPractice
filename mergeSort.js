function mergeSort(arr){

    if(arr.length <= 1){
        return arr
    }

    let divide = Math.floor(arr.length/2)

    let left = mergeSort(arr.slice(0,divide))
    let right = mergeSort(arr.slice(divide))

    return sort(left,right)

}   

function sort(left,right){
    const result = []
    let i =0, j = 0

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }
    }
    
    while(i < left.length){
        result.push(left[i])
        i++
    }

    while(j < right.length){
        result.push(right[j])
        j++
    }
    return result
}

console.log(mergeSort([10,20,50,70,5]))


