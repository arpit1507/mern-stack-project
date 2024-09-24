import mongoose from "mongoose";

const AnimeSchmea=mongoose.Schema({
    Name:{
        type:String,
        required: true
    },
    genres:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    image:{
        type:String,
        required: true
    },
    linktoCharectersPage:{
        type:String,
        required: true
    }
},{
    timestamps:true
});

const Anime=mongoose.model('anime',AnimeSchmea);

export default Anime;