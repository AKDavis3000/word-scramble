'use client';

import Image from 'next/image';
import './scss/styles.scss';
import Help from './Components/Help';
import getAllWords from '@/lib/getAllWords';
import { FaPlay, FaPause, FaArrowLeft } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import useScramble from './hooks/useScramble';

export default function Home() {
  const {
    isGame,
    input,
    slicedLetters,

    currentGuess,
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

  // useEffect(() => {
  //   if (!isGame) {
  //     timer.current = setInterval(() => {
  //       setCountdown((prev) => prev - 1);
  //     }, 1000);
  //     return () => clearInterval(timer.current);
  //   }
  // });

  // useEffect(() => {
  //   if (countdown <= 0) {
  //     clearInterval(timer.current);
  //   }
  // });

  // causes state to update the current guess immediately upon pressing enter
  useEffect(() => {
    if (currentGuess) {
      console.log('value');
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

  const words = data[0].word;
  console.log(words);

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
              <span className="score">0</span>
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
              <span className="timer">1:00</span>
              {/* <span className="timer"> {countdown}</span> */}
            </div>
          </div>

          <div className="display_wrapper">
            <div className="display">{input}</div>
          </div>
          <div className="letter_wrapper">
            {slicedLetters.map((l, i) => {
              return (
                <p
                  key={i}
                  className="letter_container"
                  onClick={(event) => getLetterInput(event, i)}>
                  {l}
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
              onClick={resetGame}>
              New Game
            </button>

            <button
              className="enter"
              onClick={saveCurrentGuess}>
              Enter
            </button>
          </div>
        </main>
      )}
    </>
  );
}
