import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MovieSchema = new Schema//method 
({
    Title: String,   // this a type created by mongoose [json object]
    ReleaseDate: String,
    Director: String,
    Genre: String,
    Runtime: Number 
}, {
    timestamps: true, 
    collection: 'movies'
});

export default mongoose.model('Movies', MovieSchema);