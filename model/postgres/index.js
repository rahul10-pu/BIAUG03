import config from '../../config/db.tutorial.config.js'
import Sequelize from "sequelize"
import user from './user.js'
const pgCongig=config.postgres
const sequelize=new Sequelize(
    pgCongig.dbName,
    pgCongig.user,
    pgCongig.password,
    {
        host:pgCongig.host,
        dialect:pgCongig.dialect,
        port:pgCongig.port,
        pool:{
            max:pgCongig.pool.max,
            min:pgCongig.pool.min,
            acquire:pgCongig.pool.acquire,
            idle:pgCongig.pool.idle
        }
    }
)
const db={
    Sequelize:Sequelize,
    sequelize:sequelize,
    user:user(sequelize,Sequelize)
}
export default db