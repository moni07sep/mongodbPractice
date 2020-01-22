let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/monidb", { useNewUrlParser: true,useUnifiedTopology: true })
    .then(() => console.log("connected to db"))
    .catch(err => console.log(`something went wrong ${err.message}`));

    let mvSchema = new mongoose.Schema({
        name: { type: String, required: true },
        price: { type: Number, required: true },
        author: { type: String, required: true },
        genId:{type:mongoose.Schema.Types.ObjectId, ref:"type"}
    });
    
    let typeSchema = new mongoose.Schema({
        name: { type: String, required: true }   
    });

    let mv = mongoose.model("mv", mvSchema);
    let ty = mongoose.model("type", typeSchema);

    async function mvCreate(id) {
        let data = new mv({
            name: "moni",
            price: 1334,
            author: "monika",
            genId:id
        });
        let item = await data.save();
        console.log(item);
    }
    //mvCreate('5e274f19a3e2af32f071409c');
    
    async function createtype() {
        let t = new ty({
            name: "type2"    
        });
        let m = await t.save();
        console.log(m);
    
    };
    
    //createtype();
    async function FetchAll() {
        let item = await mv
            .find()
            .populate("genId")
            //select("name -genId._id")
            ;
        console.log(item);
    }
    FetchAll();