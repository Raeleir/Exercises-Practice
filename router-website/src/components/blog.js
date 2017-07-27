import React from "react";
import { Link } from "react-router-dom";

class Blog extends React.Component {
    genArticleLinks() {
        return this.props.articles.map((item, index) => {
            return <div>
                        <Link key={item.name + index} to={`/article/${index}`}>{item.name}</Link>
                   </div>
        })
    }
    render() {
        return (
            <div>
                {this.genArticleLinks()}
            </div>
        )
    }
}

export default Blog;