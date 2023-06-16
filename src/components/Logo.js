import React, { Component } from "react";

class Logo extends Component {
  render() {
    const size = {
      height: 150,
      width: 150,
    };

    return (
      <div className="logo">
        <img
          style={size}
          alt="She Chats Tech logo"
          src={require("/Users/emma/Documents/she_chats_tech/src/images/She Chats Tech.png")}
        />
      </div>
    );
  }
}

export default Logo;
