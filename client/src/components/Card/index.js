import React, { useEffect, useRef } from "react";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_BOOK, REMOVE_BOOK } from "../../utils/actions";

function Card(props) {

    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        // get all saved books from database
        API.getBooks()
            .then(res => dispatch({books: res.data}));
    }, []);

    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={props.thumbnail} alt="Image"></img>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="columns">
                        <div className="column is-9">
                            <div className="content">
                                <p>
                                <strong>{props.title}</strong>
                                <br></br>
                                <p>Authors: {props.authors.length === 0 ? "" : props.authors.toString()}</p>
                                    Description: {props.description}
                                </p>
                            </div>
                        </div>
                        <div className="column is-3">
                            <div className="field is-grouped">
                                <div className="control">
                                    <a className="button is-info" href={props.link} target="_blank">View</a>
                                </div>
                                <div className="control">
                                    <button className="button is-info is-light is-outlined" ref={props.ref} onClick={props.onClick}>Save</button>
                                </div>
                                <div className="control">
                                    <button className="button is-danger" ref={props.ref} onClick={props.onClick}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Card;