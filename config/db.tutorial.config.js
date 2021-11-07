const dbConfig={
    url : "mongodb+srv://admin:admin@cluster0.apqfl.mongodb.net/tutorial?retryWrites=true&w=majority",
    postgres : {
        host:"localhost",
        port:"5432",
        user:"postgres",
        password:"postgres",
        dbName:"postgres",
        dialect:"postgres",
        pool:{
            max:5,
            min:0,
            acquire:4000,
            idle:1000
        }
    }
}
export default dbConfig