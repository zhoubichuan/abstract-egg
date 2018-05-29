/**
 * Created by Administrator on 2018/5/15.
 */
module.exports = app =>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ObjectId = Schema.Types.ObjectId;
    const ArticleSchema = new Schema({
        title:{type:String,required:true},
        content:{type:Object,ref:'User'},
        user: { type: ObjectId, ref: 'User' },
        category:{
            type:ObjectId,
            ref:'Category'
        },
        pv:{type:Number,default:0},
        comments:[
            {user:{type:ObjectId,ref:'User'},content:String,createAt:{type:Date,default:Date.now}}
        ],
        createAt:{type:Date,default:Date.now}
    })
    const Article = mongoose.model('Article',ArticleSchema);
    return Article;
}