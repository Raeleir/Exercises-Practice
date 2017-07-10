import React from "react";

class Button extends React.Component {
    render() {
        return ( 
             <div>
                 <button style={{color: this.props.color}} onClick={()=>{this.props.handleClick(this.props.color)}}>
                     Attack
                 </button>
                 <h3>
                     {this.props.counter}
                 </h3>
             </div>
        )
    }
}

export default Button;