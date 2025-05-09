function fibs(n){
    let seq = [];

    for(i=0;i<n;i++){
        if(i == 0){
            seq.push(0)
        }else if (i==1){
            seq.push(1)
        }else{
        seq.push(seq[i-1]+seq[i-2])
        }
    }
    return seq
}

function fibsRec(n){
    if (n==1) return [0]
    if (n==2) return [0,1]
    
    const seq = fibsRec(n-1)
    seq.push(seq[seq.length-1]+seq[seq.length-2])
    return seq

}

console.log(fibsRec(8))