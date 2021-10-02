// var name="Gaurav"
// var print=function (data){
//     console.log(data)
// }
//print is a function
// var student={
//     name:"Gaurav",
//     age:12,
//     isGraduated:false,
//     log: function (data){
//         console.log(data)
//         return "Hi"
//     }
// }
// function vs method
// console.log(student.age)
// var msg=student.log(9)
// console.log(student.log(9))
//log is a method of student
//object holds simply attributes and method
//mobile is an object
// attributes/entity/properties of mobile: size, weight, color
//method: call, recoording

// var student={
//     address:{
//         city:"Bangalore",
//         state:"Karnatka",
//         country:"India"
//     },
//     name:"Gaurav",
//     age:12,
//     isGraduated:false,
//     myname:this.name,
//     printDetails: function (){
//         //trying to access the student attributes in the student method
//         // this is a keyword, which is only used inside the method of the object
//         console.log(this.address.city)
//         console.log(this.city)
//        console.log(this.name)
//        console.log(this.age)
//        console.log(this.isGraduated)
//     },
//     getName : function(){
//         return this.name
//     }
// }
// printDetails() error
// var result=student.getName()
// console.log(student.getName())
//student.name
// student.printDetails()
// console.log(student)


/**
 * This loop is used to iterate over the properties of the object
 for(var key in object){
     ...
 }
key here is the property of the object

 */
// delete student.address
// student.lastName="Kumar"
//  for (var key in student){
//      console.log(key)
//  }
// console.log(student.age)
// console.log(student["age"])

//check whether "address" property is there in student object or not?
// for (var key in student){
    // if(key =="address"){
    //     console.log(student.address)
    // }else{
    //     student.address="Delhi"
    //     console.log(student.address)
    // }
// }

// if("address" in student){
//     console.log(student.address)
// }else{
//     student.address="Delhi"
//     console.log(student.address)
// }

var emp={
    empID: 1,
    name:"Jayesh",
    address:"Mumbai",
    printEmpDetails: function(){
        console.log("The Employee Id is "+ this.empID+ ", Name of the Employee is "+ this.name+", Address is "+this.address)
    }
}
emp.printEmpDetails()

