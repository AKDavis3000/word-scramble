'use client';
import React from 'react';
import { FaQuestionCircle, FaThumbsUp } from 'react-icons/fa';
import useScramble from '../hooks/useScramble';

export default function Help() {
  const { getHelp, changeHelpModal } = useScramble();

  return (
    <>
      <div className="help_wrapper">
        <FaQuestionCircle
          className="fa-q"
          onClick={changeHelpModal}
        />
        <div className={!getHelp ? 'help_modal no_display' : 'help_modal'}>
          <div className="modal_content">
            <FaThumbsUp
              className="fa-thumb"
              onClick={changeHelpModal}
            />
            <p>
              Create as many words as you can before the timer runs out. Each
              valid word is worth 100 points. Good luck! 😃
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
