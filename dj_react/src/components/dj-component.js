import React from "react";

class DJ extends React.Component {
    render () {
        return (
            <div className={"parent"} style={this.props.background}>
            <button onClick={() => {this.props.handleClick()}}>DJ</button>
            <div className={"wrapper one"}>
                <div className={"dj"} style={this.props.styling}>
                </div>
                <div className={"dj"} style={this.props.styling}>
                </div>
                <div className={"dj"} style={this.props.styling}>
                </div>
                <div className={"dj"} style={this.props.styling}>
                </div>
                <div className={"dj last"} style={this.props.styling}>
                </div>
            </div>
            <div className={"wrapper two"}>
                <div className={"dj"} style={this.props.styling}>
                </div>
                <div className={"dj"} style={this.props.styling}>
                </div>
                <div className={"dj"} style={this.props.styling}>
                </div>
                <div className={"dj"} style={this.props.styling}>
                </div>
                <div className={"dj last"} style={this.props.styling}>
                </div>
            </div>
            <div className={"wrapper three"}>
                <div className={"dj"} style={this.props.styling}>
                </div>
                <div className={"dj"} style={this.props.styling}>
                </div>
                <div className={"dj"} style={this.props.styling}>
                </div>
                <div className={"dj"} style={this.props.styling}>
                </div>
                <div className={"dj last"} style={this.props.styling}>
                </div>
            </div>
            </div>
        )
    }
}

export default DJ;