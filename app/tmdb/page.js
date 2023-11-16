import Image from "next/image";
import Movie from "../(components)/Movie";

Movie
export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`, {next: {revalidate: 0}}
  );
  const res = await data.json();
  // console.log(res);
  return (
    <main className="p-20">
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((x) => (
          <Movie
            key={x.id}
            id={x.id}
            title={x.title}
            poster_path={x.poster_path}
            release_date={x.release_date}
          />
        ))}
      </div>
    </main>
  );
}
