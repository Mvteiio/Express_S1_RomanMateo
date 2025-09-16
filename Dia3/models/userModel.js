import mongoose from "mongoose";

const UserSchema =  new mongoose.Schema({
    name: {type:String, required:true, trim:true},
    email: {type:String, required:true, unique:true, lowercase:true, trim:true},
    age: {type:Number, min:0}
}, {timestamps: true});

class userClass {
    get isAdult(){
        return (this.age ?? 0) >= 18;
    }   
    static async findByEmail(){
        
    }
}