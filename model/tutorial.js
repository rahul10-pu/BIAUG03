
module.exports = mongoose=> {
    const TutorialSchema=mongoose.model("tutorial",mongoose.Schema(
        {
            title: String,
            description : String,
            published : Boolean
        },{
            timestamps:true
        }
    ))
    return TutorialSchema
}