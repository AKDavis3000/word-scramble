'use client';

import Image from 'next/image';
import './scss/styles.scss';
import Help from './Components/Help';
import { FaPlay, FaPause, FaArrowLeft, FaCheck } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import useScramble from './hooks/useScramble';

export default function Home() {
  const {
    isGame,
    input,
    slicedLetters,
    submitGuess,
    currentGuess,
    score,
    showLetter,
    setScore,
    getLetterInput,
    deleteLetterInput,
    resetGame,
    startGame,
    saveCurrentGuess,
  } = useScramble();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState(60);
  const timer = useRef(0);

  useEffect(() => {
    if (!isGame) {
      timer.current = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer.current);
    }
  });

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timer.current);
    }
  });

  // causes state to update the current guess immediately upon pressing enter
  useEffect(() => {
    if (currentGuess) {
      console.log('valid');
    }
  }, [currentGuess]);

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${currentGuess}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, [currentGuess]);

  if (isLoading) return <p> Loading...</p>;
  if (!data) return <p>No data</p>;

  console.log(data);
  const words = data?.[0];
  console.log(words);

  // changes the score of the game
  const changeScore = () => {
    if (words || data !== undefined) {
      setScore((prev) => prev + 100);
    } else {
      if (words || data === undefined) {
        setScore((prev) => prev - 10);
      }
    }
  };

  return (
    <>
      <p className="title">Word Scramble</p>
      <Help />
      {isGame ? (
        <div className="start_play">
          <div className="fa-start-wrapper">
            <p className="play_p">Let&apos;s Play!</p>
            <FaPlay
              className="fa-start"
              onClick={startGame}
            />
          </div>
        </div>
      ) : (
        <main className="main_wrapper">
          <div className="score_time_wrapper">
            <div className="score_wrapper">
              <span className="score">{score}</span>
            </div>
            <div className="controls">
              <span className="pause">
                <FaPause className="fa-pause" />
              </span>
              <span className="play">
                <FaPlay className="fa-play" />
              </span>
            </div>
            <div className="time_wrapper">
              <span className="timer"> {countdown}</span>
            </div>
          </div>

          <div className="display_wrapper">
            {words === undefined && (
              <p
                className={
                  words === undefined ? 'invalid validity_display' : 'invalid'
                }>
                Not a valid word
              </p>
            )}
            <div className="display">{input}</div>
          </div>
          <div className="letter_wrapper">
            {slicedLetters.map((l, i) => {
              return (
                <p
                  key={i}
                  className="letter_container">
                  <span
                    onClick={getLetterInput}
                    className="letter">
                    {l}
                  </span>
                </p>
              );
            })}
            <span>
              <FaArrowLeft
                className="fa-arrow"
                onClick={deleteLetterInput}
              />
            </span>
          </div>
          <div className="button_wrapper">
            <button
              className="reset"
              onClick={() => {
                resetGame();
              }}>
              New Game
            </button>
            <button
              className="enter"
              onClick={() => {
                saveCurrentGuess();
                changeScore();
              }}>
              Enter
            </button>
          </div>
        </main>
      )}
    </>
  );
}
