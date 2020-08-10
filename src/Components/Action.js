import React from "react";

const Action = (props) => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      WHAT SHOULD I DO?{" "}
    </button>
  </div>
);

export default Action;
