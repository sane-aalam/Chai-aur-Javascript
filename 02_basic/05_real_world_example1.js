const NetfixMovies = [
  {
    id: 1,
    title: "Stranger Worlds",
    description:
      "A group of teenagers discover a portal to an alternate universe filled with mysteries.",
    image: "https://via.placeholder.com/300x450",
    genre: ["Sci-Fi", "Mystery"],
    rating: 8.5,
  },
  {
    id: 2,
    title: "The Dark City",
    description:
      "A detective unravels dark secrets hidden beneath a futuristic city.",
    image: "https://via.placeholder.com/300x450",
    genre: ["Thriller", "Crime"],
    rating: 9.1,
  },
  {
    id: 3,
    title: "Laugh Out Loud",
    description:
      "A hilarious sitcom about roommates navigating adult life in a big city.",
    image: "https://via.placeholder.com/300x450",
    genre: ["Comedy", "Sitcom"],
    rating: 7.8,
  },
  {
    id: 4,
    title: "Medieval Wars",
    description:
      "A historical drama depicting epic battles and political intrigue in the medieval era.",
    image: "https://via.placeholder.com/300x450",
    genre: ["Action", "Drama"],
    rating: 8.9,
  },
  {
    id: 5,
    title: "Beyond the Stars",
    description:
      "A space crew embarks on a dangerous mission to uncover the universe's greatest secrets.",
    image: "https://via.placeholder.com/300x450",
    genre: ["Sci-Fi", "Adventure"],
    rating: 8.2,
  },
];

console.log(NetfixMovies[0]);

// Netfix-card-1 Data Example
// Object destructuring(ES6)
// Syntax: const { key1, key2, key3, ..., keyN } = objectName;
// Help to bluid React Large web application
// const { key1, key2, key3, ..., keyN } = objectName;
// const key1 = objectName.key1;
// const key2 = objectName.key2;

const { id, title, description, image, genre, rating } = NetfixMovies[0];

console.log(id);
console.log(title);
console.log(description);
console.log(image);
console.log(image);
console.log(genre);
console.log(rating);

// Filter the data based on the title
// filter()
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// Syntax: array.filter(function(currentValue, index, arr), thisValue)

// User Search Movie Name
const UserSearchMovieName = NetfixMovies.filter(
  (movie) => movie.title == "The Dark City"
);

console.log(UserSearchMovieName);

// Top Ratings Movie
const TopRatingMovies = NetfixMovies.filter((movie) => movie.rating > 8.5);
console.log(TopRatingMovies);
