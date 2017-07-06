import React from "react";

class Content extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div className="post-preview">
                            <a href="#">
                                <h2 className="post-title">
                                   {this.props.preview}
                                    Man must explore, and this is exploration at its greatest
                                </h2>
                                <h3 className="post-subtitle">
                                   {this.props.previewSm}
                                    Problems look mighty small from 150 miles up
                                </h3>
                            </a>
                            <p className="post-meta">
                               Posted by
                                <a href="#"> Start Bootstrap </a>
                                on {this.props.date} September 24, 2014
                            </p>
                        </div>
                        <hr></hr>
                        <div className="post-preview">
                            <a href="#">
                                <h2 className="post-title">
                                    I believe every human has a finite number of heartbeats 
                                </h2>
                                <h3 className="post-subtitle">
                                    I don't intend to waste any of mine
                                </h3>
                            </a>
                            <p className="post-meta">
                               Posted by
                                <a href="#"> Start Bootstrap </a>
                                on September 18, 2014
                            </p>
                        </div>
                        <hr></hr>
                        <div className="post-preview">
                            <a href="#">
                                <h2 className="post-title">
                                    Science has not yet mastered prophecy
                                </h2>
                                <h3 className="post-subtitle">
                                    We predict too much for the next year and yet far too little for the next ten.
                                </h3>
                            </a>
                            <p className="post-meta">
                               Posted by
                                <a href="#"> Start Bootstrap </a>
                                on August 24, 2014
                            </p>
                        </div>
                        <hr></hr>
                        <div className="post-preview">
                            <a href="#">
                                <h2 className="post-title">
                                    Failure is not an option
                                </h2>
                                <h3 className="post-subtitle">
                                    Many say exploration is part of our destiny, but it's actually our duty to future generations.
                                </h3>
                            </a>
                            <p className="post-meta">
                               Posted by
                                <a href="#"> Start Bootstrap </a>
                                on July 8, 2014
                            </p>
                        </div>
                        <hr></hr>
                        <ul className="pager">
                            <li className="next">
                                <a href="#">Older Posts -></a>
                            </li>
                        </ul>
                        <hr></hr>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;