import React from "react";
import "./Frosted.scss";
import { FrostedGlassView } from "./FrostedGlassView";

const bgImage = "https://source.unsplash.com/collection/1065396/1600x900";
const bgImageValue = `url(${bgImage})`;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      disabled: false,
    };
  }

  render() {
    return (
      <main
        className="bg has-frosted-glass"
        style={{ backgroundImage: bgImageValue }}
      >
        <FrostedGlassView
          disabled={this.state.disabled}
          bg={bgImageValue}
          className="my-glass"
        >
          <h1>Frosted Glass as React Component</h1>

          <p>
            I'm a big fan of the Frosted Glass effect. With this Component, you
            can easily use it in your React projects just like I've done. To get
            it, just go to my GitHub where you can see the full source of this
            page. To use it in your page, just grab the &lt;FrostedGlassView
            /&gt; component and the relevant parts of the stylesheet.
            <br />
            Unfortunately, there are still some minor issues when using it in
            some browsers. That's why you can disable the effect with the{" "}
            <code>disabled</code> property.
            <br />
            This implementation is adapted from the codepen{" "}
            <a href="https://codepen.io/lgkonline/pen/aqZbOL"> here.</a>
          </p>

          <label>
            <input
              type="checkbox"
              checked={this.state.disabled}
              onChange={() => this.setState({ disabled: !this.state.disabled })}
            />
            &nbsp;Disable frosted glass effect
          </label>
        </FrostedGlassView>
      </main>
    );
  }
}

export default App;
