const datauri=require('datauri')
const DataURIParser = require('datauri/parser')
const path=require('path')
const parser=new DataURIParser()
const getdatauri=(file)=>{
    const extname=path.extname(file.originalname).toString();
    return parser.format(extname,file.buffer).content
}
module.exports=getdatauri