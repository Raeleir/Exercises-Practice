import React from "react";
import Article from "../components/article";

let articles = [
    {
        name: "persona",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat elementum erat vitae finibus. Quisque blandit massa quis lorem interdum, et sodales orci tincidunt. In tristique convallis mauris."
    },
    {
        name: "thingermajig",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat elementum erat vitae finibus. Quisque blandit massa quis lorem interdum, et sodales orci tincidunt. In tristique convallis mauris."
    },
    {
        name: "faceboy spiderpig",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat elementum erat vitae finibus. Quisque blandit massa quis lorem interdum, et sodales orci tincidunt. In tristique convallis mauris."
    }
];

class ArticleContainer extends React.Component {
    render() {
        let index = this.props.match.params.index;
        return (
            <Article article={articles[index]}/>
        )
    }
}

export default ArticleContainer;