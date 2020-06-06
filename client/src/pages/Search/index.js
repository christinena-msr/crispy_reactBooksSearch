import React, { useState, useReducer, useEffect } from "react";
import Hero from "../../components/Hero";
import Card from "../../components/Card";

import API from "../../utils/API";

function Search() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState({});
    
    const handleInputChange = e => setSearch(e.target.value);

    const handleFormSubmit = e => {
        e.preventDefault();
        API.getSearchResults(search)
          .then(res => {
              const array = res.data.items.map(book => book.volumeInfo);
              setResults(array);
          })
          .catch(err => setResults(err.message));
    };
    
    useEffect(() => {
        console.log(results);
        
    })

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
                {results.length > 0 ? results.map(book => 
                <Card key={book.infoLink}
                    title={book.title}
                    authors={book.authors}
                    description={book.description}
                    thumbnail={book.imageLinks.thumbnail}
                    link={book.infoLink}
                /> ): 
                <h1 className="title"></h1>
                }
            </div>
        </div>
    );
}

export default Search;