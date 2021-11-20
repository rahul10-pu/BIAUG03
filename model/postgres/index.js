import config from '../../config/db.tutorial.config.js'
import Sequelize from "sequelize"
import user from './user.js'
import role from './role.js'
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
    user:user(sequelize,Sequelize),
    roles:role(sequelize,Sequelize)
}
db.roles.belongsToMany(db.user,{
    through:"user_role",
    foreignKey:"roleId",
    otherKey:"userId"
})
db.user.belongsToMany(db.roles,{
    through:"user_role",
    foreignKey:"userId",
    otherKey:"roleId"
})
db.ROLE=["user","admin","moderator"]
export default db
/**
 * 1:1
 * 1:M
 * M:1
 * M:M
 */

