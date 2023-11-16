import mongoose, {Schema} from "mongoose";

mongoose.connect(process.env.MONGO_URI)
mongoose.Promise = global.Promise

const movieSchema = new Schema(
    {
        title: String,
        description: String,
        category: String,
        priority: Number,
        progress: Number,
        status: String,
        active: Boolean,
    },
    {
        timestamps: true,
    }
)

const Movie = mongoose.models.Movie || mongoose.model('Movie', movieSchema)
export default Movie