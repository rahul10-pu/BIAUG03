var firstname="jayesh"
var lastname="Borse"
console.log("Hello "+firstname+" "+lastname)


// String Litreals
console.log(`Hello ${firstname} ${lastname}`)

/**
 Hello,
 jayesh Borse
 */
console.log(`Hello, \n${firstname} ${lastname}`)


//get the length of the string
var noOfChar=firstname.length
console.log(noOfChar)

//access the specific char from string
// index starts from 0
//we access the specefic charater via square bracket
console.log(firstname[5])

//length of the string -1 == last chrecter index
console.log(firstname[noOfChar-1])

//Print all the charecter of the given string
for(var index=0; index<firstname.length;index++){
    console.log(firstname[index])
}

var num=10
var numStr=num.toString()
// var num=parseInt(numStr)

if ('a' < 'b'){
    console.log("a is smaller than b")
}
if ('a' < 'B'){
    console.log("a is smaller than B")
}else{
    console.log("a is greater than B")
}
console.log(firstname.toUpperCase())






