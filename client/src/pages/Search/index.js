import React, { useState, useEffect, useRef } from "react";
import Hero from "../../components/Hero";
import Card from "../../components/Card";

import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";
import { LOADING, ADD_BOOK, UPDATE_BOOKS, ADD_SAVED, UPDATE_SAVED } from "../../utils/actions";

function Search() {
    const [search, setSearch] = useState("");
    const [state, dispatch] = useStoreContext();
    
    const handleInputChange = e => setSearch(e.target.value);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: LOADING });
        dispatch({ type: UPDATE_BOOKS, books: []})
        API.getSearchResults(search)
          .then(res => {
              console.log('this is res from API.getSearch', res);
              const array = res.data.items.map(book => {
                  return ({
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors.join(", "),
                    description: book.volumeInfo.description,
                    image: book.volumeInfo.imageLinks.thumbnail,
                    link: book.volumeInfo.infoLink,
                  });
              });
              console.log("this is array ", array);
              dispatch({
                  type: UPDATE_BOOKS,
                  books: array
              });
          })
          .catch(err => console.log(err));
    };

    const saveBook = (index) => {
        console.log("this is ", index);
        let book = state.books[index];
        let data = {
            title: book.title,
            authors: book.authors,
            description: book.description,
            image: book.image,
            link: book.link
        };
        console.log("this is data ", data);
        API.saveBook(data)
        .then(res => {
            console.log(res)
            let saved = state.saved;
            saved.push(data);
            dispatch({
                type: UPDATE_SAVED,
                saved: saved
            });
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <Hero
                search={search}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />
            <br></br>
            <br></br>
            <div className="section container">

                {state.books.length > 0 ? 
                state.books.map(book => 
                <Card key={state.books.indexOf(book)}
                    title={book.title}
                    authors={book.authors}
                    description={book.description}
                    thumbnail={book.image}
                    link={book.link}
                    onClick={() => saveBook(state.books.indexOf(book))}
                /> ): 
                <h1 className="title"></h1>
                }
            </div>
        </div>
    );
}

export default Search;