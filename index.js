
let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/monidb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`connected to db`))
    .catch(err => console.log(`something went wrong ${err.message}`));  
    //=============task code===============
    let courseSchema = new mongoose.Schema({
        tags: [String],
        date:{type: Date, default: Date.now()},
        name: { type: String },
        author: { type: String },
        isPublished: { type: Boolean },
        price :{type:Number}
    });

    let courseModel = mongoose.model("task", courseSchema ,"task");

    
    async function FetchBackendCourse(){
        //Get all the published backend courses,
        // sort them by their name,
        // pick only their name and author and display them.
        let data1 =await courseModel.find({"tags":"backend"}).sort("name").select("name author -_id");

        // get all the published frontend and backend courses, 
        // sort them by thier price and descending order,
        // pick only their name author, and display them.
        let data2 =await courseModel.find().sort("-price").select("name price author -_id");
        console.log(data1);
        console.log(data2);
    }
    FetchBackendCourse();
    //=====================================

//     let courseSchema = new mongoose.Schema({
//         author: { type: String },
//         courses: [String],
//         price: { type: Number },
//         isPublished: { type: Boolean },
//         date:{type: Date, default: Date.now()}
//     });
    
    
//     let courseModel = mongoose.model("courses", courseSchema);
//     async function CreateCourse() {
//         let newcourse = new courseModel({
//             author: "monika", //req.body.author
//             courses: ["backend1", "nodejs2"],
//             price: 100,
//             isPublished: true
//         });
    
//         let data = await newcourse.save();
//         console.log(data);
//     };
    
//     //CreateCourse();
//     async function FetchCourse(){
//         let data =await courseModel.find({"author":"monika"})
//         //.findById(id)
//         //.find().select("author price -_id");
//         console.log(data);
//     }
//     FetchCourse();


//     async function Updateacourse(id){
//         let data = await courseModel.findByIdAndUpdate(id,{
//             $set:{
//                 price:180 }
//             },{new:true})
        
//         if (!data){return "somthing went wrong"}
//         data.author="gautam";
//         await data.save();
//         console.log(data);

//     }
// //Updateacourse("5e2563aee5a4441a209511e0")

// async function remove(id){

//     let data =await courseModel.findByIdAndRemove(id)

// }
// remove("5e2563aee5a4441a209511e0")