import Anime from "../models/Anime.model.js";
import mongoose from "mongoose";
import express from "express";

const Animerouter=express()

Animerouter.post('/',async (req,res)=>{
    const data= req.body;
    if(!data.Name||!data.genres||!data.description||!data.image||!data.linktoCharectersPage){
        res.status(500).json({sucess:false,message:"Required Fileds Not Avaliable"});
    }
    const newAnime= new Anime(data);
    try{
        await newAnime.save();
        res.status(200).json({sucess:true,data:newAnime});
    }
    catch(error){
        res.status(400).json({sucess:false,message:"server Error"});
    }
})

Animerouter.get('/',async (req,res)=>{
    try{
        const products= await Anime.find({});
        res.status(200).json({sucess:true,data:products});
    }
    catch(error){
        console.log('error')
        res.status(500).json({sucess:false,message:"Server Error"});
    }
});

export default Animerouter;