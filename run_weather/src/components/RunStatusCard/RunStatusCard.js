import React from "react";
import "./style.css";

const RunStatusCard = (props) => {
  const status = props.number;

  const messages = [
    props.currenttemp,
    props.hitemp,
    props.lotemp,
    props.humidity,
    props.uv,
  ];

  console.log(status);

  const listMessages = messages.map((messages) => (
    <li key={messages}>{messages}</li>
  ));

  console.log(messages);

  if (status >= 11) {
    return (
      <div
        className="runStatus"
        style={{ backgroundColor: "red", color: "white" }}
      >
        <h3>CURRENT CONDITION</h3>
        <img src={require("../../img/icons/icons/STOP.png")}></img>
        <h3>TERRIBLE, DON'T RUN</h3>
        <ul>{listMessages}</ul>
      </div>
    );
  } else if (status >= 9) {
    return (
      <div
        className="runStatus"
        style={{ backgroundColor: "orange", color: "white" }}
      >
        <h3>CURRENT CONDITION</h3>
        <img src={require("../../img/icons/icons/MOREWARNING.png")}></img>
        <h3>POOR</h3>
        <ul>
          <li>{listMessages}</li>
        </ul>
      </div>
    );
  } else if (status >= 7) {
    return (
      <div
        className="runStatus"
        style={{ backgroundColor: "yellow", color: "white" }}
      >
        <h3>CURRENT CONDITION</h3>

        <img src={require("../../img/icons/icons/WARNING.png")}></img>
        <h3>FAIR</h3>
        <ul>
          <li>{listMessages}</li>
        </ul>
      </div>
    );
  } else if (status <= 5) {
    return (
      <div
        className="runStatus"
        style={{ backgroundColor: "green", color: "white" }}
      >
        <h3>CURRENT CONDITION</h3>

        <img src={require("../../img/icons/icons/GO.png")}></img>
        <h3>GOOD</h3>
        <ul>
          <li>{listMessages}</li>
        </ul>
      </div>
    );
  } else if (status <= 3) {
    return (
      <div
        className="runStatus"
        style={{ backgroundColor: "blue", color: "white" }}
      >
        <h3>CURRENT CONDITION</h3>

        <img src={require("../../img/icons/icons/GO FAST.png")}></img>
        <h3>PERFECT</h3>
        <ul>
          <li>{listMessages}</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div
        className="runStatus"
        style={{ backgroundColor: "cyan", color: "white" }}
      >
        <h3>CURRENT CONDITION</h3>

        <ul>
          <li>{listMessages}</li>
        </ul>
      </div>
    );
  }
};

export default RunStatusCard;
