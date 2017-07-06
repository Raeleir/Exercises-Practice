import React from "react";
import FontAwesome from "react-fontawesome";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <ul className="list-inline text-center">
                                <li>
                                    <a href="#">
                                        <span className="fa-stack fa-lg">
                                            <FontAwesome stack="2x" name="circle" inverse/>
                                            <FontAwesome stack="1x" name="twitter"/>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="fa-stack fa-lg">
                                            <FontAwesome stack="2x" name="circle" inverse/>
                                            <FontAwesome stack="1x" name="facebook"/>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="fa-stack fa-lg">
                                            <FontAwesome stack="2x" name="circle" inverse/>
                                            <FontAwesome stack="1x" name="github"/>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <p className="copyright text-muted">Copyright c Your Website 2016</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;