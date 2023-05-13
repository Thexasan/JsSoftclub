nction anme(n){
    if(n==1){
        return 1
    }
    return n+anme(n-1)
}
console.log(anme(5));