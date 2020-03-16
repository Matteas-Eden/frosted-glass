import React from 'react';
import './Frosted.scss';

const bgImage = "https://source.unsplash.com/collection/1065396/1600x900";
const bgImageValue = `url(${bgImage})`;

const FrostedGlassView = (props) => {
    return (
        <div style={!props.disabled ? { backgroundColor: bgImageValue, backgroundImage: bgImageValue } : {}}
            className={"bg frosted-glass " + (props.className ? props.className : "")}
        >
            <div className="frosted-glass-content">
                {props.children}
            </div>
        </div>
    );
}

class App extends React.Component {
    constructor() {
        super();
        
        this.state = {
            disabled: false
        };
    }
    
    render() {
        return (
            <main className="bg has-frosted-glass" style={{backgroundImage: bgImageValue}}>
                <FrostedGlassView disabled={this.state.disabled} className="my-glass">
                    <h1>Frosted Glass as React Component</h1>
                    
                    <p>
                        I'm a big fan of the Frosted Glass effect. With this Component
                        you can easily use it in your React projects. To get it just
                        grab the &lt;FrostedGlassView /&gt; component and the first part
                        of the stylesheet.<br />
                        Unfortunately there are still some issues of using it in some browsers.
                        For example if you have scrollable content Edge and Firefox will get 
                        stucked with the background image. That's why you can disable the 
                        effect with the <code>disabled</code> property.
                    </p>
                    
                    <label>
                        <input 
                            type="checkbox" 
                            checked={this.state.disabled} 
                            onChange={() => this.setState({disabled: !this.state.disabled})}
                        />
                        &nbsp;Disable frosted glass effect
                    </label>
                </FrostedGlassView>
            </main>
        );
    }
}

export default App;
