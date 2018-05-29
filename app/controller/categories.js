/**
 * Created by Administrator on 2018/5/14.
 */
let BaseController = require('./base');

module.exports = class CategoriesController extends BaseController{
    //查询分类
    async index(){

        try{
            await this.getPager({modName:'Category',returnFields:['name']})
        }catch(error){
            this.error(error)

        }
    }
    async create(){
        let {ctx} = this;
        let category = ctx.request.body

        try{
            let doc =await ctx.model.Category.findOne(category);
            if(doc){
                this.error('此分类已存在！')
            }else{
                doc = await ctx.model.Category.create(category)
                this.success('保存分类成功')
            }
        }catch(error){
            this.error(error)
        }
    }

    async update(){
        let {ctx} = this;
        let id = ctx.params.id;
        let category = ctx.request.body;
        try{
            let result = await ctx.model.Category.findByIdAndUpdate(id,category)
        }catch(error){
            this.error(error)
        }
    }
    async destroy() {
        let { ctx } = this;
        //能够同时支持删除一条和批量删除
        let id = ctx.params.id;
        let { ids = [] } = ctx.request.body;
        ids.push(id);
        try {
            await ctx.model.Category.remove({ _id: { $in: ids } });
            this.success('删除成功');
        } catch (error) {
            this.error(error);
        }
    }
}