import React from "react";

function Hello() {
    const sayHello = () => {
        console.log("Hello");
      };

    return (
        <div>
                <h3>This line and the say Hello button is the Hello Component</h3>
            <button onClick = {sayHello} > Say Hello </button>
        </div>
    );

}

export default Hello;