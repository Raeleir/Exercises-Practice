import React from "react";
import ReactDOM from "react-dom";
import HomeContainer from "./containers/home-container";
import ContactContainer from "./containers/contact-container";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import BlogContainer from "./containers/blog-container";
import Navbar from "./components/navbar";
import ArticleContainer from "./containers/article-container";

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Navbar/>
                        <Switch>
                            <Route exact path="/" component={HomeContainer}/>
                            <Route exact path="/contact" component={ContactContainer}/>
                            <Route exact path="/blog" component={BlogContainer}/>
                            <Route exact path="/article/:index" component={ArticleContainer}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));