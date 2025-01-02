'use client';

import Image from 'next/image';
import './scss/styles.scss';
import Help from './Components/Help';
import { FaPlay, FaPause, FaArrowLeft, FaCheck } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import useScramble from './hooks/useScramble';
import { apiKey, appId } from '@/data/dontcommit';
import getAllWords from '@/lib/getAllWords';

export default function Home() {
  const {
    isGame,
    input,
    // why is newletters not transferred over and used instead of sliced letters??
    slicedLetters,
    currentGuess,
    score,
    showLetter,
    historyGuesses,
    saveLastGuess,
    setCurrentGuess,
    setScore,
    getLetterInput,
    deleteLetterInput,
    resetGame,
    startGame,
    saveCurrentGuess,
  } = useScramble();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState(60);
  const timer = useRef(0);
  const words = data?.[0];

  // starts the timer when the game starts
  useEffect(() => {
    if (!isGame) {
      timer.current = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer.current);
    }
  });

  // stops the timer at 0
  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timer.current);
    }
  });

  // causes state to update the current guess immediately upon pressing enter but isnt working because current guess is undefined the first time enter is pressed
<<<<<<< HEAD
=======
  // useEffect(() => {
  //   currentGuess;
  // }, [currentGuess]);

  // useEffect(() => {
  //   fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${currentGuess}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setIsLoading(false);
  //     });
  // }, [currentGuess]);

  // useEffect(() => {
  //   const url = `https://od-api-sandbox.oxforddictionaries.com/api/v2/search/en-gb?q=${testGuess}`;
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       app_id: appId,
  //       app_key: apiKey,
  //       Accept: 'application/json',
  //     },
  //   };

  //   fetch(url, options)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setIsLoading(false);
  //     });
  // }, [testGuess]);
>>>>>>> 569eac515cc35a01429ac42ed90fdf347985bbdb

  useEffect(() => {
    getAllWords();
  }, []);

  console.log(data);
  if (isLoading) return <p> Loading...</p>;
  if (!data) return <p>No data</p>;

  // changes the score of the game
  // still not working
  const changeScore = () => {
    if (words !== undefined) {
      setScore((prev) => prev + 100);
    }
  };

  // remove the letters after clicked
  // try and fix with a nested filter func
  const remainingLetters = slicedLetters.filter((el) => !input.includes(el));

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
              <span className="timer">{countdown}</span>
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
            {remainingLetters.map((l, i) => {
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
                saveLastGuess();
              }}>
              Enter
            </button>
          </div>
        </main>
      )}
    </>
  );
}
