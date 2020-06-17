import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import { UPDATE_SAVED, LOADING, REMOVE_BOOK } from "../../utils/actions";
import { set } from "mongoose";

function Saved() {
    const [state, dispatch] = useStoreContext();
    const [saved, setSaved] = useState([]);

    const getSaved = () => {
        dispatch({ type: LOADING });
        API.getBooks()
        .then(res => {
            console.log("this is API.getBooks res ",res)
            setSaved(res.data);
        })
        .catch(err => console.log(err));
        // API.getBooks()
        // .then(res => console.log(res.data))
        // .catch(err => console.log(err));
      };

    const deleteBook = (id) => {
        API.deleteBook(id)
        .then(res => {console.log(res)
            getSaved();
        });
    }

    useEffect(() => {
        getSaved();
        console.log("this is state ", state);
    }, []);

    return (
        <div>
            <div className="navbar">

            </div>
            <div className="section">
                <div className="container">
                    {saved.map(book => 
                        <Card key={book._id}
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        thumbnail={book.image}
                        link={book.link}
                        onClick={() => deleteBook(book._id)}
                    />)}
                </div>
            </div>
        </div>
    )
}

export default Saved;