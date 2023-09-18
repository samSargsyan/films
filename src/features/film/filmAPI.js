export async function fetchFilms({type,page}) {
  const data = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=5503f91f557746ba3ac3cbbfc5cba872&language=en-US&page=${page}`);
  const result = await data.json();
  return result;
}

export async function fetchFilm({filmName,page}) {
  const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${filmName}&api_key=5503f91f557746ba3ac3cbbfc5cba872&language=en-US&page=${page}`);
  const result = await data.json();
  return result;
}