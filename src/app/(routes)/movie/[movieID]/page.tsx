

import React from "react";


export default function PageMovieid( { params }: { params: { movieID: string } }) {
  return (
    console.log(params),
    <div>
      <h1>PageMovieID</h1>
    </div>
  );
}