import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Product } from "@/lib/model/product";

const MONGODB_URI = "mongodb+srv://test:test123@cluster0.xg4o4.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0";







export async function GET() {
    await mongoose.connect(MONGODB_URI)
    let data=await Product.find();

    console.log(data);
    console.log("its working ")
    

    return NextResponse.json({result:data})
    
    
}