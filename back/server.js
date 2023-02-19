import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Note from "./models/Note.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.set("strictQuery", true);
mongoose.connect(uri, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once("open", ()=> {
    console.log("MongoDB Connected")
})


//CREATING A NOTE TO SEND TO DATABASE
// const item = new Note({
//     title: "Java Work",
//     content: "Be sure to practice java today"
// })
// item.save().then(item => {
//     console.log(item);
// })
// .catch(e => {
//     console.log(e);
// })

//GET ROUTE TO GET ALL NOTES
app.get("/", async (req, res) => {
    const notes = await Note.find();
    return res.json(notes);
})
//ADD NOTES:
app.post("/add", async(req, res )=> {
    const newNote = new Note(req.body);
try{
const note = await newNote.save();
res.status(201).json(note);
} catch(error){
    res.status(400).json({message: error.message})
}
})

app.listen(5000, () => console.log("App Listening"));
