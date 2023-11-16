"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function MovieForm() {
  const [movieData, setMovieData] = useState(startingMovieData);
  const handleChange = () => {
    const value = e.target.value;
    const name = e.target.name;

    setMovieData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("submitted");
  };

  const startingMovieData = {
    title: "",
    description: "",
    category: "Favorites",
    priority: 1,
    progress: 0,
    status: "not started",
    // active: Boolean,
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2 "
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create Your Movie</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={movieData.title}
        />
        <label>Description</label>
        <input
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={movieData.description}
        />
      </form>
    </div>
  );
  return <div>MovieForm</div>;
}
