const student={
    name:"Tanmay",
    age:25,
    address:{
        city:"GZB",
        state:"UP"
    }
}
//const {name: stuname=
  //  "Mishra", age, address:{
  //      city} }=student;
   //     console.log(stuname,age,city);
function displaystu({name,age}){
    console.log("My name is ${name} and age is ${age}");
}
displaystu(student);