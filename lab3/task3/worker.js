this.onmessage = ()=>{
    let sum = 0;
    for(let i=0;i<10000000000;i++){
        sum = sum + 1;
    }
    console.log(sum)
    this.postMessage(sum);
}
