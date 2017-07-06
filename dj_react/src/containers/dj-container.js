import React from "react";
import autoBind from "react-autobind";

import DJ from "../components/dj-component.js";

let colors2 = ["#B71C1C", "#0D47A1", "#1B5E20", "#F57F17", "#3E2723", "#000000", "#4A148C"];
let colors = ["blue", "green", "red", "yellow", "orange", "purple"];
let radii = ["0px", "25px", "50px", "75px", "100px", "125px", "150px"];
let transform = ["rotate(45deg)", "rotate(20deg)", "rotate(70deg)", "skew(10deg, 10deg)", "translate(25px, 25px)", "translate(-25px, 25px)", "translate(25px, -25px)", "translate(-25px, -25px)"];

class DJCont extends React.Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
            style: {
                backgroundColor: `${colors[Math.floor(Math.random() * colors.length)]}`,
                borderRadius: `${radii[Math.floor(Math.random() * radii.length)]}`,
                transform: `${transform[Math.floor(Math.random() * transform.length)]}`
            },
            parentStyle: {
                backgroundColor: `${colors2[Math.floor(Math.random() * colors.length)]}`
            }
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.scroll);
    }
    click() {
        setInterval(() => {this.setState({
            style: {
                backgroundColor: `${colors[Math.floor(Math.random() * colors.length)]}`,
                borderRadius: `${radii[Math.floor(Math.random() * radii.length)]}`,
                transform: `${transform[Math.floor(Math.random() * transform.length)]}`
            },
            parentStyle: {
                backgroundColor: `${colors2[Math.floor(Math.random() * colors.length)]}`
            }
        })
        }, 1)
    }
    scroll() {
        clearInterval()
    }
    render () {
        return (
            <DJ background={this.state.parentStyle} styling={this.state.style} handleClick={this.click}/>
        )
    }
}

export default DJCont;