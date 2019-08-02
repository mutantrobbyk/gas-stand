import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Inventory extends Component {
  render() {
    return (
      <div className="Inventory">
        <h1>Inventory</h1>
        {this.props.inventory.map(item => {
          return (
            <div style={{ display: "flex" }}>
              <h1>{item.item_name}</h1>
              <h1>{item.category}</h1>
              <h1>{item.quantity}</h1>
              <h1>{item.price}</h1>
            </div>
          );
        })}
        <Link to='/wizard/step1'>
            <button>Add Item</button>
        </Link>
      </div>
    );
  }
}

export default Inventory;