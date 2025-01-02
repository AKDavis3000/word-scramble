'use client';
import { useState, useEffect, use } from 'react';
import letterArray from '@/data/LetterArray';

const useScramble = () => {
  const [isGame, setIsGame] = useState(true);
  const [input, setInput] = useState([]);
  const [slicedLetters, setSlicedLetters] = useState([]);
  const [currentGuess, setCurrentGuess] = useState();
  const [getHelp, setGetHelp] = useState(false);
  const [score, setScore] = useState(0);
  const [showLetter, setShowLetter] = useState(true);
  const [historyGuesses, setHistoryGuesses] = useState([]);
<<<<<<< HEAD
  const joinedInput = input.join('');
=======
>>>>>>> 569eac515cc35a01429ac42ed90fdf347985bbdb

  // opens the help modal
  const changeHelpModal = () => {
    setGetHelp((prev) => !prev);
  };

  // generates 6 letters from an array
  const newLetters = () => {
    const sort = letterArray.sort(() => Math.random() - 0.5);
    const sliced = sort.slice(0, 6);
    return setSlicedLetters((prev) => {
      return sliced;
    });
  };

  // starts the game
  function startGame() {
    setIsGame((prevState) => !prevState);
    newLetters();
  }

  // displays clicked letter in display section
  const getLetterInput = (event: any) => {
    const letters = event.target.textContent;
    const element = event.target;
    setInput((prev) => {
      return [...prev, letters];
    });
  };

  // deletes letter using arrow
  const deleteLetterInput = () => {
    setInput((prev) => {
      return prev.slice(0, -1);
    });
  };

  // saves users guess
<<<<<<< HEAD
  // fix guess to exclude commas
  const saveLastGuess = () => {
    setHistoryGuesses((prev) => {
      return [...prev, joinedInput];
=======
  const saveLastGuess = () => {
    setHistoryGuesses((prev) => {
      return [...prev, input.join()];
>>>>>>> 569eac515cc35a01429ac42ed90fdf347985bbdb
    });
    console.log(historyGuesses);
  };

  // save the current guess and convert to string
  const saveCurrentGuess = () => {
    setCurrentGuess(joinedInput);
    console.log(currentGuess);
    setInput([]);
  };

  // resets the letters
  const resetGame = () => {
    newLetters();
    setInput([]);
    setScore(0);
  };

  return {
    isGame,
    input,
    slicedLetters,
    currentGuess,
    getHelp,
    score,
    showLetter,
    historyGuesses,
    saveLastGuess,
    setCurrentGuess,
    setShowLetter,
    setScore,
    changeHelpModal,
    saveCurrentGuess,
    getLetterInput,
    deleteLetterInput,
    resetGame,
    startGame,
  };
};

export default useScramble;
