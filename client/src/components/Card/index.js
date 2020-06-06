import React from "react";
import { PromiseProvider } from "mongoose";

function Card(props) {
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
                                <p>Authors: {props.authors.toString()}</p>
                                    Descroption: {props.description}
                                </p>
                            </div>
                        </div>
                        <div className="column is-3">
                            <div className="field is-grouped">
                                <div className="control">
                                    <a className="button is-info" href={props.link} target="_blank">View</a>
                                </div>
                                <div className="control">
                                    <button className="button is-info is-light is-outlined">Save</button>
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