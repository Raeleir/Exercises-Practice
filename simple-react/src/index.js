import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//components
import Navibar from "./navbar.js"
import Header from "./header.js"
import Content from "./content.js"
import Footer from "./footer.js"

class App extends React.Component {
    render() {
        let links = [
                        {
                            label: "HOME",
                            link: "#"
                        },
                        {
                            label: "ABOUT",
                            link: "#"
                        },
                        {
                            label: "SAMPLE POST",
                            link: "#"
                        },
                        {
                            label: "CONTACT",
                            link: "#"
                        }
            
                    ]
        return (
            <div>
                <Navibar brand="Start Bootstrap" links={links}/>
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));