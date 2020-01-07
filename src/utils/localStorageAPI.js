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
    favorites.splice(i, 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    removeMovie(movie);
  }
}

export function getFavorites() {
  const favorites = localStorage.getItem("favorites");
  if (!favorites) {
    return [];
  }
  return JSON.parse(favorites).map(id => JSON.parse(localStorage.getItem(id)));
}

export function isFavorited(movie) {
  const favorites = localStorage.getItem("favorites");
  if (!favorites) {
    return false;
  }

  return JSON.parse(favorites).includes(movie.id);
}

export function addRating(movie, rating) {
  let rated = localStorage.getItem("rated");
  if (rated) {
    rated = JSON.parse(rated);
  } else {
    rated = [];
  }

  rated.push({
    id: movie.id,
    rating
  });
  localStorage.setItem("rated", JSON.stringify(rated));
  addMovie(movie);
}

export function getRated() {
  const rated = localStorage.getItem("rated");
  if (!rated) {
    return [];
  }
  return JSON.parse(rated).map(rating =>
    JSON.parse(localStorage.getItem(rating.id))
  );
}

export function getRating(movie) {
  let rated = localStorage.getItem("rated");
  if (!rated) {
    return null;
  }

  rated = JSON.parse(rated);
  const i = rated.findIndex(rating => rating.id === movie.id);
  if (i === -1) return null;
  return rated[i].rating;
}

export function isRated(movie) {
  const rated = localStorage.getItem("rated");
  if (!rated) {
    return false;
  }

  return JSON.parse(rated)
    .map(rating => rating.id)
    .includes(movie.id);
}

function addMovie(movie) {
  if (localStorage.getItem(movie.id)) {
    return;
  } else {
    localStorage.setItem(movie.id, JSON.stringify(movie));
  }
}

function removeMovie(movie) {
  if (isRated(movie)) {
    return;
  }
  localStorage.removeItem(movie.id);
}
