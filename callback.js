//2 functions
//Sync
//Async

function download(url, callback){
    //setTimeout()
    // setTimeout(()=>{
    //     console.log(`Downloading ${url} .....`)
    //     callback(url)
    // },5000)
    var i
    var j=1000
    for(i=0;i<10000000000;i++){
        j=j+i
    } 
    console.log(i)
    console.log(`Downloading ${url} .....`)
    callback(url)

}
function process(picture){
    console.log(`Processing ${picture}`)
}
var url="http://www.google.com"
// download(url, process)
// console.log("I will execute before download function")


// create promise object
// use promise object - Important
var myfunc=function (resolve, reject){
    const firstname="Rahul"
    const secondName="Kumar"
    if(firstname!=secondName){
        resolve(100) //for success
    }else{
        reject(200) //for error, throw error
    }
}
var promiseObj= new Promise(myfunc)

//
// promiseObj.then().catch()

// promiseObj.then(function(result){
//     console.log("Then executes on Success")
//     console.log(result)
// }).catch(function(result){
//     console.log("Then executes on Error")
//     console.log(result)
// })


// function f1(){
//     var num1=10
//     function f2(){
//         console.log(num1)
//     }
//     return f2
// }
// //access the in-conext data outside as well.
// var f3=f1()
// // console.log(num1) //num1 in inside f1 block/context
// f3()
function f1(d){
    function f2(dd){
        console.log(d)
        console.log(dd)
    }
    return f2
}
//access the in-conext data outside as well.
var f3=f1(12)
// console.log(num1) //num1 in inside f1 block/context
f3(13)