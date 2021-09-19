// var name="Gaurav"
var print=function (data){
    console.log(data)
}
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
// attributes/entity of mobile: size, weight, color
//method: call, recoording

var student={
    address:{
        city:"Bangalore",
        state:"Karnatka",
        country:"India"
    },
    name:"Gaurav",
    age:12,
    isGraduated:false,
    myname:this.name,
    printDetails: function (){
        //trying to access the student attributes in the student method
        // this is a keyword, which is only used inside the method of the object
        console.log(this.address.city)
        console.log(this.city)
       console.log(this.name)
       console.log(this.age)
       console.log(this.isGraduated)
    }
}
//student.name
student.printDetails()
// console.log(student)