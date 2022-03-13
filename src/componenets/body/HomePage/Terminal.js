import React from "react";

const Terminal = () => {
  return (
    <div className="terminal">
      <div className="terminal_top">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="terminal-main">
        <div className="terminal-wrapper">
          <div className="welcome">
            <span>$</span>
            &nbsp;
            <h1>Welcome To Dev Spot</h1>
          </div>
          <div>
            <h2>
              A place for developers to talk, post, and comment on the hottest
              news in tech!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
