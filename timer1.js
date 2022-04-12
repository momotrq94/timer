const args = process.argv;
let arr1 = args.slice(2);
let beepTimes = arr1.map(x => x*1000);

if (beepTimes.length === 0){

}
else {
  for (const time of beepTimes){
    if (time <= 0){

    }
    else if (isNaN(time)){

    }
    else {
      setTimeout(()=>{
        process.stdout.write('\x07');
      },time)
    }
  }
}