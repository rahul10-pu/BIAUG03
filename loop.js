// console.log("Hello 2021")
// console.log("Hiii")
// console.log("Hello 2021")
// console.log("Hiii")
// console.log("Hello 2021")
// console.log("Hiii")
// console.log("Hello 2021")
// console.log("Hiii")
// console.log("Hello 2021")
// console.log("Hiii")
// console.log("Hello 2021")
// console.log("Hiii")
// console.log("Hello 2021")
// console.log("Hiii")
// console.log("Hello 2021")
// console.log("Hiii")
// console.log("Hello 2021")
// console.log("Hiii")
// console.log("Hello 2021")
// console.log("Hiii")
// console.log("Hello 2021")
// console.log("Hiii")
// console.log("Hello 2021")
// console.log("Hiii")
// console.log("Hello 2021")
// console.log("Hiii")


/**
 3-Types of loop

 1. while loop
SYNTAX:
    while(condition){
        Statement
        increment/decrement
        Statement
        Statement
        Statement
        Statement
    }
 */
// var a=10
// while(0){
//     console.log("Hello 2021")
//     console.log("Hiii")
//     a++
//     console.log(a)
// }
// if(0){
//     console.log("hi")
// }
// var a=1
// do{
//     a++
//     console.log(a)
// }while(a>"4apple")

// console.log(a<"4apple")


/**
 for(initialization ; condition ; icr/decr){

 }
 */



// for(var a =1 ; a<4 ; a++){

//     console.log(a)
// }


// var a=1
// while(a<4){
//     console.log(a)
//     a++
// }

/**
 function name(){


 }
 */
 for(var a =1 ; a<4 ; a++){
    console.log(a+1)
    continue;
    console.log(a)
}
console.log("-----------------")
// for(var a =1 ; a<4 ; a++){
//     if(a==2){
//         console.log(a)
//         continue;       
//    }
//    console.log(a)
// }

// for(var a =1 ; a<4 ; a++){
//     if(a==2){
//         console.log(a)
//         a--;
//         continue;       
//    }
//    console.log(a)
// }

// for(var a =1 ; a<4 ; a++){
//     if(a==4){
//         a--
//         console.log(a)
//         continue;       
//    }
//    console.log(a)
// }


// for(var a =1 ; a<4 ; a++){
//     if(a==2){
//         continue;       
//    }
//    console.log(a)
// }
//Answer : 1 3

// for(var a =1 ; a<4 ; a++){
//     if(a==2){
//         break   
//     }
//    console.log(a)
// }
//Answer: 1

for(var a =1 ; a<4 ; a++){
    if(a==2){
        console.log(a)
        continue;       
   }
   break
   console.log(a)
}
//Answer: 
for(var a =1 ; a<4 ; a++){
    if(a==2){
        console.log(a)
        continue;       
   }
   console.log(a)
   break
}
//Answer: 1

for(var a =1 ; a<4 ; a++){
    if(a==2){
        console.log(a)
        break
        continue;       
   }
   console.log(a)
}
//Answer: 1,2
for(var a =1 ; a<4 ; a++){
    if(a==2){
        break
        console.log(a)
        continue;       
   }
   console.log(a)
}
//Answer: 1
console.log("-------------")
// for(var a =1 ; a<=4 ; a++){
//   if(a<=1){
//       continue
//   }
//   if(a==4){
//       break
//   }
//   console.log(a)
// }
//Answer: 2,3

// for(var a =1 ; a<4 ; a++){
//     if(a==2){
//         break    
//    }
//     for(var b =1 ; b<4 ; b++){
//         if(b==2){
//             break   
//         }
//         console.log(b)
//     }
//    console.log(a)
// }

// for(var a =1 ; a<4 ; a++){
//     if(a==2){
//         break    
//    }
//     for(var b =1 ; b<4 ; b++){
//         if(b==2){
//             continue   
//         }
//         console.log(b)
//     }
//    console.log(a)
// }
for(var a =1 ; a<4 ; a++){
    if(a==2){
        continue    
   }
    for(var b =1 ; b<4 ; b++){
        if(b==2){
            break   
        }
        console.log(b)
    }
   console.log(a)
}
