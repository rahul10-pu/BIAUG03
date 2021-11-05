import { builtinModules } from "module"//const { builtinModules } = require("module")
import  mongoose from "mongoose" // const mongoose=require("mongoose")
import dbConfig from "../config/db.tutorial.config.js" //dbConfig=require("../config/db.tutorial.config")
import tutorial from "./tutorial.js"
mongoose.Promise=global.Promise
const db={} //consolidate all the requirements here in db objeect
db.mongoose=mongoose //lib
db.url=dbConfig.url 
db.tutorial=tutorial(mongoose)
export default db
