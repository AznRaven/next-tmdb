import Image from "next/image";
import React from "react";

export async function generateStaticParams() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();
  return data.results.map((x) => ({ x: x.id.toString }));
}

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imgPath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);
  return (
    <div className="p-10">
      <h2 className="text-2xl">{res.title}</h2>
      <h2 className="text-lg">{res.release_date}</h2>
      <h2 className="text-lg">Runtime: {res.runtime} minutes</h2>
      <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">
        {res.status}
      </h2>
      <div className="flex justify-center">
        <Image
          className="my-12"
          src={imgPath + res.backdrop_path}
          width={1000}
          height={1000}
          priority
        />
      </div>
      <p>{res.overview}</p>
    </div>
  );
}
