import React from 'react';
import '../scss/styles.scss';

export default function Letter() {
  return (
    <>
      <div className="letter_wrapper">
        <p className="letter_container">
          <span className="letter">A</span>
        </p>
        <p className="letter_container">
          <span className="letter">B</span>
        </p>
        <p className="letter_container">
          <span className="letter">C</span>
        </p>
        <p className="letter_container">
          <span className="letter">D</span>
        </p>
        <p className="letter_container">
          <span className="letter">E</span>
        </p>
        <p className="letter_container">
          <span className="letter">F</span>
        </p>
      </div>
    </>
  );
}
