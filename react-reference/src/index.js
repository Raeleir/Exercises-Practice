import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//import components
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import Content from "./content.js";

class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
            <Navbar brand="CatBabies" links={
                        [
                            {
                                label: "UpperRight",
                                link: "google.com"
                            }, 
                            {
                                label: "Blog",
                                link: "google.com"
                            }, 
                            {
                                label: "Title",
                                link: "google.com"
                            }
                        ]
                         }/>
            <Content>
                <div className="jumbotron">
                    <h1 className="title">Hello</h1>
                    <p>People Face</p>
                    <img src="http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Honda-CBR-600RR-Motorcycle-Bike-PNG-Image.png"></img>
                </div>
            </Content>
            <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));