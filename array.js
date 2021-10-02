

// var data=[] //empty array
//  var data = [1,2,3,4,5,6,7]
// console.log(data.length)
//index : start from 0
//data : 0 to 6
// console.log(data[6])
// var data1=new Array()
// console.log(data1.length)

// var data2 = ["Rahul","Kumar", 12, false, null,undefined,{}]
// console.log(data2.length)
// data2[10]="node"
// console.log(data2.length)
// data2[7]=122
// data2[8]=1282
// data2[9]=1122
// console.log(data2.length)
// data2.length=2
// console.log(data2)
// console.log(data2[3])
//[ 'Rahul', 'Kumar' ]
// data2.length=20
// console.log(data2)
// data2[0]=false
// console.log(data2)

// var x=[1,2,5]
// console.log(x.length)
// var y=[3,4]
// var z=x+y
// console.log(z)

// var stack=[1,2,3,4,5] //stack is an array
// stack.push(12) //add 12 from the end of the array
// console.log(stack)
// stack.pop() //delete last element of the array
// console.log(stack)

// stack.unshift(0) //add 0 to begining of the array
// console.log(stack)
// stack.shift() // delete the first element of the array
// console.log(stack)
// console.log(stack.indexOf(40)) // 1. find the index of the array,
// 2. to know whether the given element in there in array or not

// var queue=["Ajeet","Ashitha", "Jayesh", "Kailash", "Ayyappa"] //queue is an array
// //insert the data in queue - from the rear(back, end) - push
// //delete the data from the queue - from the front(begining) - shift
// queue.push("Milten")
// queue.shift()
// console.log(queue)

//delete the range of elements from the array
var marks=[1,12,14,17,18,0]
//marks.splice(index, noOfElements)
// marks.splice(0,3) //0 is the index, 3 numbers from 0th index will be deleted
// console.log(marks) //[ 17, 18, 0 ]
// marks.splice(3,1)
// console.log(marks)

// var age=[19,18,10]
//age.splice(index,0,el1,el2,el3...)
// age.splice(0,0,1,2,3) //[ 1, 2, 3, 19, 18, 10 ]
// age.splice(1,0,1,2,3) //[ 19, 1, 2, 3, 18, 10 ]
// age.splice(1,3,1,2)
// console.log(age)
// console.log(age.length)

// var age=[1,2,3,4,5,11,6,7,8,9,0]
// var newAge=age.slice(2,5) //start from index 2 to 4  => 3,4,5 // range from 2 to 5
// console.log(newAge)
// console.log(age)
// var newAge=age.splice(2,3)
// console.log(newAge)
// console.log(age)


var age=[10,1,3,2,5,4,7,9,6]
// age.sort(function(a,b){
//     if(a>b){
//         return 1
//     }

//     if(a<b){
//         return -1
//     }
// })
// age.sort((a,b)=>a-b)
console.log(age.sort())









