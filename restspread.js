//function add(...numbers){
   // let total=0;
    //for(let i=0;i<numbers.length;i++){
      //  total=total+numbers[i];
    //}
    //return total
//}
//console.log(add(1,2,3,4,5));

//let a=[1,2,3,34,45,88];
//let[first,sec,...last]=a;
//console.log(first,sec,last);
//let arr1=[10,20,30];
//let arr2=[arr1];
//console.log(arr2);

//const iseven=(a)=>{
 //   if(a%2==0){
  //      return "Even"
  //  } else{ 
    //    return "Odd"
    //}
//}
//console.log(iseven(11))

//const reversestring=(str)=>{
  //  return str.split("").reverse().join("");
//}
//console.log(reversestring("HELLO TANMAY"));

// const avgmarks=(marks)=>{
//     let total=0;
//     for(let mark of marks){
//         total+=mark;
//     }
// avg=total/marks.length;
// if(avg>=40){
//     return "PASS"
// }else{
//     return "FAIL"
// }
// }
// console.log(avgmarks([40,50,30,90]));

ulteam=["Tanmay","Shekhar","Mishra"]
flutterteam=["Aviral","Anshul","Singh"]
function showteam(){
    console.log("Menu");
    console.log("Team 1",+ulteam);
    console.log("Team 2",+flutterteam);
}
console.log(...ulteam,...flutterteam);