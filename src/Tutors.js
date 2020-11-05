import React, { Component } from 'react';

import ReturnButton from "./ReturnButton";

class Tutors extends Component {
  render() {
    return (
      <div>
        <ReturnButton location="/"/>
        <h2>Tutors</h2>
      </div>
    );
  }
}

export default Tutors;