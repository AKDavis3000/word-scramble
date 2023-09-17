import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

export default function Help() {
  return (
    <>
      <div className="help_wrapper">
        <FaQuestionCircle className="fa" />

        <div className="help_modal">
          <div className="modal_content">
            <p>
              Create as many words as you can before the timer runs out. Each
              valid word is worth 100 points. If your word is invalid you lose
              10 points. Good luck, chuck! 😃
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
