//if while executing the try block, something bad happens i.e, some error happes
//then the control will go into the catch block
// try{
//     var a=10
//     g()
//     console.log("Still in Try block")
// }catch(error){
//     console.log("Hey I am the Catch Block and I handled your error of try block")
// }
// console.log("The End!")
// var a=10
// g()  //the code will stop here and exit
// console.log("The end!") //this will never execute

// try{
//     var a=10
//     console.log(1)
//     go()
// }catch(error){
//     console.log(2)
//     go() // this will stop the program
// }
// console.log(3)

// try{
//     var a=10
//     console.log(1)
//     go()
// }catch(error){
//     console.log(2)
//     go() // this will give error
// }finally{
//     //statements in the finally block will execute at any cost
//     console.log(3)
// }


// can we have a user defined error?
// for example: Wrong username
// how should we throw that error so that the control will go to the catch block?

// try{
//     var a=10
//     // go()// this we get system defined error
//     throw new Error("User Not found") //user defined error
//     console.log(1)
// }catch(error){

//     console.log(2)
// }
//try..catch..finally..throw

// var a=10
// // go()// this we get system defined error
// throw new Error("User Not found") //user defined error
// console.log(1)