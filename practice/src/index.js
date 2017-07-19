import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

//components
import SiteContainer from "./containers/site-container.js";

let mySites = [
    {
        name: "Japan",
        image: "https://static1.squarespace.com/static/54ce88b3e4b08cdce8e070d8/t/54e3da97e4b0785874f9037c/1424218779376/yokohama+fuji.jpg?format=2500w",
        desc: "Text"
    },
    {
        name: "Hawaii",
        image: "http://d2t9x9fzk70mi5.cloudfront.net/media/catalog/region_slider/cache/948x345/h/a/hawaii_experiences_hdr.jpg",
        desc: "Text 2"
    },
    {
        name: "Peru",
        image: "http://cdn1.buuteeq.com/upload/18138/llama-at-the-machu-picchu-unesco-peru-andbeyond.jpg",
        desc: "Text 3"
    },
    {
        name: "Machu Picchu",
        image: "http://cdn1.buuteeq.com/upload/18138/llama-at-the-machu-picchu-unesco-peru-andbeyond.jpg",
        desc: "Text 3"
    },
    {
        name: " ",
        image: "http://cdn1.buuteeq.com/upload/18138/llama-at-the-machu-picchu-unesco-peru-andbeyond.jpg",
        desc: "Text 3"
    },
    {
        name: "  ",
        image: "http://cdn1.buuteeq.com/upload/18138/llama-at-the-machu-picchu-unesco-peru-andbeyond.jpg",
        desc: "Text 3"
    }
]

class App extends React.Component {
    render() {
        return (
            <div>
                <SiteContainer sites={mySites}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));