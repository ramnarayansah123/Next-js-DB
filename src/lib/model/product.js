import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    category: String,
    color: String,
    company: String,
    name: String,
    price:String // Changed from String to Number
});

export const Product = mongoose.models.products || mongoose.model("products", productModel);
