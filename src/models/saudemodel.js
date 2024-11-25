import {Schema, model} from "mongoose"


const saude = new Schema({
    name: { 
        type: String,
        required: true},
    email: { 
        type :String,
        required: true,
        unique: true},
    idade: {
        type: Number,
        required: true
        },
    Statusmental : {
        type: String,
        enum : ["Good", "bad", "moderate", "Critical"], 
        default: "good"
    },
    notes : {
        type:String,
        required:true    }
})
const modelo = model("User", saude)
 export default  modelo