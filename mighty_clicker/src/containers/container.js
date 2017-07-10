import React from "react";
import autoBind from "react-autobind";

import Button from "../components/buttons.js";

class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            red: 50,
            blue: 50
        }
        autoBind(this);
    }
    click(color) {
        this.setState(prevState =>{
            if(prevState.red >= 100 || prevState.blue >= 100){
                return {
                    red: 50,
                    blue: 50
                }
            }
            if(color === "blue"){
                return {
                    ...this.state,
                    red: prevState.red - 1,
                    blue: prevState.blue + 1
                }
            } else {
                return {
                    ...this.state,
                    red: prevState.red + 1,
                    blue: prevState.blue - 1
                }
            }
        });
    }
    
    render() {
        return ( 
            <div>
                <Button handleClick={this.click} color="red" counter={this.state.red}/>
                <Button handleClick={this.click} color="blue" counter={this.state.blue}/>
                <div className="bars">
                <div className="red" style={{width: this.state.red + "%"}}>
                </div>
                <div className="blue" style={{width: this.state.blue + "%"}}>
                </div>
                </div>
            </div> 
        )
    }
}

export default Container;