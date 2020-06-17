import axios from "axios";

export default {
  // Gets all saved books
  getBooks: function() {
    return axios.get("api/books");
  },
  // not sure if this is necessary
  // Gets the post with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // Get all books from Google Books API
  getSearchResults: function(search) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search);
  }
};
