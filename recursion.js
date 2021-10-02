// function a(){
//     console.log("I am function A")
//     a()
// }
// function b(){
//     console.log("I am function B")
// }
// a()
// i to given 0 value
// i=3
//output: 3,2,1,0
// function printRangeOfNumber(i){
//     // console.log("printRangeOfNumber("+i+")") //printRangeOfNumber(i)
//     if(i<0){
//         return
//     }
//     console.log(i)
//     i=i-1
//     printRangeOfNumber(i)
//     console.log(i)
// }
// function printRangeOfNumber(i){
//     // console.log("printRangeOfNumber("+i+")") //printRangeOfNumber(i)
//     if(i<0){
//         return
//     }
//     i=i-1
//     printRangeOfNumber(i)
//     i++
//     console.log(i)
// }
//2 : 0,1,2
// var j=0
// function printRangeOfNumber(i){
//     // console.log("printRangeOfNumber("+i+")") //printRangeOfNumber(i)
//     if(j>i){
//         return
//     }
//     console.log(j)
//     j++
//     printRangeOfNumber(i)
// }
// printRangeOfNumber(2)


//factorial : 
// f(5) -> 120 (1*2*3*4*5)

function f(i){
    //base condition
    if(i<=1){
        return 1
    }
    var result=i*f(i-1)*f(i-2)
    return result
}

result=f(4)
console.log(result)