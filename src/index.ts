import mongoose from "mongoose";

const connectDB = async () => {
    const db = await mongoose.connect('mongodb://localhost/typegoosedb')
    console.log('MongoDB Connected ->',db.connection?.db.databaseName)
}

connectDB()
