import React from "react";
import img from "../assets/images/404.jpg";

class NotFound extends React.Component {
  render() {
    return (
      <div className="flex-center" style={{ height: "100%" }}>
        <img src={img} alt="404" />
      </div>
    );
  }
}

export default NotFound;
