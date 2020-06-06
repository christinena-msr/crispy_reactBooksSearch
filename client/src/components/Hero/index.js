import React from "react";

function Hero(props) {
    return (
        <section className="hero is-small is-success is-bold">
            <div className="hero-header">
                <div className="navbar">
                </div>
            </div>
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Google Books Search</h1>
                </div>
            </div>
            <div className="hero-footer">
                <div className="columns">
                    <div className="column is-3"></div>
                    <div className="column is-6">
                    <form className="section container field has-addons">
                        <div className="control is-expanded">
                            <input 
                                className="input"
                                value={props.search}
                                onChange={props.handleInputChange}
                                name="term"
                                type="text"
                                placeholder="What are you looking for?"
                                id="term"
                            />
                        </div>
                        <div className="control">
                            <button className="button is-info" onClick={props.handleFormSubmit}>
                                <span className="icon">
                                    <i className="fas fa-search"></i>
                                </span>
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;