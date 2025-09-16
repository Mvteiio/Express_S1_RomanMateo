import mongoose from "mongoose";

export class Database {
    constructor(uri){
        this.uri=uri;
    }

    async connect(){
        try{
            mongoose.set("strictQuery", true);
            await mongoose.connect(this.uri);
            console.log('MongoDB conectado');

        }catch(err){
            console.log('Error message:'+err.message)
        }
    }

    async disconnect(){
        try{
            await mongoose.disconnect();
            console.log('MongoDB desconectado')
        } catch (err) {
            console.log('Hubo un error al desconectar: '+err.message)
        }
    }

}

