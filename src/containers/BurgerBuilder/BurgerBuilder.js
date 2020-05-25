import React, { Component } from "react";

import Burger from "../../components/Burger/Burger"
import Aux from "../../hoc/Auxiliary";

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat:1
        }
    }

  render() {
    return <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <div>
            Build Control
        </div>
    </Aux>;
  }
}

export default BurgerBuilder;