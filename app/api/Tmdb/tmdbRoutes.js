import Movie from "../../(models)/TmdbModel";
import { NextResponse } from "next/server";

export async function Post(req){
    try {
        const body = await req.json()
        const movieData = body.formData
        await Movie.create(movieData)

        return NextResponse.json({ message: 'Movie Created'}, { status: 201})
    } catch (error) {
        return NextResponse.json({ message: 'Error', error}, { status: 500})    
    }
}