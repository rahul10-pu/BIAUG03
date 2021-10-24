const http = require('http')
module.exports=http.createServer((request, response)=>{
    if(request.url=='/user'){
        response.write("This is user api call")
        response.end()
    }
    if(request.method=='GET'){
     response.write("Gotcha,, you did a get request")
     response.end()
    }
    if(request.method=='POST'){
     response.write("Gotcha,, you did a post request")
     response.end()
    }
    if(request.method=='DELETE'){
     response.write("Gotcha,, you did a delete request")
     response.end()
    }
    if(request.method=='PUT'){
     response.write("Gotcha,, you did a put request")
     response.end()
    }
    if(request.method=='PATCH'){
     response.write("Gotcha,, you did a patch request")
     response.end()
    }

 })
