const user = (sequelize,Sequelize)=>{
    const User=sequelize.define("user",{
        username:{
            type:Sequelize.STRING
        },
        password:{
            type:Sequelize.STRING
        },
        emailID:{
            type:Sequelize.STRING
        },
        isActive:{
            type:Sequelize.BOOLEAN
        }
    },{
        timestamps:true
    })
    return User
}
export default user