const {Schema,model}=require("mongoose")
const course=new Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    img:String,
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
})
courseSchema.method('toClient',function(){
    const course=this.toObject()
    course.id=course._id
    delete course._id
    return course
})
module.exports=model('Course',course)

// const uuid=require("uuid")
// const fs=require("fs")
// const path=require("path")
// //var courses
// class Course {
//     constructor(title,price,img){
//         this.title=title
//         this.price=price
//         this.img=img
//         this.id=uuid()
//     }
//     static async update(){
//         const idx=courses.findIndex(c=> c.id===course.id)
//         courses[idx]=course
//         return new Promise((resolve,reject)=>{
//             fs.writeFile(
//                 path.join(__dirname,'data','courses.json'),
//                 JSON.stringify(courses),
//                 (err)=>{
//                     if(err){
//                         reject(err)
//                     }else{
//                         resolve()
//                     }
//                     module.exports=courses
//                 }
//             )
//         })
//     }
//     toJSON(){
//         return {
//             title:this.title,
//             price:this.price,
//             img:this.img,
//             id:this.id
//         }
//     }
//     async save(){
//         const courses=await Course.getAll()
//         courses.push(this.toJSON())
//         return new Promise((resolve,reject)=>{
//             fs.writeFile(
//                 path.join(__dirname,'data','courses.json'),
//                 JSON.stringify(courses),
//                 (err)=>{
//                     if(err){
//                         reject(err)
//                     }else{
//                         resolve()
//                     }
//                     module.exports=courses
//                 }
//             )
//         })
        
//     }
//     static getAll(){
//         return new Promise((resolve,reject)=>{
//             fs.readFile(
//                 path.join(__dirname,'..','data','courses.json'),
//                 'utf-8',
//                 (err,content)=>{
//                     if(err){
//                         reject(err) 
//                     }else{
//                         resolve(JSON.parse(content))
//                     }
//                 }
//             )
//         })
        
//     }
// }
