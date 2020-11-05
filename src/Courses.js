import React, { Component } from "react";

import ReturnButton from "./ReturnButton";

class Courses extends Component {
  render() {
    return (
      <div>
        <ReturnButton location="/" />
        <h2>Courses</h2>
      </div>
    );
  }
}

export default Courses;
