import React from "react";

import Item from "./item";

class ItemList extends React.Component {
    genItems() {
        return this.props.gState.map((item, i) => {
            return (
                <Item key={item.title + i} index={i} item={item} inputs={this.props.inputs} handleInput={this.props.handleInput} handleDel={this.props.handleDel} handleEdit={this.props.handleEdit}/>
            )
        })
    }
    render() {
        return (
            <div>
                {this.genItems()}
            </div>
        )
    }
}

export default ItemList;