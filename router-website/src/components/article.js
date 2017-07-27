import React from "react";

class Article extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.article.name}</p>
                <p>{this.props.article.text}</p>
            </div>
        )
    }
}

export default Article;