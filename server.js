const http = require('http')
const url=require('url')
const server=require('./controller/home.js')
// console.log("I am trying to print http object")
// console.log(http)
// const homeApi=function(request, response){
//     console.log("Heyyyyy I am the homeApi...and I got called by the client")
//     response.write("Hey I am Home API, and I am the response from the backend")
//     response.end()
// }

 //http://localhost:8080/ - homepage
 // http://localhost:8080/user - userAPI
server.listen(8080)
// {
//     "key: string":"value: string, number, boolean, json"
// }