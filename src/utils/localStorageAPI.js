export function addFavorite(movie) {
  let favorites = localStorage.getItem("favorites");
  if (favorites) {
    favorites = JSON.parse(favorites);
  } else {
    favorites = [];
  }

  favorites.push(movie.id);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  addMovie(movie);
}

export function removeFavorite(movie) {
  let favorites = localStorage.getItem("favorites");
  if (favorites) {
    favorites = JSON.parse(favorites);
  } else {
    return;
  }

  let i = favorites.indexOf(movie.id);
  if (i !== -1) {
    favorites = favorites.splice(i, 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}

// returns an array of movie objects
export function getFavorites() {
  const favorites = localStorage.getItem("favorites");
  if (!favorites) {
    return [];
  }
  return JSON.parse(favorites).map(id => JSON.parse(localStorage.getItem(id)));
}

export function addRating(movie, rating) {
  let rated = localStorage.getItem("rated");
  if (rated) {
    rated = JSON.parse(rated);
  } else {
    rated = [];
  }

  rated.push(rating);
  localStorage.setItem("rated", JSON.stringify(rated));
  addMovie(movie);
}

export function getRated() {
  const rated = localStorage.getItem("rated");
  if (!rated) {
    return [];
  }
  return JSON.parse(rated).map(id => JSON.parse(localStorage.getItem(id)));
}

function addMovie(movie) {
  if (localStorage.getItem(movie.id)) {
    return;
  } else {
    localStorage.setItem(movie.id, JSON.stringify(movie));
  }
}
