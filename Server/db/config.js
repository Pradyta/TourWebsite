const express = require("express");
const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect('mongodb://localhost:27017/travel-management');
    const productSchema = new mongoose.Schema({});
    const users = mongoose.model('users',productSchema);
    const data = await users.find()
    console.warn(data);
}

connectDB();