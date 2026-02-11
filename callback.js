//function aa(){
  //  console.log("First");
//}
//setTimeout(aa,5000);
//let count=0;
//let id=setInterval(()=>{
  //  console.log("First");
    //count++;
//if (count==5){
  //  clearInterval(id);
//}
//},2000);

function roll(to,num, next){
    setTimeout(()=> {
        console.log(" Roll.no is " +num);
        if (next) next();

    },to)
}
roll(2000,12212, ()=>{
    console.log("wait its getting downlaoded");
    roll(1500,12312, ()=>{
        console.log("wait its getting downlaoded");
        roll(5000,12412, ()=> {
            console.log("wait its getting downlaoded");
            roll(2000,12512);
        });
    });
});

